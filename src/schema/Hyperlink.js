import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Run from './Run'

export default function Hyperlink($el) {
  return $el && {
    type: 'Hyperlink',
    id: $el.attr('r:id'),
    children: $el.map({
      'w:r': Run,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
