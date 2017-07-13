import { parseString } from '@gzzhanghao/xml2js'

const PARSER_OPTIONS = {
  explicitRoot: false,
  explicitChildren: true,
  includeWhiteChars: true,
  preserveChildrenOrder: true,
  saxOptions: { parseEntities: false },
}

export default function parseXML(string) {
  return new Promise((resolve, reject) => {
    parseString(string, PARSER_OPTIONS, (error, result) => {
      if (error) {
        return reject(error)
      }
      resolve(result)
    })
  })
}
