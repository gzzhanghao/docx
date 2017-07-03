import { XmlEntities } from 'html-entities'

const entities = new XmlEntities
const decode = content => content && entities.decode(content)

export default function format(element, schema) {

  let listChildren = schema[element.name] || {}
  if (Array.isArray(listChildren)) {
    listChildren = { $children: listChildren }
  }

  const listKey = Object.keys(listChildren)
  const listMap = {}

  for (const key of listKey) {
    for (const name of listChildren[key]) {
      listMap[name] = key
    }
  }

  const result = {
    $type: element.name,
    $content: decode(element.content),
  }

  for (const key of Object.keys(element.attributes)) {
    result[`@${key}`] = decode(element.attributes[key])
  }

  for (const key of listKey) {
    result[key] = []
  }

  for (const child of element.children) {
    if (listMap[child.name]) {
      result[listMap[child.name]].push(format(child, schema))
    } else {
      result[child.name] = format(child, schema)
    }
  }

  return result
}
