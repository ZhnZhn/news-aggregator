"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var S = {
  ROOT_DIV: {
    paddingTop: 16
  }
};
var THEME_OPTIONS = [{
  caption: 'Grey',
  value: 'GREY'
}, {
  caption: 'White',
  value: 'WHITE'
}, {
  caption: 'Sand',
  value: 'SAND'
}],
    DF_THEME = THEME_OPTIONS[0];

var CardUiTheme = function CardUiTheme(_ref) {
  var style = _ref.style,
      buttonsStyle = _ref.buttonsStyle,
      TS = _ref.TS,
      onSetTheme = _ref.onSetTheme,
      onClose = _ref.onClose;
  return _react["default"].createElement("div", {
    style: (0, _extends2["default"])({}, S.ROOT_DIV, {}, style)
  }, _react["default"].createElement(_Comp["default"].InputSelect, {
    styleConfig: TS.SELECT,
    caption: "Theme (Default: Grey)",
    initItem: DF_THEME,
    options: THEME_OPTIONS,
    onSelect: onSetTheme
  }), _react["default"].createElement("div", {
    style: buttonsStyle
  }, _react["default"].createElement(_Comp["default"].RaisedButton, {
    rootStyle: TS.BT.RAISED_ROOT,
    clDiv: TS.BT.CL_RAISED_DIV,
    isPrimary: true,
    caption: "Close",
    onClick: onClose
  })));
};

var _default = CardUiTheme;
exports["default"] = _default;
//# sourceMappingURL=CardUiTheme.js.map