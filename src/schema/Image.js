export const ImageType = {
  embed: 'embed',
  link: 'link',
}

export default function Image($el) {
  // @todo
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
