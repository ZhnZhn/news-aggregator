import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

import Interact from '../../utils/Interact'

const CL_DIALOG = 'dialog';
const CL_DIALOG_OPEN = 'dialog show-popup';

const styles = {
  rootDiv: {
    position: 'absolute',
    top: '30px',
    left: '50px',
    backgroundColor: '#4D4D4D',
    border: 'solid 2px #3f5178',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 0px 0px 6px',
    zIndex: 10
  },
  childrenDiv: {
    cursor: 'default'
  },
  commandDiv : {
     cursor: 'default',
     float: 'right',
     marginTop: '16px',
     marginBottom: '10px',
     marginRight: '4px'
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

class DraggableDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    caption: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    commandButtons: PropTypes.arrayOf(PropTypes.element),
    onShowChart: PropTypes.func,
    onClose: PropTypes.func
  }
  */

  componentDidMount(){
     Interact.makeDragable(this.rootDiv)
     this.prevFocusedEl = document.activeElement
     this.rootDiv.focus()
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props.isShow && !prevProps.isShow) {
      this.rootDiv.focus()
    }
  }

  _handleKeyDown = (event) => {
    const focused = document.activeElement;
     if (focused == this.rootDiv){
       this.props.onKeyDown(event)
     }
  }

  _handleClose = (event) => {
    if (this.prevFocusedEl) {
      this.prevFocusedEl.focus()
    }
    this.props.onClose()
  }

  _renderCommandButton = ({
    commandButtons, styleButton:S, onShowChart, onClose
  }) => {
    return (
      <div style={styles.commandDiv}>
        {commandButtons}
        {typeof onShowChart === 'function' &&
          <RaisedButton
             rootStyle={S.RAISED_ROOT}
             clDiv={S.CL_RAISED_DIV}
             caption="Show"
             onClick={onShowChart}
          />
        }
        <RaisedButton
           rootStyle={S.RAISED_ROOT}
           clDiv={S.CL_RAISED_DIV}
           caption="Close"
           onClick={this._handleClose}
        />
      </div>
    );
  }

  render(){
    const {
           isShow, rootStyle,
           caption, browserCaptionStyle,
           commandButtons, styleButton,
           children,
           onShowChart, onClose
         } = this.props
        , _styleShow = isShow ? styles.BLOCK : styles.NONE
        , _classShow = isShow ? CL_DIALOG_OPEN : CL_DIALOG;
    return (
      <div
           ref={c => this.rootDiv = c}
           className={_classShow}
           style={Object.assign({}, styles.rootDiv, rootStyle, _styleShow)}
           tabIndex="0"
           onKeyDown={this._handleKeyDown}
      >
        <BrowserCaption
           rootStyle={browserCaptionStyle}
           caption={caption}
           onClose={onClose}
        />
        <div style={styles.childrenDiv}>
           {children}
        </div>
        {this._renderCommandButton({ commandButtons, styleButton, onShowChart, onClose })}
      </div>
    );
  }

  focusPrevEl(){
    if (this.prevFocusedEl){
      this.prevFocusedEl.focus()
    }
  }

}

export default DraggableDialog
