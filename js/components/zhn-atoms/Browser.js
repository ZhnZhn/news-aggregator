"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SHOW = 'show-popup',
    S_BLOCK = {
  display: 'block'
},
    S_NONE = {
  display: 'none'
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _ref2 = isShow ? [CL_SHOW, S_BLOCK] : [void 0, S_NONE],
      _cn = _ref2[0],
      _style = _ref2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: (0, _extends2["default"])({}, _ContainerStyle["default"].browserRootDiv, style, _style),
    children: children
  });
};
/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object
}
*/


var _default = Browser;
exports["default"] = _default;
//# sourceMappingURL=Browser.js.map