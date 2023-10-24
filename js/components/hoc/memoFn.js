"use strict";

exports.__esModule = true;
exports.memoTrue = exports.memoIsShow = void 0;
var _uiApi = require("../uiApi");
const _isNotShouldRerenderIsShow = (prevProps, nextProps) => prevProps.isShow === nextProps.isShow;
const memoIsShow = Comp => (0, _uiApi.memo)(Comp, _isNotShouldRerenderIsShow);
exports.memoIsShow = memoIsShow;
const _isNotShouldRerenderTrue = () => true;
const memoTrue = Comp => (0, _uiApi.memo)(Comp, _isNotShouldRerenderTrue);
exports.memoTrue = memoTrue;
//# sourceMappingURL=memoFn.js.map