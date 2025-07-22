"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _bindTo = require("../../utils/bindTo");
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
    const _pageNumber = index + 1,
      _isFirstPage = index === 0;
    return (0, _jsxRuntime.jsx)(_MenuPage.default, {
      ...restProps,
      isShow: isShow,
      pageCurrent: pageCurrent,
      style: style,
      pageNumber: _pageNumber,
      isVisible: isShow && pageCurrent === index + 1,
      onNextPage: _isFirstPage ? onNextPage : void 0,
      onPrevPage: _isFirstPage ? void 0 : (0, _bindTo.bindTo)(onPrevPage, _pageNumber),
      onClose: onClose
    }, key);
  });
};
var _default = exports.default = MenuPages;
//# sourceMappingURL=MenuPages.js.map