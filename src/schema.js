const ranges = [
  'w:bookmarkStart',
  'w:bookmarkEnd',
  'w:commentRangeStart',
  'w:commentRangeEnd',
]

const contents = [
  'w:p',
  'w:tbl',
  ...ranges,
]

export default {

  'Relationships': [
    'Relationship',
  ],

  'w:body': contents,

  'w:p': [
    'w:r',
    'w:hyperlink',
    ...ranges,
  ],

  'w:r': [
    'w:br',
    'w:t',
    'w:tab',
    'w:fldChar',
    'w:instrText',
    'w:drawing',
    'w:pict',
    ...ranges,
  ],

  'w:hyperlink': [
    'w:r',
    'w:hyperlink',
    ...ranges,
  ],

  'w:tbl': [
    'w:tr',
    ...ranges,
  ],

  'w:tblGrid': [
    'w:gridCol',
  ],

  'w:tr': [
    'w:tc',
    ...ranges,
  ],

  'w:tc': contents,

  'w:comments': [
    'w:comment',
  ],

  'w:comment': contents,

  'w:styles': [
    'w:style',
  ],

  'w:numbering': {
    abstracts: [
      'w:abstractNum',
    ],
    numbers: [
      'w:num',
    ],
  },

  'w:abstractNum': [
    'w:lvl',
  ],

  'w:num': [
    'w:lvlOverride',
  ],
}
