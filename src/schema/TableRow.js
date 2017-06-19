import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import TableCell from './TableCell'
import TableRowProps from './TableRowProps'

export default function TableRow($el) {
  return $el && {
    type: 'TableRow',
    props: TableRowProps($el('w:trPr')),
    children: $el.map({
      'w:tc': TableCell,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
