import Break from './Break'
import CommentEnd from './CommentEnd'
import CommentStart from './CommentStart'
import Image from './Image'
import RunProps from './RunProps'
import Tab from './Tab'
import Text from './Text'

export default function Run($el) {
  return $el && {
    type: 'Run',
    props: RunProps($el('w:rPr')),
    children: $el.map({
      'w:t': Text,
      'w:tab': Tab,
      'w:br': Break,
      'w:drawing': Image,
      'w:commentRangeStart': CommentStart,
      'w:commentRangeEnd': CommentEnd,
    }),
  }
}
