"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _domSanitize = require("../../utils/domSanitize");
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
const _toMsg = data => {
  if (data instanceof TypeError) {
    return data.message;
  }
  const {
    status,
    url,
    msg
  } = data || {};
  return status ? `${url}\ncode:${status}\nNetwork exception` : msg || 'Exception Message';
};
const AlertDialog = (0, _memoFn.memoIsShow)(_ref => {
  let {
    isShow,
    data,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)(_ModalDialog.default, {
    isShow: isShow,
    isClosePrimary: true,
    style: S_DIALOG,
    captionStyle: _Dialog.S_BROWSER_CAPTION,
    caption: "Exception",
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)("p", {
      style: S_MSG,
      children: (0, _domSanitize.domSanitize)(_toMsg(data))
    })
  });
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
var _default = exports.default = AlertDialog;
//# sourceMappingURL=AlertDialog.js.map