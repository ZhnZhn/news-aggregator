import useTooltip from '../hooks/useTooltip';
import Svg from './svg/Svg';
import { DP_MIDDLE_LEFT } from '../DP';

const S_SVG = {
  fill: 'inherit',
  stroke: 'inherit'
};

const Circle = ({
  cy
}) => (
  <circle cx="3" cy={cy} r="2.5" />
);

const SvgMore = ({
  btRef,
  className,
  onClick
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip("More", DP_MIDDLE_LEFT);
  return (
    <button
      ref={btRef}
      type="button"
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      className={className}
      onClick={onClick}
    >
      <Svg
        w="6"
        h="24"
        style={S_SVG}
      >
        <Circle cy="4" />
        <Circle cy="12" />
        <Circle cy="19" />
      </Svg>
    </button>
  );
};

export default SvgMore
