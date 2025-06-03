//import PropTypes from 'prop-types'
import { domSanitize } from '../../utils/domSanitize';
import { memoIsShow } from '../hoc/memoFn';
import { S_BROWSER_CAPTION } from './Dialog.Style';

import ModalDialog from '../zhn-moleculs/ModalDialog';
import { S_COLOR_BLACK } from '../crStyle';

const S_DIALOG = {
  position: 'static',
  width: 350,
  height: 240,
  margin: '70px auto 0px'
}
, S_MSG = {
  ...S_COLOR_BLACK,
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
}) => (
  <ModalDialog
     isShow={isShow}
     isClosePrimary={true}
     style={S_DIALOG}
     captionStyle={S_BROWSER_CAPTION}
     caption="Exception"
     onClose={onClose}
  >
    <p style={S_MSG}>
      {domSanitize(_toMsg(data))}
    </p>
  </ModalDialog>
));


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
