import Bool from './common/Bool'
import Border from './common/Border'
import Color from './common/Color'
import Val from './common/Val'

export const VerticalAlign = {
  baseline: 'baseline',
  superscript: 'superscript',
  subscript: 'subscript',
}

export const UnderlineType = {
  single: 'single',
}

export default function RunProps($el) {
  return $el && {
    style: Val($el('w:rStyle')),
    isBold: Bool($el('w:b')),
    isItalic: Bool($el('w:i')),
    strike: Bool($el('w:strike')),
    highlight: Val($el('w:highlight')),
    spacing: Val($el('w:spacing')),
    size: Val($el('w:sz')),
    color: Color($el('w:color')),
    underline: Underline($el('w:u')),
    fonts: Fonts($el('w:rFonts')),
    border: Border($el('w:bdr')),
    verticalAlign: Val($el('w:vertAlign')),
  }
}

export function Underline($el) {
  return $el && {
    type: $el.attr('w:val'),
    color: $el.attr('w:color') && Color($el),
  }
}

export function Fonts($el) {
  return $el && {
    hint: $el.attr('w:hint'),
    ascii: $el.attr('w:ascii'),
    hAnsi: $el.attr('w:hAnsi'),
    eastAsia: $el.attr('w:eastAsia'),
    cs: $el.attr('w:cs'),
    asciiTheme: $el.attr('w:asciiTheme'),
    hAnsiTheme: $el.attr('w:hAnsiTheme'),
    eastAsiaTheme: $el.attr('w:eastAsiaTheme'),
    cstheme: $el.attr('w:cstheme'),
  }
}
