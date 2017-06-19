export default function CommentStart($el) {
  return $el && {
    type: 'CommentStart',
    id: $el.attr('w:id'),
  }
}
