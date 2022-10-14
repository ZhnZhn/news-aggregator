import { CL_SELECT_NONE } from '../styles/CL';

import SvgMore from './SvgMore';
import SvgX from './SvgX';

const CL_GAP = "gap-right"
, S_ROOT = {
  position: 'relative',
  backgroundColor: '#3f5178',
  color: '#a487d4',
  lineHeight: 1.8,
  padding: '4px 42px 2px 4px',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '4px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'clip'
}
, S_PL_10 = {
  paddingLeft: 10
}
, S_CAPTION = {
  fontSize: '1.125rem',
  fontWeight: 'bold'
}, S_BT_MORE = {
  verticalAlign: 'sub',
  position: 'relative',
  top: 2,
  marginRight: 4
}
, S_SVG_MORE = {
  fill: 'inherit',
  stroke: 'inherit'
}, S_SVG_CLOSE = {
  position: 'absolute',
  top: 6,
  right: 0,
  width: '1.5rem',
  height: '1.5rem'
};

const _isFn = fn => typeof fn === "function";

const BrowserCaption = ({
  style,
  caption,
  children,
  onMore,
  onClose
}) => {
  const _isMore = _isFn(onMore)
  , _style = _isMore
     ? {...S_ROOT, ...style}
     : {...S_ROOT, ...S_PL_10, ...style};
  return (
    <div className={CL_GAP} style={_style}>
      {
         _isMore && <SvgMore
            style={S_BT_MORE}
            svgStyle={S_SVG_MORE}
            onClick={onMore}
         />
       }
      <span
         className={CL_SELECT_NONE}
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
}

export default BrowserCaption
