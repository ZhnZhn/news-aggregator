import { useRef, useEffect } from 'react'
//import PropTypes from 'prop-types'

import useClassAnimation from '../hooks/useClassAnimation'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

const CL = {
  SHOWING : 'dialog show-popup',
  HIDING : 'hide-popup'
};

const S2 = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    opacity: 0,
    transform: 'scaleY(0)'
  }
};

const S = {
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    display: 'block',
    backgroundColor: '#4d4d4d',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  COMMAND_DIV : {
     float: 'right',
     marginTop: 16,
     marginBottom: 10,
     marginRight: 4,
     cursor: 'default'
  }
};

const _hasFocusFn = ref =>
  typeof ((ref || {}).current || {}).focus === 'function';


const _hClickDialog = (event) => {
  event.stopPropagation()
};

const ModalDialog = ({
  isShow, isWithButton,
  style,
  caption, styleCaption,
  children,
  onKeyDown, onClose,
  divBtStyle, commandButtons, styleButton:TS,
  withoutClose, isClosePrimary=false
}) => {
  const _refRootDiv = useRef()
  , _refPrevFocused = useRef()
  , {
    className:_className, style:_style
  } = useClassAnimation({
    isShow, CL, S: S2,
    initialWasClosed: false
  })
  , _hKeyDown = event => {
    const { current } = _refRootDiv;
     if (document.activeElement == current){
       onKeyDown(event)
     }
  };

  useEffect(() => {
    _refPrevFocused.current = document.activeElement
  }, [])
  useEffect(() => {
    if (isShow && _refRootDiv) {
      _refRootDiv.current.focus()
    }
  }, [isShow])
  useEffect(() => {
    if (_style === S2.HIDING && _hasFocusFn(_refPrevFocused) ) {
      _refPrevFocused.current.focus()
    }
  })

  return (
    /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
    /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    <div
        ref={_refRootDiv}
        tabIndex="0"
        role="dialog"
        aria-label={caption}
        aria-hidden={!isShow}
        className={_className}
        style={{
          ...S.ROOT_DIV,
          ...style,
          ..._style
        }}
        onClick={_hClickDialog}
        onKeyDown={_hKeyDown}
    >
    {
     /*eslint-enable jsx-a11y/no-noninteractive-element-interactions*/
     /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    }
        <BrowserCaption
          rootStyle={styleCaption}
          caption={caption}
          onClose={onClose}
        />
        <div>
          {children}
        </div>
       {isWithButton && <div style={{ ...S.COMMAND_DIV, ...divBtStyle }}>
         {commandButtons}
         {!withoutClose &&
             <RaisedButton
                key="_close"
                rootStyle={TS.RAISED_ROOT}
                clDiv={TS.CL_RAISED_DIV}
                caption="Close"
                isPrimary={isClosePrimary}
                onClick={onClose}
             />
         }
         </div>
       }
   </div>
  );
}

export default ModalDialog
