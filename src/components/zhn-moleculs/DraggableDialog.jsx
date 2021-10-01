import { forwardRef, useRef, useCallback, useEffect, useImperativeHandle } from 'react';
//import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption';
import RaisedButton from '../zhn-bt/RaisedButton';

import Interact from '../../utils/Interact';

const CL_DIALOG = 'dialog';
const CL_DIALOG_OPEN = 'dialog show-popup';

const S = {
  DIV: {
    position: 'absolute',
    top: 30,
    left: 50,
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CHL_DIV: {
    cursor: 'default'
  },
  BTS: {
     marginTop: 16,
     marginBottom: 10,
     marginRight: 4,
     float: 'right',
     cursor: 'default'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

const _isFn = fn => typeof fn === 'function';

const DialogButtons = ({
  TS,
  buttons,
  onShow,
  onClose
}) => (
  <div style={S.BTS}>
    {buttons}
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
  rootStyle,
  browserCaptionStyle,
  styleButton,
  caption,
  commandButtons,
  children,
  onKeyDown,
  onShowChart,
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

  const _styleShow = isShow ? S.BLOCK : S.NONE
  , _classShow = isShow ? CL_DIALOG_OPEN : CL_DIALOG;

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
         ref={_refDiv}
         role="dialog"
         className={_classShow}
         style={{
           ...S.DIV,
           ...rootStyle,
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
         style={browserCaptionStyle}
         caption={caption}
         onClose={onClose}
      />
      <div style={S.CHL_DIV}>
         {children}
      </div>
      <DialogButtons
        TS={styleButton}
        buttons={commandButtons}
        onShow={onShowChart}
        onClose={_hClose}
      />
    </div>
  );
});

/*
DraggableDialog.propTypes = {
  isShow: PropTypes.bool,
  rootStyle: PropTypes.object,
  browserCaptionStyle: PropTypes.object,
  styleButton: PropTypes.object,
  caption: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  commandButtons: PropTypes.arrayOf(PropTypes.element),
  onKeyDown: PropTypes.func,
  onShowChart: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default DraggableDialog
