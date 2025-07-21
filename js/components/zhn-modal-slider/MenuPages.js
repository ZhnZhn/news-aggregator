"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuPage = _interopRequireDefault(require("./MenuPage"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuPages = _ref => {
  let {
    isShow,
    style,
    pages,
    pageCurrent,
    onNextPage,
    onPrevPage,
    onClose
  } = _ref;
  return (0, _uiApi.safeMap)(pages, (_ref2, index) => {
    let {
      key,
      ...restProps
    } = _ref2;
    return (0, _jsxRuntime.jsx)(_MenuPage.default, {
      ...restProps,
      isShow: isShow,
      pageCurrent: pageCurrent,
      style: style,
      pageNumber: index + 1,
      isVisible: isShow && pageCurrent === index + 1,
      onNextPage: index === 0 ? onNextPage : void 0,
      onPrevPage: index !== 0 ? onPrevPage : void 0,
      onClose: onClose
    }, key);
  });
};
var _default = exports.default = MenuPages;
//# sourceMappingURL=MenuPages.js.map