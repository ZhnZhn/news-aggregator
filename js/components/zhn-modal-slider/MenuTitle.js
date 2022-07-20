"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));

var _jsxRuntime = require("react/jsx-runtime");

var S_ITEM = {
  position: 'relative'
},
    S_PREV_PAGE = {
  position: 'absolute',
  top: 0,
  left: 16
},
    S_TITLE = {
  paddingLeft: 16
};
var MenuTitle = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var titleCl = _ref.titleCl,
      title = _ref.title,
      onClick = _ref.onClick;

  if (!title) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem["default"], {
    ref: ref,
    className: titleCl,
    style: S_ITEM,
    onClick: onClick,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_PREV_PAGE,
      children: "<"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S_TITLE,
      children: title
    })]
  });
});
/*
MenuTitle.propTypes = {
  titleCl: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/

var _default = MenuTitle;
exports["default"] = _default;
//# sourceMappingURL=MenuTitle.js.map