import SvgMore from './SvgMore'
import SvgX from './SvgX'

const CL_GAP = "gap-right"
, CL_NOT_SELECTED = "not-selected"
, S_ROOT = {
  position: 'relative',
  backgroundColor: '#3f5178',
  color: 'rgba(164, 135, 212, 1)',
  lineHeight: 1.8,
  padding: '4px 42px 2px 10px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'clip'
}, S_CAPTION = {
    fontSize: '1.125rem',
    fontWeight: 'bold'
}, S_BT_MORE = { marginRight: 6 }
 , S_SVG_MORE = {
    fill: 'inherit',
    stroke: 'inherit'
}, S_SVG_CLOSE = {
    position: 'absolute',
    top: 6,
    right: 0,
    width: 24,
    height: 24
};


const _isFn = fn => typeof fn === "function";

const BrowserCaption = ({
  style,
  caption,
  children,
  onMore,
  onClose
}) => (
  <div className={CL_GAP} style={{...S_ROOT, ...style}}>
    {
       _isFn(onMore) &&
       <SvgMore
          style={S_BT_MORE}
          svgStyle={S_SVG_MORE}
          onClick={onMore}
       />
     }
    <span
       className={CL_NOT_SELECTED}
       style={S_CAPTION}
    >
       {caption}
    </span>
    {children}
    <SvgX
      style={S_SVG_CLOSE}
      onClick={onClose}
    />
  </div>
);

export default BrowserCaption
