import Zip from 'jszip'
import parseXML from 'xml-parser'

import format from './format'
import Schema from './schema'

export { Schema }

export default async function parse(buffer, schema = Schema) {
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
    numbering: await docx.parseFile('word/numbering.xml'),
    comments: await docx.parseFile('word/comments.xml'),
    styles: await docx.parseFile('word/styles.xml'),
  })

  return docx
}
