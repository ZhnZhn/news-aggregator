"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _ThemeContext = _interopRequireDefault(require("../hooks/ThemeContext"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ComponentActions = _interopRequireDefault(require("../../flux/actions/ComponentActions"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));

var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var _assign = Object.assign,
    S_MODAL = {
  position: 'static',
  width: 340,
  height: 410,
  margin: '70px auto 0px'
},
    S_DIV_BT = {
  margin: '26px 0 4px 0'
},
    S_TABS = {
  marginLeft: 24,
  textAlign: 'left'
},
    S_CARD_ROOT = {
  position: 'relative',
  height: 315
},
    S_CARD_BUTTONS = {
  position: 'absolute',
  right: 10,
  bottom: 4,
  cursor: 'default'
},
    S_SELECT_WIDTH = {
  width: 300
},
    S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
},
    MIN_FS = 15,
    MAX_FS = 19;

var _isNumber = function _isNumber(n) {
  return typeof n === 'number' && n - n === 0;
};

var _inRange = function _inRange(min, max, v) {
  return _isNumber(v) && v >= min && v <= max;
};

var _selectFontSize = function _selectFontSize(item) {
  var _ref = item || {},
      value = _ref.value;

  if (_inRange(MIN_FS, MAX_FS, value)) {
    document.documentElement.style.fontSize = value + "px";
  }
};

var SettingsDialog = (0, _memoIsShow["default"])(function (_ref2) {
  var isShow = _ref2.isShow,
      data = _ref2.data,
      onClose = _ref2.onClose;

  var theme = (0, _react.useContext)(_ThemeContext["default"]),
      _selectTheme = (0, _react.useCallback)(function (item) {
    var _ref3 = item || {},
        value = _ref3.value;

    if (value && theme.getThemeName() !== value) {
      theme.setThemeName(value);

      _ComponentActions["default"].changeTheme(value);
    }
  }, [theme]),
      TS = theme.createStyle(_Dialog["default"]),
      _TS = JSON.parse(JSON.stringify(TS));

  _assign(_TS.SELECT.ROOT, S_SELECT_WIDTH);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
    style: (0, _extends2["default"])({}, S_MODAL, TS.R_DIALOG),
    divBtStyle: S_DIV_BT,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "User Settings",
    isShow: isShow,
    onClose: onClose,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].TabPane, {
      width: "100%",
      tabsStyle: S_TABS,
      isShow: isShow,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
        title: "API Keys",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardApiKeys["default"], {
          style: S_CARD_ROOT,
          fieldStyle: (0, _extends2["default"])({}, TS.INPUT_ROOT, S_INPUT_WIDTH),
          buttonsStyle: S_CARD_BUTTONS,
          TS: TS,
          data: data,
          onClose: onClose
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
        title: "UI Theme",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardUiTheme["default"], {
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          TS: _TS,
          onSetTheme: _selectTheme,
          onSetFontSize: _selectFontSize,
          onClose: onClose
        })
      })]
    })
  });
});
/*
SettingsDialog.propTypes = {
  isShow: PropTypes.bool,
  data: PropTypes.shape({
    setNewsKey: PropTypes.func,
    setWebzKey: PropTypes.func,
  }),
  onClose: PropTypes.func
}
*/

var _default = SettingsDialog;
exports["default"] = _default;
//# sourceMappingURL=SettingsDialog.js.map