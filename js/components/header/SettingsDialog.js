"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _memoIsShow = _interopRequireDefault(require("../hoc/memoIsShow"));

var _ThemeContext = _interopRequireDefault(require("../hooks/ThemeContext"));

var _Dialog = _interopRequireDefault(require("../dialogs/Dialog.Style"));

var _ComponentActions = require("../../flux/actions/ComponentActions");

var _Comp = _interopRequireDefault(require("../Comp"));

var _CardApiKeys = _interopRequireDefault(require("./CardApiKeys"));

var _CardUiTheme = _interopRequireDefault(require("./CardUiTheme"));

var _jsxRuntime = require("preact/jsx-runtime");

//import PropTypes from 'prop-types'
var _assign = Object.assign,
    S_MODAL = {
  position: 'static',
  width: 340,
  height: 460,
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
  height: 370,
  overflowY: 'auto'
},
    S_CARD_BUTTONS = {
  display: 'flex',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  margin: '10px 10px 10px 0'
},
    S_SELECT_WIDTH = {
  width: 300
},
    S_INPUT_WIDTH = {
  width: 315,
  marginLeft: 8
};
var SettingsDialog = (0, _memoIsShow["default"])(function (_ref) {
  var isShow = _ref.isShow,
      data = _ref.data,
      onClose = _ref.onClose;

  var theme = (0, _uiApi.useContext)(_ThemeContext["default"]),
      _selectTheme = (0, _uiApi.useCallback)(function (item) {
    var _ref2 = item || {},
        value = _ref2.value;

    if (value && theme.getThemeName() !== value) {
      theme.setThemeName(value);

      _ComponentActions.ComponentActions.changeTheme(value);
    }
  }, [theme]),
      TS = theme.createStyle(_Dialog["default"]),
      _TS = JSON.parse(JSON.stringify(TS));

  _assign(_TS.SELECT.ROOT, S_SELECT_WIDTH);

  return (0, _jsxRuntime.jsx)(_Comp["default"].ModalDialog, {
    style: (0, _extends2["default"])({}, S_MODAL, TS.R_DIALOG),
    divBtStyle: S_DIV_BT,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "User Settings",
    isShow: isShow,
    onClose: onClose,
    children: (0, _jsxRuntime.jsxs)(_Comp["default"].TabPane, {
      width: "100%",
      tabsStyle: S_TABS,
      isShow: isShow,
      children: [(0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
        title: "API Keys",
        children: (0, _jsxRuntime.jsx)(_CardApiKeys["default"], {
          style: S_CARD_ROOT,
          fieldStyle: (0, _extends2["default"])({}, TS.INPUT_ROOT, S_INPUT_WIDTH),
          buttonsStyle: S_CARD_BUTTONS,
          TS: TS,
          data: data
        })
      }), (0, _jsxRuntime.jsx)(_Comp["default"].Tab, {
        title: "UI Theme",
        children: (0, _jsxRuntime.jsx)(_CardUiTheme["default"], {
          style: S_CARD_ROOT,
          buttonsStyle: S_CARD_BUTTONS,
          TS: _TS,
          onSetTheme: _selectTheme,
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