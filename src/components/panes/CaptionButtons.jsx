import { useState } from '../uiApi';
import useMqlOnChange from '../hooks/useMqlOnChange';

import { InlineFlexStart } from '../zhn/FlexToken';
import FlatButton from '../zhn-bt/FlatButton';
import SvgCloseAll from '../zhn/svg/SvgCloseAll';
import SvgHrzResize from '../zhn-resize/SvgHrzResize';

import {
  DP_BT_REMOVE_ITEMS
} from '../DP';
import {
  RESIZE_INIT_WIDTH,
  RESIZE_MIN_WIDTH,
  RESIZE_MAX_WIDTH
} from './ResizeWidth';

const S_BT_REMOVE = {
  width: 36,
  marginLeft: 10
}
, S_SVG_RESIZE = {
  position: 'relative'
};

//is width >= 450px
const MEDIA_QUERY = '(min-width: 450px)'
, _crMatchMedia = (mediaQuery) => window.matchMedia
    ? window.matchMedia(mediaQuery)
    : void 0
, MQL = _crMatchMedia(MEDIA_QUERY)
, _crInitialState = () => _crMatchMedia(MEDIA_QUERY)?.matches;

const CaptionButtons = (props) => {
  const [
    is,
    setIs
  ] = useState(_crInitialState);

  useMqlOnChange(MQL, evt => { setIs(evt.matches) })

  return is
    ? (<InlineFlexStart>
         <FlatButton
           ariaLabel="Remove items [r]"
           dataPos={DP_BT_REMOVE_ITEMS}
           className="bt-hf"
           style={S_BT_REMOVE}
           onClick={props.onRemoveItems}
         >
           <SvgCloseAll className="svg-close-all" />
         </FlatButton>
         <SvgHrzResize
            elementRef={props.refRootDiv}
            style={S_SVG_RESIZE}
            initWidth={RESIZE_INIT_WIDTH}
            minWidth={RESIZE_MIN_WIDTH}
            maxWidth={RESIZE_MAX_WIDTH}
            onPlusWidth={props.onPlusWidth}
            onMinusWidth={props.onMinusWidth}
         />
       </InlineFlexStart>)
    : null;
}

export default CaptionButtons
