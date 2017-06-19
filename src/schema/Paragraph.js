import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Hyperlink from './Hyperlink'
import ParagraphProps from './ParagraphProps'
import Run from './Run'

export default function Paragraph($el) {
  return $el && {
    type: 'Paragraph',
    props: ParagraphProps($el('w:pPr')),
    children: $el.map({
      'w:r': Run,
      'w:hyperlink': Hyperlink,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
