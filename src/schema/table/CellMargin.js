import TableSize from './TableSize'

export default function CellMargin($el) {
  return $el && {
    top: TableSize($el('w:top')),
    left: TableSize($el('w:left')),
    right: TableSize($el('w:right')),
    bottom: TableSize($el('w:bottom')),
  }
}
