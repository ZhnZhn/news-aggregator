"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _memoFn = require("../hoc/memoFn");
var _Dialog = require("./Dialog.Style");
var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));
var _crStyle = require("../crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const S_DIALOG = {
    position: 'static',
    width: 350,
    height: 240,
    margin: '70px auto 0px'
  },
  S_MSG = {
    ..._crStyle.S_COLOR_BLACK,
    width: '100%',
    padding: '8px 12px',
    fontWeight: 'bold',
    lineHeight: 1.4,
    whiteSpace: 'pre-line',
    wordBreak: 'break-word'
  };
const DF_ERR_MESSAGE = 'Exception Message';
const _toMsg = data => {
  if (data instanceof TypeError) {
    return data.message;
  }
  if (!(0, _isTypeFn.isObj)(data)) {
    return DF_ERR_MESSAGE;
  }
  const {
    status,
    url,
    msg
  } = data;
  return status ? `${url}\ncode:${status}\nNetwork exception` : msg || DF_ERR_MESSAGE;
};
const AlertDialog = (0, _memoFn.memoIsShow)(props => (0, _jsxRuntime.jsx)(_ModalDialog.default, {
  isShow: props.isShow,
  isClosePrimary: true,
  style: S_DIALOG,
  captionStyle: _Dialog.S_BROWSER_CAPTION,
  caption: "Exception",
  onClose: props.onClose,
  children: (0, _jsxRuntime.jsx)("p", {
    style: S_MSG,
    children: _toMsg(props.data)
  })
}));

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
var _default = exports.default = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map