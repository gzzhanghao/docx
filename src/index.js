import _ from 'lodash'
import fs from 'fs'
import Zip from 'jszip'
import Delta from 'quill-delta'
import mkdirp from 'mkdirp'
import parseXML from 'xml-parser'
import { posix as path } from 'path'

import query from './utils/query'

import Comments from './schema/Comments'
import Document from './schema/Document'
import Numbering from './schema/Numbering'
import Relationships from './schema/Relationships'
import Styles from './schema/Styles'

Promise.resolve().then(async () => {

  const zip = await Zip.loadAsync(fs.readFileSync('./sample.docx'))

  zip.forEach(file => {
    mkdirp.sync(path.dirname(path.join('sample', file)))
    zip.file(file).nodeStream().pipe(fs.createWriteStream(path.join('sample', file)))
  })

  const parse = async path => query(parseXML(await zip.file(path).async('string')).root)

  const relationships = Relationships(await parse('word/_rels/document.xml.rels'))
  const comments = Comments(await parse('word/comments.xml'))
  const document = Document(await parse('word/document.xml'))
  const numbering = Numbering(await parse('word/numbering.xml'))
  const styles = Styles(await parse('word/styles.xml'))

  // Start parsing

  let link = undefined
  let delta = new Delta

  function $each(list, handlers) {
    for (const item of list) {
      if (handlers[item.type]) {
        handlers[item.type](item)
      }
    }
  }

  function paragraphProps(props) {
    const attributes = {}

    if (!props) {
      return attributes
    }

    if (props.style != null) {
      const style = styles.styles.find(style => style.id === props.style)
      const heading = (style.name || '').match(/^heading\s+([1-6])$/i)

      if (heading) {
        attributes.header = heading[1] | 0
      }

      Object.assign(attributes, paragraphProps(style.paragraphProps))
    }

    if (props.indent != null) {
      attributes.indent = (parseInt(props.indent.left) / 420) | 0
    }

    if (props.list) {
      const number = numbering.numbers.find(num => num.id === props.list.numId)

      if (number) {
        const abstract = numbering.abstracts.find(num => num.id === number.abstractId)
        const level = abstract.levels.find(level => level.level === props.list.level)

        attributes.indent = parseInt(props.list.level)
        attributes.list = level.numberFormat === 'bullet' ? 'bullet' : 'ordered'
      }
    }

    return attributes
  }

  function runProps(props) {
    const attributes = {}

    if (!props) {
      return attributes
    }

    Object.assign(attributes, {
      link,
      background: props.highlight,
      bold: props.isBold,
      italic: props.isItalic,
      strike: props.isStrike,
    })

    if (props.verticalAlign) {
      attributes.script = props.verticalAlign.slice(0, - 'Script'.length)
    }

    if (props.color) {
      const color = props.color && props.color.color

      if (color && color.match(/^[0-9a-f]{6}$/i)) {
        attributes.color = `#${color}`
      }
    }

    if (props.underline) {
      attributes.underline = true
    }

    return attributes
  }

  $each(document.body.children, {

    Paragraph(paragraph) {

      const sectionAttributes = paragraphProps(paragraph.props)
      const textAttributeOverrides = runProps(paragraph.props.runProps)

      $each(paragraph.children, {

        Run,

        Hyperlink(hyperlink) {
          link = hyperlink.id
          $each(hyperlink.children, {
            Run,
            CommentStart,
            CommentEnd,
          })
          link = undefined
        },

        CommentStart,

        CommentEnd,
      })

      function Run(run) {

        const textAttributes = Object.assign({}, textAttributeOverrides, runProps(run.props))

        $each(run.children, {

          Text(text) {
            delta = delta.insert(text.content, textAttributes)
          },

          Tab(tab) {
            delta = delta.insert('\t', textAttributes)
          },

          Break(brk) {
            delta = delta.insert('\n', (sectionAttributes, { page: brk.breakType === 'column' }))
          },

          Image(image) {
            delta = delta.insert({ image: image.src }, { width: image.size.width, height: image.size.height })
          },

          FieldChar(fieldChar) {
            switch (fieldChar.charType) {

              case 'begin': {
                // @todo
                break
              }

              case 'separate': {
                // @todo
                break
              }

              case 'end': {
                link = undefined
                break
              }
            }
          },

          FieldCode(fieldCode) {
            const hyperlink = _.unescape(fieldCode.content).match(/^hyperlink\s+"(.+)"\s*$/i)
            if (!hyperlink) {
              return
            }
            link = hyperlink[1]
          },

          CommentStart,

          CommentEnd,
        })
      }

      delta = delta.insert('\n', sectionAttributes)
    },

    Table(Table) {
      // @todo
    },

    CommentStart,

    CommentEnd,
  })

  function CommentStart(commentStart) {
    // body...
  }

  function CommentEnd(commentEnd) {
    // body...
  }

  console.log(JSON.stringify({

    delta,
    relationships,
    comments,
    document,
    numbering,
    styles,

  }, null, 2))

}).catch(error => {

  console.log(error)
})
