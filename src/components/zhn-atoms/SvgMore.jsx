import {
  DP_MIDDLE_LEFT
} from '../DP';

const CL_BT_MORE = 'bt-more'
, S_SVG = {
  fill: 'black',
  stroke: 'black'
};

const SvgMore = ({
  style,
  svgStyle,
  btRef,
  onClick
}) => {
  return (
    <button
      aria-label="More"
      data-pos={DP_MIDDLE_LEFT}
      ref={btRef}
      className={CL_BT_MORE}
      style={style}
      onClick={onClick}
    >
      <svg
        style={{...S_SVG, ...svgStyle}}
        width="6px"
        height="24px"
        viewBox="0 0 6 24"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="4" r="2.5" />
        <circle cx="3" cy="12" r="2.5" />
        <circle cx="3" cy="19" r="2.5" />
      </svg>
    </button>
  );
};

export default SvgMore
