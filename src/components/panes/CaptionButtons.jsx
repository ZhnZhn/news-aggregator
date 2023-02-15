import {
  useState
} from '../uiApi';

import useMqlOnChange from '../hooks/useMqlOnChange';

import InlineFlexStart from '../zhn-atoms/InlineFlexStart';
import CircleButton from '../zhn-bt/CircleButton';
import SvgHrzResize from '../zhn-resize/SvgHrzResize';

import {
  DP_BT_REMOVE_ITEMS
} from '../DP';
import {
  RESIZE_INIT_WIDTH,
  RESIZE_MIN_WIDTH,
  RESIZE_MAX_WIDTH
} from './ResizeWidth';
import {
  HK_REMOVE_ITEMS
} from './hotKeys';

const S_BT_REMOVE = {
  position: 'relative',
  margin: '0 3px 0 12px'
  //top: -1
}
, S_SVG_RESIZE = {
  position: 'relative'
  //top: -3
};

//is width >= 450px
const MEDIA_QUERY = '(min-width: 450px)'
, _crMatchMedia = (mediaQuery) => window.matchMedia
    ? window.matchMedia(mediaQuery)
    : void 0
, MQL = _crMatchMedia(MEDIA_QUERY)
, _crInitialState = () => {
  const _mql = _crMatchMedia(MEDIA_QUERY);
  return _mql && _mql.matches;
};

const CaptionButtons = ({
  onRemoveItems,
  refRootDiv
}) => {
  const [
    is,
    setIs
  ] = useState(_crInitialState);

  useMqlOnChange(MQL, evt => { setIs(evt.matches) })

  return is
    ? (<InlineFlexStart>
        <CircleButton
          ariaLabel="Remove Items [r]"
          dataPos={DP_BT_REMOVE_ITEMS}
          caption={HK_REMOVE_ITEMS}
          style={S_BT_REMOVE}
          onClick={onRemoveItems}
        />
        <SvgHrzResize
           elementRef={refRootDiv}
           style={S_SVG_RESIZE}
           initWidth={RESIZE_INIT_WIDTH}
           minWidth={RESIZE_MIN_WIDTH}
           maxWidth={RESIZE_MAX_WIDTH}
        />
      </InlineFlexStart>)
    : null;
}

export default CaptionButtons
