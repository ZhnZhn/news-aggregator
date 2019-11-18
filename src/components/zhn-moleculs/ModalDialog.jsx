import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

const CL = {
  SHOWING : 'dialog show-popup',
  HIDING : 'hide-popup'
};

const STYLE = {
  SHOW : {
    display : 'block'
  },
  HIDE : {
    display : 'none'
  },
  HIDE_POPUP : {
    opacity: 0,
    transform : 'scaleY(0)'
  },
  ROOT_DIV: {
    position: 'absolute',
    top: '20%',
    left: '40%',
    display: 'block',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #3f5178',
    borderRadius: 5,
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CAPTON_DIV:{
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    padding: 5,
    textAlign: 'center',
    fontSize: '18px'
  },
  COMMAND_DIV : {
     float: 'right',
     marginTop: 16,
     marginBottom: 10,
     marginRight: 4,
     cursor: 'default'
  }
};

class ModalDialog extends Component {
  /*
   static propTypes = {
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     caption: PropTypes.string,
     style: PropTypes.object,
     onClose: PropTypes.func
   }
   */
   static defaultProps = {
     isWithButton: true,
     isNotUpdate: false,
     timeout: 450,
     styleButton: {
       RAISED_ROOT: undefined,
       CL_RAISED_DIV: undefined
     }
   }

   wasClosing = false

   componentDidMount() {
     this.prevFocusedEl = document.activeElement
     this.rootDiv.focus()
   }

   shouldComponentUpdate(nextProps, nextState) {
     if (nextProps !== this.props){
       if (nextProps.isNotUpdate){
         return false;
       }
     }
     return true;
   }

   componentDidUpdate(prevProps, prevState){
     if (this.wasClosing){
       setTimeout(
         () => { this.setState({}) },
         this.props.timeout
       )
       if ( this.prevFocusedEl) {
          this.prevFocusedEl.focus()
       }
     }
     if (this.props.isShow && !prevProps.isShow) {
       this.rootDiv.focus()
     }
   }

  _handleClickDialog(event) {
    event.stopPropagation()
   }

   _handleKeyDown = (event) => {
     const focused = document.activeElement;
      if (focused == this.rootDiv){
        this.props.onKeyDown(event)
      }
   }

  _renderCommandButton = () => {
    const { divBtStyle, commandButtons, styleButton:TS, withoutClose, isClosePrimary=false, onClose } = this.props;
    return (
      <div style={{ ...STYLE.COMMAND_DIV, ...divBtStyle }}>
        {commandButtons}
        { !withoutClose &&
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
    );
  }

  _refRootDiv = n => this.rootDiv = n

  render(){
    const {
            isShow, isWithButton,
            style,
            caption, styleCaption,
            children, onClose
          } = this.props;

    let _className, _style;

    if (this.wasClosing){
      _style = STYLE.HIDE
      this.wasClosing = false
    } else {
      _className = isShow ? CL.SHOWING : CL.HIDING
      _style = isShow ? STYLE.SHOW : STYLE.HIDE_POPUP
      if (!isShow){
        this.wasClosing = true
      }
    }

    return (
         <div
             ref={this._refRootDiv}
             tabIndex="0"
             className={_className}
             style={{ ...STYLE.ROOT_DIV, ...style, ..._style}}
             onClick={this._handleClickDialog}
             onKeyDown={this._handleKeyDown}
         >
             <BrowserCaption
               rootStyle={styleCaption}
               caption={caption}
               onClose={onClose}
             />
             <div>
               {children}
             </div>
            {isWithButton && this._renderCommandButton()}
        </div>
    );
  }
}

export default ModalDialog
