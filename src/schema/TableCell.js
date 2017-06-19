import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Paragraph from './Paragraph'
import Table from './Table'
import TableCellProps from './TableCellProps'

export default function TableCell($el) {
  return $el && {
    type: 'TableCell',
    props: TableCellProps($el('w:tcPr')),
    children: $el.map({
      'w:p': Paragraph,
      'w:tbl': Table,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
