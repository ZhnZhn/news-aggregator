import useTooltip from '../hooks/useTooltip';
import Svg from './svg/Svg';
import { DP_MIDDLE_LEFT } from '../DP';

const CL_BT_MORE = 'bt-more'
, S_SVG = {
  fill: 'black',
  stroke: 'black'
};

const Circle = ({
  cy
}) => (
  <circle cx="3" cy={cy} r="2.5" />
);

const SvgMore = ({
  style,
  svgStyle,
  btRef,
  onClick
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip("More", DP_MIDDLE_LEFT);
  return (
    <button
      type="button"
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      ref={btRef}
      className={CL_BT_MORE}
      style={style}
      onClick={onClick}
    >
      <Svg
        width="6"
        height="24"
        style={{...S_SVG, ...svgStyle}}
      >
        <Circle cy="4" />
        <Circle cy="12" />
        <Circle cy="19" />
      </Svg>
    </button>
  );
};

export default SvgMore
