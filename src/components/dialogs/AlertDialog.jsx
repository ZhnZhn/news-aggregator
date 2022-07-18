//import PropTypes from 'prop-types'
import memoIsShow from '../hoc/memoIsShow';
import useTheme from '../hooks/useTheme';
import styleConfig from './Dialog.Style';

import ModalDialog from '../zhn-moleculs/ModalDialog';

const S_DIALOG = {
  position: 'static',
  width: 350,
  height: 220,
  margin: '70px auto 0px'
}
, S_MSG = {
  color: 'black',
  width: '100%',
  padding: '8px 12px',
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line',
  wordBreak: 'break-word'
};

const _toMsg = (
  data
) => {
  if (data instanceof TypeError){
    return data.message;
  }
  const {
    status,
    url,
    msg
  } = data || {};
  return status
    ? `${url}\ncode:${status}\nNetwork exception`
    : msg || 'Exception Message';
};

const AlertDialog = memoIsShow(({
  isShow,
  data,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _msg  = _toMsg(data);

  return (
    <ModalDialog
       isShow={isShow}
       isClosePrimary={true}
       style={{...TS.R_DIALOG, ...S_DIALOG}}
       captionStyle={TS.BROWSER_CAPTION}
       buttonStyle={TS.BT}
       caption="Exception"
       onClose={onClose}
    >
      <p style={S_MSG}>
         {_msg}
      </p>
    </ModalDialog>
  );
});

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
