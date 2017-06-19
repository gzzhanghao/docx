export const TableSizeType = {
  nil: 'nil',
  pct: 'pct',
  dxa: 'dxa',
  auto: 'auto',
}

export default function TableSize($el) {
  return $el && {
    size: $el.attr('w:w'),
    type: $el.attr('w:type'),
  }
}
