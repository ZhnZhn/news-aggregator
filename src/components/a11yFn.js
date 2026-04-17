import { joinByBlank } from '../utils/joinBy';
import { HAS_TOUCH_EVENTS } from './has';

const _crAriaLabel = (
  ariaLabel,
  hotKey
) => hotKey
  ? joinByBlank(ariaLabel, `[${hotKey.toLowerCase()}]`)
  : ariaLabel;

export const crTooltip = (
  ariaLabel,
  dataPos,
  hotKey
) => HAS_TOUCH_EVENTS
  ? []
  : [
      _crAriaLabel(ariaLabel, hotKey),
      dataPos
    ]
