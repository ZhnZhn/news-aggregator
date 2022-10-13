import has from '../has';

const HAS_TOUCH = has.HAS_TOUCH;

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
