"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _MenuAriaItem = _interopRequireDefault(require("./MenuAriaItem"));

var _jsxRuntime = require("react/jsx-runtime");

var S = {
  ITEM: {
    position: 'relative'
  },
  PREV_PAGE: {
    position: 'absolute',
    top: 0,
    left: 16
  },
  TITLE: {
    paddingLeft: 16
  }
};

var MenuTitle = function MenuTitle(_ref) {
  var baseTitleCl = _ref.baseTitleCl,
      title = _ref.title,
      pageNumber = _ref.pageNumber,
      onPrevPage = _ref.onPrevPage,
      onReg = _ref.onReg;

  var _hClick = (0, _react.useCallback)(function () {
    return onPrevPage(pageNumber);
  }, [onPrevPage, pageNumber]);

  if (!title) {
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_MenuAriaItem["default"], {
    className: baseTitleCl,
    style: S.ITEM,
    onClick: _hClick,
    onReg: onReg,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.PREV_PAGE,
      children: '<'
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      style: S.TITLE,
      children: title
    })]
  });
};

var _default = MenuTitle;
exports["default"] = _default;
//# sourceMappingURL=MenuTitle.js.map