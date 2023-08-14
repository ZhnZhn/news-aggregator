"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));
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
const _fClick = _ref => {
  let {
    isClose,
    onClick,
    onClose
  } = _ref;
  return typeof onClick === 'function' ? isClose ? () => {
    onClick();
    onClose();
  } : onClick : void 0;
};
const NextPageArrow = _ref2 => {
  let {
    type
  } = _ref2;
  return type === SUB_MENU ? (0, _jsxRuntime.jsx)("span", {
    style: S_NEXT_PAGE,
    children: ">"
  }) : null;
};
const MenuItemList = _ref3 => {
  let {
    refFirst,
    refLast,
    items,
    itemCl,
    pageNumber,
    onNextPage,
    onClose
  } = _ref3;
  const _lastItemIndex = items.length - 1;
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: items.map((item, index) => {
      const {
          cn,
          name,
          type,
          id,
          isClose,
          onClick
        } = item,
        _onClick = type === SUB_MENU ? onNextPage.bind(null, id, name, pageNumber) : _fClick({
          isClose,
          onClick,
          onClose
        });
      return (0, _jsxRuntime.jsxs)(_MenuAriaItem.default, {
        ref: (0, _uiApi.getFocusRef)(refFirst, refLast, _lastItemIndex, index),
        className: cn || itemCl,
        style: S_ITEM,
        onClick: _onClick,
        children: [(0, _jsxRuntime.jsx)("span", {
          children: name
        }), (0, _jsxRuntime.jsx)(NextPageArrow, {
          type: type
        })]
      }, name);
    })
  });
};

/*
MenuItemList.propTypes = {
  items: PropTypes.array,
  itemCl: PropTypes.string,
  pageNumber: PropTypes.number,
  onNextPage: PropTypes.func,
  onClose: PropTypes.func
}
*/
var _default = MenuItemList;
exports.default = _default;
//# sourceMappingURL=MenuItemList.js.map