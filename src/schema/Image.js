export default function Image($el) {

  try {

    const $inline = $el('wp:inline')
    const $extent = $inline('wp:extent')
    const $blip = $inline('a:graphic')('a:graphicData')('pic:pic')('pic:blipFill')('a:blip')

    const embed = $blip.attr('r:embed')

    return {
      type: 'Image',
      size: {
        width: $extent.attr('cx'),
        height: $extent.attr('cy'),
      },
      src: embed,
    }

  } catch (error) {

    return {
      type: 'MalformedImage',
      error: error,
      el: $el.el,
    }
  }

  if (!$el) {
    return
  }

  const $inline = $el('wp:inline')

  if (!$inline) {
    return
  }

  $inline('')

  $inline('a:graphic')

  return $el && {
    type: 'Image',
    size: {
      width: Number,
      height: Number,
    },
    imageType: ImageType,
    src: String,
  }
}
