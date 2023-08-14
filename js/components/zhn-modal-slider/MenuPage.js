"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("preact/jsx-runtime");
const DF_ITEMS = [];
const MenuPage = _ref => {
  let {
    isShow,
    items = DF_ITEMS,
    style,
    title,
    titleCl,
    itemCl,
    pageCurrent,
    pageNumber,
    onClose,
    children,
    onNextPage,
    onPrevPage
  } = _ref;
  const _refTitle = (0, _uiApi.useRef)(),
    _refFirst = (0, _uiApi.useRef)(),
    _getRefFirst = (0, _uiApi.useCallback)(() => (0, _uiApi.getRefValue)(_refTitle) || (0, _uiApi.getRefValue)(_refFirst), []),
    _refLast = (0, _uiApi.useRef)(),
    _hClickTitle = (0, _uiApi.useCallback)(() => {
      onPrevPage(pageNumber);
    }, [onPrevPage, pageNumber]),
    _isFocus = pageCurrent === pageNumber && isShow;
  (0, _uiApi.useEffect)(() => {
    if (_isFocus) {
      (0, _uiApi.focusAsyncRefElement)(_getRefFirst);
    }
  }, [_isFocus, _getRefFirst]);
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    children: (0, _jsxRuntime.jsxs)(_FocusTrap.default, {
      refFirst: _getRefFirst,
      refLast: _refLast,
      children: [(0, _jsxRuntime.jsx)(_MenuTitle.default, {
        ref: _refTitle,
        titleCl: titleCl,
        title: title,
        onClick: _hClickTitle
      }), (0, _jsxRuntime.jsx)(_MenuItemList.default, {
        refFirst: _refFirst,
        refLast: _refLast,
        items: items,
        itemCl: itemCl || titleCl,
        pageNumber: pageNumber,
        onNextPage: onNextPage,
        onClose: onClose
      }), children]
    })
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
exports.default = _default;
//# sourceMappingURL=MenuPage.js.map