import Background from './Background'
import Body from './Body'

export default function Document($el) {
  return $el && {
    type: 'Document',
    background: Background($el('w:background')),
    body: Body($el('w:body')),
  }
}
