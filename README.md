# docx

A dead simple docx parser.

## Usage

```javascript
import parseDocx from '@gzzhanghao/docx'

parseDocx(buffer).then(async docx => {

  // access jszip object
  docx.zip

  // read file in docx
  // type: string | text | binarystring | base64 | array | uint8array | arraybuffer | nodebuffer
  await docx.readFile(path, type)

  // parse xml file in docx
  await docx.parseFile(path)

  // access to files in docx
  docx.relations // word/_rels/document.xml.rels
  docx.document  // word/document.xml
  docx.numbering // word/numbering.xml
  docx.comments  // word/comments.xml
  docx.styles    // word/styles.xml
})
```
