import Color from './Color'

export const BorderType = {
  nil: 'nil',
  none: 'none',
  single: 'single',
}

export default function Border($el) {
  return $el && {
    type: $el.attr('w:val'),
    color: $el.attr('w:color') && Color($el),
    size: $el.attr('w:sz'),
  }
}
