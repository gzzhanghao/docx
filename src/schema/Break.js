export const BreakType = {
  textWrapping: 'textWrapping',
  column: 'column',
  page: 'page',
}

export default function Break($el) {
  return $el && {
    type: 'Break',
    breakType: $el.attr('w:type'),
  }
}
