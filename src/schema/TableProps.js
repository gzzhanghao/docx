import Val from './common/Val'
import Border from './common/Border'
import TableSize from './table/TableSize'
import CellMargin from './table/CellMargin'

export const TableAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
  both: 'both',
}

export default function TableProps($el) {
  return $el && {
    style: Val($el('w:tblStyle')),
    width: TableSize($el('w:tblW')),
    align: Val($el('w:jc')),
    cellSpacing: TableSize($el('w:tblCellSpacing')),
    cellMargin: CellMargin($el('w:tblCellMar')),
    borders: Borders($el('w:tblBorders')),
  }
}

export function Borders($el) {
  return $el && {
    top: Border($el('w:top')),
    left: Border($el('w:left')),
    bottom: Border($el('w:bottom')),
    right: Border($el('w:right')),
    insideHorizontal: Border($el('w:insideH')),
    insideVertical: Border($el('w:insideV')),
  }
}
