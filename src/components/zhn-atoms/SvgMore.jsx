const CL_BT_MORE = 'bt-more'
, S_BT = {
  verticalAlign: 'sub',
  padding: '0 6px',
  cursor: 'pointer'
}
, S_SVG = {
  fill: 'black',
  stroke: 'black'
};

const SvgMore = ({
  style, svgStyle,
  title='Menu More',
  btRef,
  onClick
}) => {
  return (
    <button
      ref={btRef}
      className={CL_BT_MORE}
      style={{...S_BT, ...style}}
      title={title}
      onClick={onClick}
    >
      <svg
        style={{...S_SVG, ...svgStyle}}
        width="6px" height="22px"
        viewBox="0 0 6 22"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="4" r="2" />
        <circle cx="3" cy="11" r="2" />
        <circle cx="3" cy="18" r="2" />
      </svg>
    </button>
  );
};

export default SvgMore
