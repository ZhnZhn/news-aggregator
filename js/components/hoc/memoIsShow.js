"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _isNotShouldRerender = function _isNotShouldRerender(prevProps, nextProps) {
  return prevProps.isShow === nextProps.isShow;
},
    memoIsShow = function memoIsShow(Comp) {
  return (0, _uiApi.memo)(Comp, _isNotShouldRerender);
};

var _default = memoIsShow;
exports["default"] = _default;
//# sourceMappingURL=memoIsShow.js.map