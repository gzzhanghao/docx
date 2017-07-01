import Bool from './common/Bool'
import ParagraphProps from './ParagraphProps'
import RunProps from './RunProps'
import TableCellProps from './table/TableCellProps'
import TableProps from './table/TableProps'
import TableRowProps from './table/TableRowProps'
import Val from './common/Val'

export const StyleType = {
  paragraph: 'paragraph',
  character: 'character',
  numbering: 'numbering',
  table: 'table',
}

export default function Style($el) {
  return $el && {
    type: 'Style',
    styleType: $el.attr('w:type'),
    id: $el.attr('w:styleId'),
    isDefault: $el.attr('w:default'),
    isCustom: $el.attr('w:customStyle'),
    name: Val($el('w:name')),
    basedOn: Val($el('w:basedOn')),
    next: Val($el('w:next')),
    link: Val($el('w:link')),
    aliases: Val($el('w:aliases')),
    isHidden: Bool($el('w:hidden')),
    priority: Val($el('w:uiPriority')),
    isLocked: Bool($el('w:locked')),
    isSemiHidden: Bool($el('w:semiHidden')),
    isAutoRedefined: Bool($el('w:autoRedefined')),
    isUnhideWhenUsed: Bool($el('w:unhideWhenUsed')),
    paragraphProps: ParagraphProps($el('w:pPr')),
    runProps: RunProps($el('w:rPr')),
    tableProps: TableProps($el('w:tblPr')),
    tableRowProps: TableRowProps($el('w:trPr')),
    tableCellProps: TableCellProps($el('w:tcPr')),
    conditionalTableProps: $el.map({
      'w:tblStylePr': ConditionalTableProps,
    }),
  }
}

export function ConditionalTableProps($el) {
  return $el && {
    type: $el.attr('w:type'),
    paragraphProps: ParagraphProps($el('w:pPr')),
    runProps: RunProps($el('w:rPr')),
    tableProps: TableProps($el('w:tblPr')),
    tableRowProps: TableRowProps($el('w:trPr')),
    tableCellProps: TableCellProps($el('w:tcPr')),
  }
}
