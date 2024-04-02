"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuItem = _interopRequireDefault(require("../zhn/MenuItem"));
var _jsxRuntime = require("preact/jsx-runtime");
const SUB_MENU = 'sub';
const S_ITEM = {
    position: 'relative'
  },
  S_NEXT_PAGE = {
    display: 'inline-block',
    position: 'absolute',
    top: 0,
    right: 4,
    color: 'inherit',
    padding: '1px 16px 1px 0px',
    fontWeight: 'bold'
  };
const _fClick = (isClose, onClick, onClose) => (0, _uiApi.isFn)(onClick) ? isClose ? () => {
  onClick();
  onClose();
} : onClick : void 0;
const MenuItemList = _ref => {
  let {
    getFocusRef,
    items,
    itemCl,
    pageNumber,
    onNextPage,
    onClose
  } = _ref;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _uiApi.safeMap)(items, (_ref2, index) => {
      let {
        cn,
        name,
        type,
        id,
        isClose,
        onClick
      } = _ref2;
      const [_onClick, _nextPageArrowEl] = type === SUB_MENU ? [(0, _uiApi.bindTo)(onNextPage, id, name, pageNumber), (0, _jsxRuntime.jsx)("span", {
        style: S_NEXT_PAGE,
        children: ">"
      })] : [_fClick(isClose, onClick, onClose), null];
      return (0, _jsxRuntime.jsxs)(_MenuItem.default, {
        ref: getFocusRef(index),
        className: cn || itemCl,
        style: S_ITEM,
        onClick: _onClick,
        children: [(0, _jsxRuntime.jsx)("span", {
          children: name
        }), _nextPageArrowEl]
      }, name);
    })
  });
};
var _default = exports.default = MenuItemList;
//# sourceMappingURL=MenuItemList.js.map