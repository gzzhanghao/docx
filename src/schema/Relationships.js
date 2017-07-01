export default function Relationships($el) {
  return $el && {
    type: 'Relationships',
    relationships: $el.map({
      'Relationship': Relationship,
    }),
  }
}

export function Relationship($el) {
  return $el && {
    type: 'Relationship',
    id: $el.attr('Id'),
    relType: $el.attr('Type'),
    target: $el.attr('Target'),
  }
}
