"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn-bt/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_DIV = {
  textAlign: 'center',
  paddingTop: 4
};
const _crPageCounter = _ref => {
  let {
    nextPage,
    maxPage
  } = _ref;
  return maxPage ? nextPage + "/" + maxPage : nextPage;
};
const LoadNextPage = _ref2 => {
  let {
    page
  } = _ref2;
  return page ? (0, _jsxRuntime.jsx)("div", {
    style: S_DIV,
    children: (0, _jsxRuntime.jsx)(_FlatButton.default, {
      caption: "Load Next Page " + _crPageCounter(page),
      onClick: page.onPageLoad
    })
  }) : null;
};
var _default = LoadNextPage;
exports.default = _default;
//# sourceMappingURL=LoadNextPage.js.map