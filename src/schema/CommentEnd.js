export default function CommentEnd($el) {
  return $el && {
    type: 'CommentEnd',
    id: $el.attr('w:id'),
  }
}
