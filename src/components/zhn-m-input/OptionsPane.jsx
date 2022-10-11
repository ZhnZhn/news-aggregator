import {
  useRef,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

import useTheme from '../hooks/useTheme';
import styleConfig from '../dialogs/Dialog.Style';

import ShowHide from '../zhn-atoms/ShowHide';
import ItemStack from '../zhn-atoms/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';

const CL_WITH_SCROLL = "with-scroll"
, S_PANE = {
  position: 'absolute',
  top: 12,
  zIndex: 20,
  width: '100%',
  maxHeight: 300,
  overflowY: 'auto',
  padding: '12px 0',
  backgroundColor: 'rgb(77, 77, 77)',
  borderRadius: 2,
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
}
, S_ITEM = { color: '#80c040' };

const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

const _preventStopEvent = evt => {
  evt.preventDefault()
  evt.stopPropagation()
};

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    ref.current = _elItem
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _crItem = (
  item,
  index, {
  refItem,
  currentItem,
  clItem,
  onSelect
}) => {
  const {
    value,
    caption
  } = item
  , _style = value === currentItem.value
       ? S_ITEM
       : void 0
  , _hKeyDown = evt => {
    if (evt.key === 'Enter') {
      onSelect(item, evt)
    }
  };
  return (
    <div
      key={value}
      role="option"
      ref={_style ? refItem : void 0}
      aria-selected={_style ? 'true' : void 0}
      tabIndex={_style ? "0" : "-1"}
      style={_style}
      className={clItem}
      onClick={evt => onSelect(item, evt)}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
};

const OptionsPane = ({
  isShow,
  options,
  item,
  clItem,
  onSelect,
  onClose
}) => {
  const _refItem = useRef(null)
  , _refFocus = useRef(null)
  , TS = useTheme(styleConfig)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback((evt) => {
    if (evt.key === 'ArrowDown') {
      _preventStopEvent(evt)
      _focusNextItem(_refFocus)
    } else if (evt.key === 'ArrowUp') {
      _preventStopEvent(evt)
      _focusPrevItem(_refFocus)
    } else if (evt.key === 'Escape') {
      _preventStopEvent(evt)
      onClose()
    }
  }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(()=>{
    if (isShow) {
      const _elItem = getRefValue(_refItem);
      if (_elItem) {
        _elItem.focus()
        _refFocus.current = _elItem
      }
    }
  }, [isShow])
return (
  <ModalPane
     isShow={isShow}
     onClose={onClose}
  >
     <ShowHide
        isShow={isShow}
        isScrollable={true}
        className={CL_WITH_SCROLL}
        style={{...S_PANE, ...TS.SELECT.MODAL_PANE}}
     >
       <div
         role="presentation"
         onKeyDown={_hKeyDown}
       >
         <ItemStack
           items={options}
           crItem={_crItem}
           refItem={_refItem}
           currentItem={item}
           clItem={clItem}
           onSelect={onSelect}
         />
      </div>
    </ShowHide>
  </ModalPane>
 );
};

export default OptionsPane
