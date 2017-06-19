import Val from './common/Val'
import Bool from './common/Bool'
import Border from './common/Border'
import RunProps from './RunProps'
import SectionProps from './SectionProps'

export const ParagraphAlign = {
  left: 'left',
  center: 'center',
  right: 'right',
  both: 'both',
}

export const ParagraphVerticalAlign = {
  top: 'top',
  center: 'center',
  baseline: 'baseline',
  bottom: 'bottom',
  auto: 'auto',
}

export const SpacingLineRule = {
  auto: 'auto',
  exact: 'exact',
  atLeast: 'atLeast',
}

export default function ParagraphProps($el) {
  return $el && {
    style: Val($el('w:pStyle')),
    align: Val($el('w:jc')),
    verticalAlign: Val($el('w:textAlignment')),
    isKeepNext: Bool($el('w:keepNext')),
    isKeepLines: Bool($el('w:keepLines')),
    isPageBreakBefore: Bool($el('w:PageBreakBefore')),
    list: List($el('w:numPr')),
    border: Borders($el('w:pBdr')),
    spacing: Spacing($el('w:spacing')),
    indent: Indent($el('w:ind')),
    runProps: RunProps($el('w:rPr')),
    sectionProps: RunProps($el('w:sectPr')),
  }
}

export function List($el) {
  return $el && {
    level: Val($el('w:ilvl')),
    numId: Val($el('w:numId')),
  }
}

export function Borders($el) {
  return $el && {
    top: Border($el('w:top')),
    left: Border($el('w:left')),
    right: Border($el('w:right')),
    bottom: Border($el('w:bottom')),
  }
}

export function Spacing($el) {
  return $el && {
    before: $el.attr('w:before'),
    beforeLines: $el.attr('w:beforeLines'),
    after: $el.attr('w:after'),
    afterLines: $el.attr('w:afterLines'),
    line: $el.attr('w:line'),
    lineRule: $el.attr('w:lineRule'),
  }
}

export function Indent($el) {
  return $el && {
    left: $el.attr('w:left'),
    leftChars: $el.attr('w:leftChars'),
    right: $el.attr('w:right'),
    rightChars: $el.attr('w:rightChars'),
    hanging: $el.attr('w:hanging'),
    hangingChars: $el.attr('w:hangingChars'),
    firstLine: $el.attr('w:firstLine'),
    firstLineChars: $el.attr('w:firstLineChars'),
  }
}
