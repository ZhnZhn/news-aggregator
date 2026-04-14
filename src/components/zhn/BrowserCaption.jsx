import { isFn } from '../uiApi';

import { CL_SELECT_NONE } from '../crStyle';

import SvgMore from './SvgMore';
import SvgX from './SvgX';

const CL_BROWSER_CAPTION = "br-caption gap-right"
, CL_BT_SVG_CLOSE = "bt-svg-x bt-svg-close"
, CL_BT_SVG_MENU = "bt-svg-more bt-svg-menu bt-hf"
, S_CAPTION = {
  fontSize: '1.125rem',
  fontWeight: 'bold'
};

const BrowserCaption = (props) => (
  <div
     className={CL_BROWSER_CAPTION}
     style={props.style}
  >
    {
       isFn(props.onMore) && <SvgMore
          className={CL_BT_SVG_MENU}
          ariaLabelToken={props.ariaLabelToken}
          onClick={props.onMore}
       />
    }
    <span
       className={CL_SELECT_NONE}
       style={S_CAPTION}
    >
       {props.caption}
    </span>
    {props.children}
    <SvgX
      className={CL_BT_SVG_CLOSE}
      onClick={props.onClose}
    />
  </div>
);

export default BrowserCaption
