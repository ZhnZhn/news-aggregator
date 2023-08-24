"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useFocusAsyncRefElementIf = _interopRequireDefault(require("../hooks/useFocusAsyncRefElementIf"));
var _useItemsFocusTrap = _interopRequireDefault(require("../hooks/useItemsFocusTrap"));
var _useGetRefValue = _interopRequireDefault(require("../hooks/useGetRefValue2"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("preact/jsx-runtime");
const DF_ITEMS = [];
const MenuPage = _ref => {
  let {
    isShow,
    isVisible,
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
    [_getFocusRef, _refLastItem, _refFirstItem] = (0, _useItemsFocusTrap.default)(items),
    _getFocusFirstItem = (0, _useGetRefValue.default)(_refTitle, _refFirstItem),
    _hClickTitle = (0, _uiApi.useCallback)(() => {
      onPrevPage(pageNumber);
    }, [onPrevPage, pageNumber]);
  (0, _useFocusAsyncRefElementIf.default)(isVisible, _getFocusFirstItem);
  return (0, _jsxRuntime.jsx)("div", {
    style: style,
    children: (0, _jsxRuntime.jsxs)(_FocusTrap.default, {
      refFirst: _getFocusFirstItem,
      refLast: _refLastItem,
      children: [(0, _jsxRuntime.jsx)(_MenuTitle.default, {
        refTitle: _refTitle,
        titleCl: titleCl,
        title: title,
        onClick: _hClickTitle
      }), (0, _jsxRuntime.jsx)(_MenuItemList.default, {
        getFocusRef: _getFocusRef,
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