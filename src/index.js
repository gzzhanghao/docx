import Zip from 'jszip'
import parseXML from 'xml-parser'

import format from './format'
import DEFAULT_SCHEMA from './schema'

parse.DEFAULT_SCHEMA = DEFAULT_SCHEMA

async function parse(buffer, schema = DEFAULT_SCHEMA) {
  const docx = {

    zip: await Zip.loadAsync(buffer),

    async readFile(path, type = 'nodebuffer') {
      const file = this.zip.file(path)
      if (file) {
        return file.async(type)
      }
    },

    async parseFile(path, force) {
      const content = await this.readFile(path, 'string')

      if (content) {
        return format(parseXML(content).root, schema)
      }

      if (force) {
        throw new Error(`File '${path}' not exists`)
      }
    },
  }

  Object.assign(docx, {
    relations: await docx.parseFile('word/_rels/document.xml.rels', true),
    document: await docx.parseFile('word/document.xml', true),
    comments: await docx.parseFile('word/comments.xml'),
    styles: await docx.parseFile('word/styles.xml'),
  })

  return docx
}

// Workaround for https://github.com/babel/babylon/issues/257
export default parse
