export default function Relationships($el) {
  return $el && {
    type: 'Relationships',
    list: $el.map({
      'Relationship': Relationship,
    }),
  }
}

export function Relationship($el) {
  return $el && {
    type: 'Relationship',
    id: $el.attr('Id'),
    type: $el.attr('Type'),
    target: $el.attr('Target'),
  }
}
