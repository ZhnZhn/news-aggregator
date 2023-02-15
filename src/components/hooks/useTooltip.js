import { HAS_TOUCH_EVENTS } from '../has';

const _crAriaLabel = (
  ariaLabel,
  hotKey
) => hotKey
  ? `${ariaLabel || ''} [${hotKey.toLowerCase()}]`
  : ariaLabel;

const useTooltip = (
  ariaLabel,
  dataPos,
  hotKey
) => HAS_TOUCH_EVENTS
  ? []
  : [
      _crAriaLabel(ariaLabel, hotKey),
      dataPos
    ];

export default useTooltip;
