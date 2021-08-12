"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _ModalDialog = _interopRequireDefault(require("../zhn-moleculs/ModalDialog"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var S = {
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

var _toMsg = function _toMsg(data) {
  if (data instanceof TypeError) {
    return data.message;
  }

  var _ref = data || {},
      status = _ref.status,
      url = _ref.url,
      msg = _ref.msg;

  if (status) {
    return url + "\ncode:" + status + "\nNetwork exception";
  } else if (msg) {
    return msg;
  }

  return 'Exception Message';
};

var _isNotShouldUpdate = function _isNotShouldUpdate(prevProp, nextProp) {
  return prevProp.isShow === nextProp.isShow;
};

var AlertDialog = /*#__PURE__*/(0, _react.memo)(function (_ref2) {
  var isShow = _ref2.isShow,
      data = _ref2.data,
      onClose = _ref2.onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hKeyDown = (0, _react.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 27 || keyCode === 13) {
      onClose();
    }
  }, []) //onClose

  /*eslint-enable react-hooks/exhaustive-deps */
  ,
      TS = (0, _useTheme["default"])(_Dialog["default"]),
      _msg = _toMsg(data);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalDialog["default"], {
    isShow: isShow,
    isClosePrimary: true,
    style: (0, _extends2["default"])({}, TS.R_DIALOG, S.DIALOG),
    styleCaption: TS.BROWSER_CAPTION,
    styleButton: TS.BT,
    caption: "Exception",
    onKeyDown: _hKeyDown,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      style: S.MSG,
      children: _msg
    })
  });
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

var _default = AlertDialog;
exports["default"] = _default;
//# sourceMappingURL=AlertDialog.js.map