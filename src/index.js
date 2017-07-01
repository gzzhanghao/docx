import Zip from 'jszip'
import parseXML from 'xml-parser'

import format from './format'

export default async function parse(buffer) {
  const result = {

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
        return format(parseXML(content).root)
      }

      if (force) {
        throw new Error(`File '${path}' not exists`)
      }
    },
  }

  Object.assign(result, {
    relations: await result.parseFile('word/_rels/document.xml.rels', true),
    document: await result.parseFile('word/document.xml', true),
    comments: await result.parseFile('word/comments.xml'),
    styles: await result.parseFile('word/styles.xml'),
  })

  return result
}
