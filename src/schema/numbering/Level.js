import Val from '../common/Val'
import RunProps from '../RunProps'
import ParagraphProps from '../ParagraphProps'

export const NumberFormat = {
  decimal: 'decimal',                                           // Decimal Numbers
  upperRoman: 'upperRoman',                                     // Uppercase Roman Numerals
  lowerRoman: 'lowerRoman',                                     // Lowercase Roman Numerals
  upperLetter: 'upperLetter',                                   // Uppercase Latin Alphabet
  lowerLetter: 'lowerLetter',                                   // Lowercase Latin Alphabet
  ordinal: 'ordinal',                                           // Ordinal
  cardinalText: 'cardinalText',                                 // Cardinal Text
  ordinalText: 'ordinalText',                                   // Ordinal Text
  hex: 'hex',                                                   // Hexadecimal Numbering
  chicago: 'chicago',                                           // Chicago Manual of Style
  ideographDigital: 'ideographDigital',                         // Ideographs
  japaneseCounting: 'japaneseCounting',                         // Japanese Counting System
  aiueo: 'aiueo',                                               // AIUEO Order Hiragana
  iroha: 'iroha',                                               // Iroha Ordered Katakana
  decimalFullWidth: 'decimalFullWidth',                         // Double Byte Arabic Numerals
  decimalHalfWidth: 'decimalHalfWidth',                         // Single Byte Arabic Numerals
  japaneseLegal: 'japaneseLegal',                               // Japanese Legal Numbering
  japaneseDigitalTenThousand: 'japaneseDigitalTenThousand',     // Japanese Digital Ten Thousand Counting System
  decimalEnclosedCircle: 'decimalEnclosedCircle',               // Decimal Numbers Enclosed in a Circle
  decimalFullWidth2: 'decimalFullWidth2',                       // Double Byte Arabic Numerals Alternate
  aiueoFullWidth: 'aiueoFullWidth',                             // Full-Width AIUEO Order Hiragana
  irohaFullWidth: 'irohaFullWidth',                             // Full-Width Iroha Ordered Katakana
  decimalZero: 'decimalZero',                                   // Initial Zero Arabic Numerals
  bullet: 'bullet',                                             // Bullet
  ganada: 'ganada',                                             // Korean Ganada Numbering
  chosung: 'chosung',                                           // Korean Chosung Numbering
  decimalEnclosedFullstop: 'decimalEnclosedFullstop',           // Decimal Numbers Followed by a Period
  decimalEnclosedParen: 'decimalEnclosedParen',                 // Decimal Numbers Enclosed in Parenthesis
  decimalEnclosedCircleChinese: 'decimalEnclosedCircleChinese', // Decimal Numbers Enclosed in a Circle
  ideographEnclosedCircle: 'ideographEnclosedCircle',           // Ideographs Enclosed in a Circle
  ideographTraditional: 'ideographTraditional',                 // Traditional Ideograph Format
  ideographZodiac: 'ideographZodiac',                           // Zodiac Ideograph Format
  ideographZodiacTraditional: 'ideographZodiacTraditional',     // Traditional Zodiac Ideograph Format
  taiwaneseCounting: 'taiwaneseCounting',                       // Taiwanese Counting System
  ideographLegalTraditional: 'ideographLegalTraditional',       // Traditional Legal Ideograph Format
  taiwaneseCountingThousand: 'taiwaneseCountingThousand',       // Taiwanese Counting Thousand System
  taiwaneseDigital: 'taiwaneseDigital',                         // Taiwanese Digital Counting System
  chineseCounting: 'chineseCounting',                           // Chinese Counting System
  chineseLegalSimplified: 'chineseLegalSimplified',             // Chinese Legal Simplified Format
  chineseCountingThousand: 'chineseCountingThousand',           // Chinese Counting Thousand System
  koreanDigital: 'koreanDigital',                               // Korean Digital Counting System
  koreanCounting: 'koreanCounting',                             // Korean Counting System
  koreanLegal: 'koreanLegal',                                   // Korean Legal Numbering
  koreanDigital2: 'koreanDigital2',                             // Korean Digital Counting System Alternate
  vietnameseCounting: 'vietnameseCounting',                     // Vietnamese Numerals
  russianLower: 'russianLower',                                 // Lowercase Russian Alphabet
  russianUpper: 'russianUpper',                                 // Uppercase Russian Alphabet
  none: 'none',                                                 // No Numbering
  numberInDash: 'numberInDash',                                 // Number With Dashes
  hebrew1: 'hebrew1',                                           // Hebrew Numerals
  hebrew2: 'hebrew2',                                           // Hebrew Alphabet
  arabicAlpha: 'arabicAlpha',                                   // Arabic Alphabet
  arabicAbjad: 'arabicAbjad',                                   // Arabic Abjad Numerals
  hindiVowels: 'hindiVowels',                                   // Hindi Vowels
  hindiConsonants: 'hindiConsonants',                           // Hindi Consonants
  hindiNumbers: 'hindiNumbers',                                 // Hindi Numbers
  hindiCounting: 'hindiCounting',                               // Hindi Counting System
  thaiLetters: 'thaiLetters',                                   // Thai Letters
  thaiNumbers: 'thaiNumbers',                                   // Thai Numerals
  thaiCounting: 'thaiCounting',                                 // Thai Counting System
}

export default function Level($el) {
  return $el && {
    type: 'Level',
    level: $el.attr('w:ilvl'),
    numberFormat: Val($el('w:numFmt')),
    restart: Val($el('w:lvlRestart')),
    paragraphStyle: Val($el('w:pStyle')),
    text: LevelText($el('w:lvlText')),
    align: Val($el('w:lvlJc')),
    paragraphProps: ParagraphProps($el('w:pPr')),
    runProps: RunProps($el('w:rPr')),
  }
}

export function LevelText($el) {
  return $el && {
    val: $el.attr('w:val'),
    isNull: $el.attr('w:null'),
  }
}
