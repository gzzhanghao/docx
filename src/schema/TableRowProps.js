import Bool from './common/Bool'
import TableSize from './table/TableSize'

export const HeightRule = {
  auto: 'auto',
  exact: 'exact',
  atLeast: 'atLeast',
}

export default function TableRowProps($el) {
  return $el && {
    isHeader: Bool($el('w:tblHeader')),
    cellSpacing: TableSize($el('w:tblCellSpacing')),
    height: Height($el('w:trHeight')),
  }
}

export function Height($el) {
  return $el && {
    size: $el.attr('w:val'),
    rule: $el.attr('w:hRule'),
  }
}
