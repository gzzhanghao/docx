import Val from './common/Val'
import Level from './Level'

export default function AbstractNumber($el) {
  return $el && {
    type: 'AbstractNumber',
    id: $el.attr('w:abstractNumId'),
    name: Val($el('w:name')),
    styleLink: Val($el('w:styleLink')),
    numStyleLink: Val($el('w:numStyleLink')),
    levels: $el.map({
      'w:lvl': Level,
    }),
  }
}
