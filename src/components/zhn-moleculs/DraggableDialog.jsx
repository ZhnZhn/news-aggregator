//import PropTypes from 'prop-types'
import {
  forwardRef,
  useRef,
  useMemo,
  useEffect,
  useImperativeHandle,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useXYMovable from '../hooks/useXYMovable';

import ModalToggle from './ModalToggle';
import BrowserCaption from '../zhn-atoms/BrowserCaption';
import RaisedButton from '../zhn-bt/RaisedButton';

const CL_DIALOG = 'dialog'
, CL_DIALOG_OPEN = `${CL_DIALOG} show-popup`
, CL_MODAL_TOGGLE = 'popup-menu menu-more__item select-none'

, S_DIV = {
  position: 'absolute',
  top: 30,
  left: 50,
  backgroundColor: '#4d4d4d',
  border: 'solid 2px #3f5178',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
  zIndex: 10
}
, S_BTS = {
   textAlign: 'right',
   margin: '16px 4px 10px 0'
}
, S_BLOCK = {
  display: 'block'
}
, S_NONE = {
  display: 'none'
};

const _isFn = fn => typeof fn === 'function';

const DialogButtons = ({
  TS,
  onLoad,
  onShow,
  onClose
}) => (
  <div style={S_BTS}>
    {_isFn(onLoad) &&
      <RaisedButton
         isPrimary={true}
         style={TS.RAISED}
         clDiv={TS.CL_RAISED_DIV}
         caption="Load"
         onClick={onLoad}
      />
    }
    {_isFn(onShow) &&
      <RaisedButton
         style={TS.RAISED}
         clDiv={TS.CL_RAISED_DIV}
         caption="Show"
         onClick={onShow}
      />
    }
    <RaisedButton
       style={TS.RAISED}
       clDiv={TS.CL_RAISED_DIV}
       caption="Close"
       onClick={onClose}
    />
  </div>
);

const DraggableDialog = forwardRef(({
  isShow,
  style,
  captionStyle,
  buttonStyle,
  chbStroke,
  caption,
  menuToggle,
  toggleItem,
  children,
  onKeyDown,
  onLoad,
  onShow,
  onClose
}, ref) => {
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

  useImperativeHandle(ref, () => ({ focusPrevEl }))

  const [
    _styleShow,
    _classShow
  ] = isShow
    ? [S_BLOCK, CL_DIALOG_OPEN]
    : [S_NONE, CL_DIALOG]
  , _onMore = menuToggle
      ? toggleIsMore
      : void 0;


  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
       ref={_refDialog}
       role="dialog"
       className={_classShow}
       style={{
        ...S_DIV,
        ...style,
        ..._styleShow
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
         chbStroke={chbStroke}
         configs={menuToggle}
         onToggle={toggleItem}
         onClose={toggleIsMore}
      />}
      <div>
         {children}
      </div>
      <DialogButtons
        TS={buttonStyle}
        onLoad={onLoad}
        onShow={onShow}
        onClose={_hClose}
      />
    </div>
  );
});

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
