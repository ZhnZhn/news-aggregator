import crCn from '../zhn-utils/crCn';
import useModalFocus from '../hooks/useModalFocus';
import useKeyEscape from '../hooks/useKeyEscape';

import FocusTrap from './FocusTrap';
import BrowserCaption from '../zhn-atoms/BrowserCaption';
import RaisedButton from '../zhn-bt/RaisedButton';

const CL_SHOWING = 'dialog show-popup'
, S_ROOT_DIV = {
  position: 'absolute',
  top: '20%',
  backgroundColor: '#4d4d4d',
  border: 'solid 2px #3f5178',
  borderRadius: 5,
  boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
  zIndex: 10
}
, S_COMMAND_DIV = {
   float: 'right',
   margin: '16px 4px 10px 0',
}
, S_BLOCK = { display: 'block'}
, S_NONE = { display: 'none' };

const _hClickDialog = (evt) => {
  evt.stopPropagation()
};

const ModalDialog = ({
  isShow,
  isWithButton,
  style,
  caption,
  captionStyle,
  children,
  onKeyDown,
  onClose,
  divBtStyle,
  commandButtons,
  buttonStyle:TS,
  withoutClose,
  isClosePrimary=false
}) => {
  const _refRootDiv = useModalFocus(isShow)
  , _hKeyDown = useKeyEscape(onClose)
  , _className = crCn([isShow, CL_SHOWING])
  , _style = isShow ? S_BLOCK : S_NONE;

  return (
    <FocusTrap refEl={_refRootDiv} isShow={isShow}>
    {
      /*eslint-disable jsx-a11y/no-noninteractive-element-interactions*/
      /*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
    }
    <div
        ref={_refRootDiv}
        tabIndex="0"
        role="dialog"
        aria-label={caption}
        aria-hidden={!isShow}
        className={_className}
        style={{
          ...S_ROOT_DIV,
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
          style={captionStyle}
          caption={caption}
          onClose={onClose}
        />
        <div>
          {children}
        </div>
       {isWithButton && <div style={{...S_COMMAND_DIV, ...divBtStyle}}>
         {commandButtons}
         {!withoutClose &&
             <RaisedButton
                key="_close"
                style={TS.RAISED}
                clDiv={TS.CL_RAISED_DIV}
                caption="Close"
                isPrimary={isClosePrimary}
                onClick={onClose}
             />
         }
         </div>
       }
     </div>
     </FocusTrap>
  );
};

export default ModalDialog
