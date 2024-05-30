"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _crStyle = require("../crStyle");
var _AsyncShowComponent = _interopRequireDefault(require("../zhn-moleculs/AsyncShowComponent"));
var _SvgX = _interopRequireDefault(require("../zhn/SvgX"));
var _Input = require("./Input.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BT_CLEAR = {
  position: 'absolute',
  top: 25,
  right: 12
};
const AsyncSvgX = (0, _uiApi.memo)(_ref => {
  let {
    is,
    onClick
  } = _ref;
  return (0, _jsxRuntime.jsx)(_AsyncShowComponent.default, {
    is: is,
    mls: 700,
    children: (0, _jsxRuntime.jsx)(_SvgX.default, {
      color: _crStyle.COLOR_BLACK,
      className: _Input.CL_BT_SVG_CLEAR,
      style: S_BT_CLEAR,
      onClick: onClick
    })
  });
});
var _default = exports.default = AsyncSvgX;
//# sourceMappingURL=AsyncSvgX.js.map