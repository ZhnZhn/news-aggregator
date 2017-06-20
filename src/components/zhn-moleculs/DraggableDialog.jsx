import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import RaisedButton from '../zhn-atoms/RaisedButton'

import Interact from '../../utils/Interact'

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
     marginTop: '8px',
     marginBottom: '10px',
     marginRight: '4px'
  }
};

class DraggableDialog extends Component {
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

  componentDidMount(){
     Interact.makeDragable(this.rootDivEl)
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
           onClick={onClose}
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
        , _styleShow = isShow ? {display: 'block'} : {display: 'none'}
        , _classShow = isShow ? 'show-popup' : undefined;
    return (
      <div
           ref={c => this.rootDivEl = c}
           className={_classShow}
           style={Object.assign({}, styles.rootDiv, rootStyle, _styleShow)}
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
}

export default DraggableDialog
