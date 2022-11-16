"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _HeaderBar = _interopRequireDefault(require("../header/HeaderBar.Style"));
var _FlatButton = _interopRequireDefault(require("../zhn-bt/FlatButton"));
var _jsxRuntime = require("preact/jsx-runtime");
var S_DIV = {
  textAlign: 'center',
  paddingTop: 4
};
var _crPageCounter = function _crPageCounter(_ref) {
  var nextPage = _ref.nextPage,
    maxPage = _ref.maxPage;
  return maxPage ? nextPage + "/" + maxPage : nextPage;
};
var LoadNextPage = function LoadNextPage(_ref2) {
  var page = _ref2.page;
  var TS = (0, _useTheme["default"])(_HeaderBar["default"]);
  return page ? (0, _jsxRuntime.jsx)("div", {
    style: S_DIV,
    children: (0, _jsxRuntime.jsx)(_FlatButton["default"], {
      clDiv: TS.BT.CL_FLAT_DIV,
      caption: "Load Next Page " + _crPageCounter(page),
      onClick: page.onPageLoad
    })
  }) : null;
};
var _default = LoadNextPage;
exports["default"] = _default;
//# sourceMappingURL=LoadNextPage.js.map