import Level from './Level'
import Val from './common/Val'

export default function Number($el) {
  return $el && {
    type: 'Number',
    id: $el.attr('w:numId'),
    abstractId: Val($el('w:abstractNumId')),
    overrides: $el.map({
      'w:lvlOverride': LevelOverride,
    }),
  }
}

export function LevelOverride($el) {
  return $el && {
    type: 'LevelOverride',
    level: $el.attr('w:ilvl'),
    start: Val($el('w:startOverride')),
    override: Level($el('w:lvl')),
  }
}
