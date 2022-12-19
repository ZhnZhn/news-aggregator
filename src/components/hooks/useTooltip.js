import { HAS_TOUCH_EVENTS } from '../has';

const useTooltip = (
  ariaLabel,
  dataPos
) => HAS_TOUCH_EVENTS
  ? []
  : [
      ariaLabel,
      dataPos
    ];

export default useTooltip;
