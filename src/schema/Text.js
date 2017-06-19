export default function Text($el) {
  return $el && {
    type: 'Text',
    content: $el.content,
  }
}
