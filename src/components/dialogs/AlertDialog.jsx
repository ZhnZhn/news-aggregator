import React, { Component } from 'react'
//import PropTypes from 'prop-types'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog'

const S = {
  DIALOG: {
    position: 'static',
    width: 350,
    height: 160,
    margin: '70px auto 0px'
  },
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width: '100%',
    paddingTop: 16,
    paddingLeft: 10,
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line'
  }
};

const _toMsg = (data) => {
  if (data instanceof TypeError){
    return data.message;
  }
  const { status, url, msg } = data;
  if (status){
    return `${url}\ncode:${status}\nNetwork exception`;
  } else if (msg){
    return msg;
  }
  return 'Exception Message';
}

class AlertDialog extends Component{
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      alertCaption: PropTypes.string,
      alertItemId: PropTypes.string,
      alertDescr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  */

  static defaultProps = {
    data: {}
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _handleKeyDown = (event) => {
    if (event.keyCode === 27 || event.keyCode === 13){
      this.props.onClose()
    }
  }

  render(){
    const { isShow, data, theme, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , _msg  = _toMsg(data);
    return (
      <ModalDialog
         style={{...TS.R_DIALOG, ...S.DIALOG}}
         styleCaption={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="Exception"
         isShow={isShow}
         isClosePrimary={true}
         onKeyDown={this._handleKeyDown}
         onClose={onClose}
      >
         <div>
            <p style={S.MSG}>
              {_msg}
            </p>
         </div>
      </ModalDialog>
    );
  }
}

export default withTheme(AlertDialog)
