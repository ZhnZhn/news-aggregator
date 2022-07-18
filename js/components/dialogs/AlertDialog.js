"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S_DIALOG = {
  position: 'static',
  width: 350,
  height: 220,
  margin: '70px auto 0px'
},
    S_MSG = {
  color: 'black',
  width: '100%',
  padding: '8px 12px',
  fontWeight: 'bold',
  lineHeight: 1.4,
  whiteSpace: 'pre-line',
  wordBreak: 'break-word'
};

var _toMsg = function _toMsg(data) {
  if (data instanceof TypeError) {
    return data.message;
  }

  var _ref = data || {},
      status = _ref.status,
      url = _ref.url,
      msg = _ref.msg;

  return status ? url + "\ncode:" + status + "\nNetwork exception" : msg || 'Exception Message';
};

var AlertDialog = (0, _memoIsShow["default"])(function (_ref2) {
  var isShow = _ref2.isShow,
      data = _ref2.data,
      onClose = _ref2.onClose;

  var TS = (0, _useTheme["default"])(_Dialog["default"]),
      _msg = _toMsg(data);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    isShow: isShow,
    isClosePrimary: true,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S_DIALOG),
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "Exception",
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: S_MSG,
      children: _msg
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

var _default = AlertDialog;
exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map