"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));

var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));

var _jsxRuntime = require("preact/jsx-runtime");

var _focusAsyncRefElement = function _focusAsyncRefElement(ref) {
  setTimeout(function () {
    return (0, _uiApi.focusRefElement)(ref);
  }, 1000);
};

var DF_ITEMS = [];

var MenuPage = function MenuPage(_ref) {
  var isShow = _ref.isShow,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? DF_ITEMS : _ref$items,
      style = _ref.style,
      title = _ref.title,
      titleCl = _ref.titleCl,
      itemCl = _ref.itemCl,
      pageCurrent = _ref.pageCurrent,
      pageNumber = _ref.pageNumber,
      onClose = _ref.onClose,
      children = _ref.children,
      onNextPage = _ref.onNextPage,
      onPrevPage = _ref.onPrevPage;

  var _refTitle = (0, _uiApi.useRef)(),
      _refFirst = (0, _uiApi.useRef)(),
      _hClickTitle = (0, _uiApi.useCallback)(function () {
    onPrevPage(pageNumber);
  }, [onPrevPage, pageNumber]),
      _isFocus = pageCurrent === pageNumber && isShow;

  (0, _uiApi.useEffect)(function () {
    if (_isFocus) {
      if (_refTitle.current) {
        _focusAsyncRefElement(_refTitle);
      } else if (_refFirst.current) {
        _focusAsyncRefElement(_refFirst);
      }
    }
  }, [_isFocus]);
  return (0, _jsxRuntime.jsxs)("div", {
    style: style,
    children: [(0, _jsxRuntime.jsx)(_MenuTitle["default"], {
      ref: _refTitle,
      titleCl: titleCl,
      title: title,
      onClick: _hClickTitle
    }), (0, _jsxRuntime.jsx)(_MenuItemList["default"], {
      ref: _refFirst,
      items: items,
      itemCl: itemCl || titleCl,
      pageNumber: pageNumber,
      onNextPage: onNextPage,
      onClose: onClose
    }), children]
  });
};
/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.string,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/


var _default = MenuPage;
exports["default"] = _default;
//# sourceMappingURL=MenuPage.js.map