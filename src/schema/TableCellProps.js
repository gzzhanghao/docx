import Border from './common/Border'
import CellMargin from './table/CellMargin'
import TableSize from './table/TableSize'
import Val from './common/Val'

export const TableCellMergeType = {
  continue: 'continue',
  restart: 'restart',
}

export const TableCellVerticalAlignType = {
  top: 'top',
  center: 'center',
  both: 'both',
  bottom: 'bottom',
}

export const TableCellShadingType = {
  nil: 'nil',
  clear: 'clear',
  solid: 'solid',
}

export default function TableCellProps($el) {
  if (!$el) {
    return
  }
  const verticalMerge = $el('w:vMerge')
  return {
    width: TableSize($el('w:tcW')),
    gridSpan: Val($el('w:gridSpan')),
    verticalMerge: Val(verticalMerge) || !!verticalMerge,
    borders: Borders($el('w:tcBorders')),
    margin: CellMargin($el('w:tcMargin')),
    verticalAlign: Val($el('w:vAlign')),
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
    leftToRight: Border($el('w:tl2br')),
    rightToLeft: Border($el('w:tr2bl')),
  }
}
