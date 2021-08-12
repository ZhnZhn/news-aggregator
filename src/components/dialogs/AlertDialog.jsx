import { memo, useCallback } from 'react';
//import PropTypes from 'prop-types'

import useTheme from '../hooks/useTheme'
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
  const { status, url, msg } = data || {};
  if (status){
    return `${url}\ncode:${status}\nNetwork exception`;
  } else if (msg){
    return msg;
  }
  return 'Exception Message';
}

const _isNotShouldUpdate = (prevProp, nextProp) => prevProp.isShow === nextProp.isShow

const AlertDialog = memo(({
  isShow,
  data,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 27 || keyCode === 13){
      onClose()
    }
  }, [])
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , TS = useTheme(styleConfig)
  , _msg  = _toMsg(data);

  return (
    <ModalDialog
       isShow={isShow}
       isClosePrimary={true}
       style={{...TS.R_DIALOG, ...S.DIALOG}}
       styleCaption={TS.BROWSER_CAPTION}
       styleButton={TS.BT}
       caption="Exception"
       onKeyDown={_hKeyDown}
       onClose={onClose}
    >
      <p style={S.MSG}>
         {_msg}
      </p>
    </ModalDialog>
  );
}, _isNotShouldUpdate);

/*
AlertDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    alertCaption: PropTypes.string,
    alertItemId: PropTypes.string,
    alertDescr: PropTypes.string
  }),
  onClose: PropTypes.func
}
*/

export default AlertDialog
