import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Paragraph from './Paragraph'
import SectionProps from './SectionProps'
import Table from './Table'

export default function Body($el) {
  return $el && {
    type: 'Body',
    children: $el.map({
      'w:p': Paragraph,
      'w:tbl': Table,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
    sectionProps: SectionProps($el('w:sectPr')),
  }
}
