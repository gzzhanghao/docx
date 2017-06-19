import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Paragraph from './Paragraph'
import Table from './Table'

export default function Comment($el) {
  return $el && {
    type: 'Comment',
    id: $el.attr('w:id'),
    author: $el.attr('w:author'),
    date: $el.attr('w:date'),
    content: $el.map({
      'w:p': Paragraph,
      'w:tbl': Table,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
