//import PropTypes from 'prop-types'
import {
  forwardRef,
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle
} from '../uiApi';

import BrowserCaption from '../zhn-atoms/BrowserCaption';
import RaisedButton from '../zhn-bt/RaisedButton';

import Interact from '../../utils/Interact';

const CL_DIALOG = 'dialog'
, CL_DIALOG_OPEN = `${CL_DIALOG} show-popup`

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
, S_CHL_DIV = {
  cursor: 'default'
}
, S_BTS = {
   marginTop: 16,
   marginBottom: 10,
   marginRight: 4,
   float: 'right',
   cursor: 'default'
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

const _getRefValue = ref => ref.current
const _setRefValue = (ref, value) => ref.current = value

/*eslint-disable react-hooks/exhaustive-deps */
const useFocusByRef = ref => useCallback(() => {
  const _node = _getRefValue(ref);
  if (_node) {
    _node.focus()
  }
}, [])
//ref
/*eslint-enable react-hooks/exhaustive-deps */

const DraggableDialog = forwardRef(({
  isShow,
  style,
  captionStyle,
  buttonStyle,
  caption,
  children,
  onKeyDown,
  onLoad,
  onShow,
  onClose
}, ref) => {
  const _refDiv = useRef(null)
  , _refIsShow = useRef(isShow)
  , _refPrevFocused = useRef(null)
  , focusPrevEl = useFocusByRef(_refPrevFocused)
  , focus = useFocusByRef(_refDiv)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    if (document.activeElement == _getRefValue(_refDiv)) {
      onKeyDown(evt)
    }
  }, [])
  //onKeyDown
  , _hClose = useCallback(evt => {
    focusPrevEl()
    onClose()
  }, [])
  //_focusPrevEl, onClose
  /*eslint-enable react-hooks/exhaustive-deps */


  useEffect(() => {
    const _divNode = _getRefValue(_refDiv);
    Interact.makeDragable(_divNode)
    _setRefValue(_refPrevFocused, document.activeElement)
    _divNode.focus()
  }, [])

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isShow && !_getRefValue(_refIsShow)) {
      focus()
    }
    _setRefValue(_refIsShow, isShow)
  }, [isShow])
  // focus
  /*eslint-enable react-hooks/exhaustive-deps */

  useImperativeHandle(ref, () => ({ focusPrevEl }))

  const [
    _styleShow,
    _classShow
  ] = isShow
    ? [S_BLOCK, CL_DIALOG_OPEN]
    : [S_NONE, CL_DIALOG]


  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
         ref={_refDiv}
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
         onClose={onClose}
      />
      <div style={S_CHL_DIV}>
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
