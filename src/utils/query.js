export default function $(el) {
  const children = el.children.map($)

  return Object.assign(name => children.find(child => child.type === name), {

    type: el.name,

    content: el.content,

    attr: key => el.attributes[key],

    map(handlers) {
      const result = []
      for (const child of children) {
        if (!handlers[child.type]) {
          continue
        }
        const item = handlers[child.type](child)
        if (item) {
          result.push(item)
        }
      }
      return result
    },
  })
}
