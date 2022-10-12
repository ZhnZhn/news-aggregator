import { DP_CLOSE_LEFT } from '../DP';
import Svg100 from './svg/Svg100';

const CL_SVG_CLOSE = "svg-close"
, DF_COLOR = '#d64336'
, S_SVG = { padding: 3 };

const SvgX = ({
  dataPos=DP_CLOSE_LEFT,
  className=CL_SVG_CLOSE,
  style,
  color=DF_COLOR,
  onClick
}) => (
   <button
      aria-label="Close"
      data-pos={dataPos}
      tabIndex="-1"
      className={className}
      style={style}
      onClick={onClick}
   >
     <Svg100
        w="12"
        style={S_SVG}
        strokeLinecap="round"
        strokeWidth="2"
        stroke={color}
     >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </Svg100>
   </button>
);

export default SvgX
