import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import TableProps from './table/TableProps'
import TableRow from './table/TableRow'

export default function Table($el) {
  if (!$el) {
    return
  }
  const grid = $el('w:tblGrid')
  return {
    type: 'Table',
    props: TableProps($el('w:tblPr')),
    grid: grid && grid.map({
      'w:gridCol': $col => $col.attr('w:w'),
    }),
    children: $el.map({
      'w:tr': TableRow,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
