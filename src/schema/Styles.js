import ParagraphProps from './ParagraphProps'
import RunProps from './RunProps'
import Style from './Style'

export default function Styles($el) {
  return $el && {
    type: 'Styles',
    defaults: Defaults($el('w:docDefaults')),
    styles: $el.map({
      'w:style': Style,
    }),
  }
}

export function Defaults($el) {
  if (!$el) {
    return
  }
  const paragraphDefaults = $el('w:pPrDefault')
  const runDefaults = $el('w:rPrDefault')
  return $el && {
    paragraph: ParagraphProps(paragraphDefaults && paragraphDefaults('w:pPr')),
    run: RunProps(runDefaults && runDefaults('w:rPr')),
  }
}
