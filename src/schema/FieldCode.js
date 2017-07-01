export default function FieldCode($el) {
  return $el && {
    type: 'FieldCode',
    content: $el.content,
  }
}
