"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useFocus = require("../hooks/useFocus");
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _MenuTitle = _interopRequireDefault(require("./MenuTitle"));
var _MenuItemList = _interopRequireDefault(require("./MenuItemList"));
var _jsxRuntime = require("preact/jsx-runtime");
const DF_ITEMS = [];
const MenuPage = _ref => {
  let {
    isVisible,
    items = DF_ITEMS,
    style,
    title,
    titleCl,
    itemCl,
    pageNumber,
    onClose,
    children,
    onNextPage,
    onPrevPage
  } = _ref;
  const [_refFirstItem, _refLastItem, _getRefItem] = (0, _useFocus.useItemsFocusTrap)(items, isVisible, !title);
  return (0, _jsxRuntime.jsx)("div", {
    "aria-hidden": isVisible ? void 0 : "true",
    style: style,
    children: (0, _jsxRuntime.jsxs)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: [(0, _jsxRuntime.jsx)(_MenuTitle.default, {
        refEl: _refFirstItem,
        titleCl: titleCl,
        title: title,
        onClick: onPrevPage
      }), (0, _jsxRuntime.jsx)(_MenuItemList.default, {
        getRefItem: _getRefItem,
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
  isVisible: PropTypes.bool,
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
var _default = exports.default = MenuPage;
//# sourceMappingURL=MenuPage.js.map