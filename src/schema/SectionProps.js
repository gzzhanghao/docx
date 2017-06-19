export default function SectionProps($el) {
  return $el && {
    headers: $el.map({
      'w:headerReference': Reference,
    }),
    footers: $el.map({
      'w:footerReference': Reference,
    }),
  }
}

export function Reference($el) {
  return $el && {
    id: $el.attr('r:id'),
    type: $el.attr('w:type'),
  }
}
