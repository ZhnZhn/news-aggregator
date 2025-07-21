//import PropTypes from 'prop-types'
import {
  useRef,
  useMemo,
  useEffect,
  useImperativeHandle,
  isFn,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';

import {
  HAS_WIDE_SCREEN
} from '../has';

import {
  CL_DIALOG,
  crShowHide,
  crPopupMenuCn
} from '../crStyle';

import {
  S_BT_RAISED
} from '../dialogs/Dialog.Style';

import useToggle from '../hooks/useToggle';
import useXYMovable from '../hooks/useXYMovable';
import useRefHotKey from '../hotkeys/useRefHotKey';

import ModalToggle from './ModalToggle';
import BrowserCaption from '../zhn/BrowserCaption';
import RaisedButton from '../zhn-bt/RaisedButton';

const CL_MODAL_TOGGLE = crPopupMenuCn("select-none")

, POSITION_LEFT = HAS_WIDE_SCREEN ? 50 : 15
, S_DIV = {  
  top: 30,
  left: POSITION_LEFT,
  zIndex: 10
}
, S_BTS = {
   textAlign: 'right',
   margin: '16px 4px 10px 0'
}
, HK_LOAD = 'L'
, HK_SHOW = 'H'
, HK_CLOSE = 'C';

const DialogButtons = ({
  onLoad,
  onShow,
  onClose
}) => (
  <div style={S_BTS}>
    {isFn(onLoad) &&
      <RaisedButton
         isPrimary={true}
         style={S_BT_RAISED}
         caption="Load"
         hotKey={HK_LOAD}
         onClick={onLoad}
      />
    }
    {isFn(onShow) &&
      <RaisedButton
         style={S_BT_RAISED}
         caption="Show"
         hotKey={HK_SHOW}
         onClick={onShow}
      />
    }
    <RaisedButton
       style={S_BT_RAISED}
       caption="Close"
       hotKey={HK_CLOSE}
       onClick={onClose}
    />
  </div>
);

const DraggableDialog = ({
  refEl,
  isShow,
  style,
  captionStyle,
  caption,
  menuToggle,
  toggleItem,
  children,
  onKeyDown,
  onLoad,
  onShow,
  onClose
}) => {
  const _refDialog = useRef(null)
  , _refPrevFocused = useRef(null)
  , _refIsShow = useRef(isShow)
  , [
    isMore,
    toggleIsMore
  ] = useToggle(false)
  /*eslint-disable react-hooks/exhaustive-deps */
  , [
    focusDialogEl,
    focusPrevEl,
    _hKeyDown,
    _hClose
  ] = useMemo(() => [
    () => focusRefElement(_refDialog),
    () => focusRefElement(_refPrevFocused),
    (evt) => {
      if (document.activeElement == getRefValue(_refDialog)) {
        onKeyDown(evt)
      }
    },
    (evt) => {
      focusPrevEl()
      onClose()
    }
  ], [])
  // onKeyDown
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setRefValue(_refPrevFocused, document.activeElement)
    focusDialogEl()
  }, [])
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  useXYMovable(_refDialog)

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShow && !getRefValue(_refIsShow)) {
      focusDialogEl()
    }
    setRefValue(_refIsShow, isShow)
  }, [isShow])
  // focusDialogEl
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(refEl, () => ({ focusPrevEl }))

  useRefHotKey(_refDialog, HK_LOAD, onLoad)
  useRefHotKey(_refDialog, HK_SHOW, onShow)
  useRefHotKey(_refDialog, HK_CLOSE, _hClose)


  const [
    _className,
    _showHideStyle
  ] = crShowHide(
    isShow,
    CL_DIALOG
  )
  , _onMore = menuToggle
      ? toggleIsMore
      : void 0;

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
       ref={_refDialog}
       role="dialog"
       className={_className}
       style={{
        ...S_DIV,
        ...style,
        ..._showHideStyle
       }}
       tabIndex="0"
       onKeyDown={_hKeyDown}
    >
    {
      /*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/
      /*eslint-enable jsx-a11y/no-noninteractive-tabindex*/
    }
      <BrowserCaption
         style={captionStyle}
         caption={caption}
         onMore={_onMore}
         onClose={onClose}
      />
      {menuToggle && <ModalToggle
         isShow={isMore}
         className={CL_MODAL_TOGGLE}
         configs={menuToggle}
         onToggle={toggleItem}
         onClose={toggleIsMore}
      />}
      <div>
         {children}
      </div>
      <DialogButtons
        onLoad={onLoad}
        onShow={onShow}
        onClose={_hClose}
      />
    </div>
  );
};

/*
DraggableDialog.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object,
  captionStyle: PropTypes.object,
  styleButton: PropTypes.object,
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  onKeyDown: PropTypes.func,
  onLoad: PropTypes.func,
  onShow: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default DraggableDialog
