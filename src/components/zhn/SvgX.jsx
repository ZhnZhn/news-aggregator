import Svg100 from './svg/Svg100';

const CL_BT_SVG_X = "bt-svg-x"
, S_SVG = {
  padding: 3,
  stroke: 'inherit'
};

const SvgX = (props) => (
  <button
     type="button"
     aria-label="Close"
     tabIndex="-1"
     className={props.className || CL_BT_SVG_X}
     style={props.style}
     onClick={props.onClick}
  >
    <Svg100
       w="12"
       style={S_SVG}
       strokeLinecap="round"
       strokeWidth="2"
    >
       <path d="M 0,0 L 12,12" />
       <path d="M 12,0 L 0,12" />
    </Svg100>
  </button>
);

export default SvgX
