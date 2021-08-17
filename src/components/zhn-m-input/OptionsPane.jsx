import { useRef, useMemo, useCallback, useEffect } from 'react';

import useTheme from '../hooks/useTheme';
import styleConfig  from '../styles/ScrollStyle';
import styleConfigD from '../dialogs/Dialog.Style';

import ShowHide from '../zhn-atoms/ShowHide';
import ItemStack from '../zhn-atoms/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';

const CL = "with-scroll";

const S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: '#80c040'
  }
};

const SCROLL_OPTIONS = {
  block: 'center',
  behaviour: 'smooth'
};

const _preventStopEvent = evt => {
  evt.preventDefault()
  evt.stopPropagation()
};

const _fFocusItem = propName => ref => {
  const _elItem = (ref.current || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    ref.current = _elItem
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _fCrItem = (ref, currentItem, clItem, onSelect) => item => {
  const { value, caption } = item
  , _style = value === currentItem.value
       ? S.ITEM
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
      ref={_style ? ref : void 0}
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
  , TS_D = useTheme(styleConfigD)
  , _crItem = useMemo(() => _fCrItem(_refItem, item, TS_D.SELECT.CL_ITEM, onSelect)
     , [item, TS_D.SELECT.CL_ITEM, onSelect]
  )
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
    if (isShow && _refItem.current) {
      _refItem.current.focus()
      _refFocus.current = _refItem.current
    }
  }, [isShow])
return (
  <ModalPane
     isShow={isShow}
     style={TS_D.SELECT.MODAL_PANE}
     onClose={onClose}
  >
     <ShowHide
        isShow={isShow}
        className={`${CL} ${TS.CL_SCROLL}`}
        style={{...S.PANE, ...TS_D.SELECT.MODAL_PANE}}
     >
       <div
         role="presentation"
         onKeyDown={_hKeyDown}
       >
         <ItemStack items={options} crItem={_crItem} />
      </div>
    </ShowHide>
  </ModalPane>
 );
};

export default OptionsPane
