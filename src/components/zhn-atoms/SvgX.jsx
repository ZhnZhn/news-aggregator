//import PropTypes from 'prop-types'

const CL_SVG_CLOSE = "svg-close"
, DF_COLOR = '#d64336'
, S_SVG = { padding: 3 };

const SvgX = ({
  className=CL_SVG_CLOSE,
  style,
  color=DF_COLOR,
  onClick
}) => (
   <button
      tabIndex="-1"
      className={className}
      style={style}
      onClick={onClick}
   >
     <svg viewBox="0 0 12 12" width="100%" height="100%"
          preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
          style={S_SVG}
          strokeLinecap="round"
          strokeWidth="2"
          stroke={color}
      >
        <path d="M 0,0 L 12,12" />
        <path d="M 12,0 L 0,12" />
     </svg>
   </button>
);

/*
SvgX.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}
*/

export default SvgX
