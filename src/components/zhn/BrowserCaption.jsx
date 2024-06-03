import { isFn } from '../uiApi';

import {
  COLOR_VAR_H_C,
  CL_SELECT_NONE
} from '../crStyle';

import SvgMore from './SvgMore';
import SvgX from './SvgX';

const CL_BROWSER_CAPTION = "br-caption gap-right"
, CL_BT_SVG_CLOSE = "bt-svg-x bt-svg-close"
, S_CAPTION = {
  fontSize: '1.125rem',
  fontWeight: 'bold'
}
, S_BT_MORE = {
  position: 'absolute',
  top: '0.3rem',
  left: 0
}
, S_SVG_MORE = {
  fill: COLOR_VAR_H_C,
  stroke: COLOR_VAR_H_C
};

const BrowserCaption = ({
  style,
  caption,
  children,
  onMore,
  onClose
}) => (
  <div
     className={CL_BROWSER_CAPTION}
     style={style}
  >
    {
       isFn(onMore) && <SvgMore
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
      className={CL_BT_SVG_CLOSE}
      onClick={onClose}
    />
  </div>
);


export default BrowserCaption
