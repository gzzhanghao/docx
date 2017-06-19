import fs from 'fs'
import Zip from 'jszip'
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

  const zip = await Zip.loadAsync(fs.readFileSync('./sample/sample.docx'))

  zip.forEach(file => {
    mkdirp.sync(path.dirname(path.join('sample/files', file)))
    zip.file(file).nodeStream().pipe(fs.createWriteStream(path.join('sample/files', file)))
  })

  const parse = async path => query(parseXML(await zip.file(path).async('string')).root)

  const relationships = Relationships(await parse('word/_rels/document.xml.rels'))
  const comments = Comments(await parse('word/comments.xml'))
  const document = Document(await parse('word/document.xml'))
  const numbering = Numbering(await parse('word/numbering.xml'))
  const styles = Styles(await parse('word/styles.xml'))

  console.log(JSON.stringify({

    relationships,
    comments,
    document,
    numbering,
    styles,

  }, null, 2))

}).catch(error => {

  console.log(error)
})
