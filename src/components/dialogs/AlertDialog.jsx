import React, { Component, PropTypes } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import ModalDialog from '../zhn-moleculs/ModalDialog'

const S = {
  CAPTION: {
    color: '#f44336',
    fontWeight: 'bold'
  },
  MSG: {
    color: 'black',
    width : '400px',
    paddingTop: '16px',
    paddingLeft : '10px',
    fontWeight: 'bold',
    lineHeight : 1.4,
    whiteSpace: 'pre-line'
  }
}

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

  static propTypes = {
    isShow: PropTypes.bool,
    data: PropTypes.shape({
      alertCaption: PropTypes.string,
      alertItemId: PropTypes.string,
      alertDescr: PropTypes.string
    }),
    onClose: PropTypes.func
  }
  static defaultProps = {
    data: {}
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { isShow, data, theme, onClose } = this.props
        , TS = theme.createStyle(styleConfig)
        , _msg  = _toMsg(data);
    return (
      <ModalDialog
         style={TS.R_DIALOG }
         styleCaption={TS.BROWSER_CAPTION}
         styleButton={TS.BT}
         caption="Exception"
         //styleCaption={S.CAPTION}
         isShow={isShow}
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
