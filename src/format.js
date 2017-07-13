import { decodeXML } from 'entities'

export default function format(element, schema) {

  let listChildren = schema[element['#name']] || {}
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
    $type: element['#name'],
    $content: decodeXML(element._),
  }

  for (const key of Object.keys(element.$ || {})) {
    result[`@${key}`] = decodeXML(element.$[key])
  }

  for (const key of listKey) {
    result[key] = []
  }

  for (const child of element.$$ || []) {
    if (listMap[child['#name']]) {
      result[listMap[child['#name']]].push(format(child, schema))
    } else {
      result[child['#name']] = format(child, schema)
    }
  }

  return result
}
