import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

const CL = {
  SHOWING : 'show-popup',
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
    //border: 'solid 2px #232F3B',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  CAPTON_DIV:{
    padding: '5px',
    //color: 'rgba(164, 135, 212,1)',
    color: '#9e9e9e',
    //backgroundColor: '#232F3B',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px'
  },
  COMMAND_DIV : {
     cursor: 'default',
     float: 'right',
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
};

class ModalDialog extends Component {
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
   static defaultProps = {
     isWithButton: true,
     isNotUpdate: false,
     timeout: 450,
     styleButton: {
       RAISED_ROOT: undefined,
       CL_RAISED_DIV: undefined
     }
   }

   constructor(props){
     super()
     this.wasClosing = false
   }

   shouldComponentUpdate(nextProps, nextState){
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
     }
   }

  _handleClickDialog(event) {
    event.stopPropagation()
   }

  _renderCommandButton = () => {
    const { commandButtons, styleButton:TS, withoutClose, onClose } = this.props;
    return (
      <div style={STYLE.COMMAND_DIV}>
        {commandButtons}
        { !withoutClose &&
            <RaisedButton
               rootStyle={TS.RAISED_ROOT}
               clDiv={TS.CL_RAISED_DIV}
               caption="Close"
               onClick={onClose}
            />
        }
      </div>
    );
  }

  render(){
    const {
            isShow, isWithButton, style,
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
             className={_className}
             style={{ ...STYLE.ROOT_DIV, ...style, ..._style}}
             onClick={this._handleClickDialog}
         >
             <BrowserCaption
               rootStyle={styleCaption}
               caption={caption}
               onClose={onClose}
             />
             {/*
             <div style={STYLE.CAPTON_DIV}>
                <span style={styleCaption}>{caption}</span>
                <SvgClose onClose={onClose} />
             </div>
             */}
             <div>
               {children}
             </div>
            {isWithButton && this._renderCommandButton()}
        </div>
    );
  }
}

export default ModalDialog
