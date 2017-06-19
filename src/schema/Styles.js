import ParagraphProps from './ParagraphProps'
import RunProps from './RunProps'
import Style from './Style'

export default function Styles($el) {
  if (!$el) {
    return
  }
  const paragraphDefaults = $el('w:pPrDefaults')
  const runDefaults = $el('w:rPrDefaults')
  return {
    type: 'Styles',
    defaults: {
      paragraph: ParagraphProps(paragraphDefaults && paragraphDefaults('w:pPr')),
      run: RunProps(runDefaults && runDefaults('w:rPr')),
    },
    styles: $el.map({
      'w:style': Style,
    }),
  }
}
