export const FieldCharType = {
  begin: 'begin',
  separate: 'separate',
  end: 'end',
}

export default function FieldChar($el) {
  return {
    type: 'FieldChar',
    charType: $el.attr('w:fldCharType'),
  }
}
