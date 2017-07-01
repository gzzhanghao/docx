/**
 * @return {boolean}
 */
export default function Bool($el) {
  if (!$el) {
    return $el
  }
  const val = $el.attr('w:val')
  return val == null || ['on', 'true', '1'].includes(val)
}
