export default function Color($el) {
  return $el && {
    color: $el.attr('w:color') || $el.attr('w:val'),
    themeColor: $el.attr('w:themeColor'),
    themeTint: $el.attr('w:themeTint'),
    themeShade: $el.attr('w:themeShade'),
  }
}
