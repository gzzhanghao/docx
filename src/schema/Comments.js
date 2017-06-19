import Comment from './Comment'

export default function Comments($el) {
  return $el && {
    type: 'Comments',
    comments: $el.map({
      'w:comment': Comment,
    }),
  }
}
