import { HAS_TOUCH } from '../has';

const useTooltip = (
  ariaLabel,
  dataPos
) => HAS_TOUCH
  ? []
  : [
      ariaLabel,
      dataPos
    ];

export default useTooltip;
