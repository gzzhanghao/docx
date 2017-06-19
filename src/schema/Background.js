import Color from './common/Color'

export default function Background($el) {
  return $el && Object.assign(Color($el), {
    type: 'Background',
  })
}
