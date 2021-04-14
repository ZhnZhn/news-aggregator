"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _ContainerStyle = _interopRequireDefault(require("../styles/ContainerStyle"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var CL_SHOW = 'show-popup';
var S = {
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  }
};

var Browser = function Browser(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children;

  var _styleOpen = isShow ? S.BLOCK : S.NONE,
      _classOpen = isShow ? CL_SHOW : null;

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: _classOpen,
    style: (0, _extends2["default"])({}, _ContainerStyle["default"].browserRootDiv, style, _styleOpen),
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