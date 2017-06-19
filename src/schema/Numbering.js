import AbstractNumber from './AbstractNumber'
import Number from './Number'

export default function Numbering($el) {
  return $el && {
    type: 'Numbering',
    abstracts: $el.map({
      'w:abstractNum': AbstractNumber,
    }),
    numbers: $el.map({
      'w:num': Number,
    }),
  }
}
