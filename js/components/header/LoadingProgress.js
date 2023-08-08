"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _storeAtoms = require("../../flux/storeAtoms");
var _LoadingProgressActions = require("../../flux/actions/LoadingProgressActions");
var _ProgressLine = _interopRequireDefault(require("../zhn-atoms/ProgressLine"));
var _jsxRuntime = require("preact/jsx-runtime");
const COLOR_LOADING = '#2f7ed8',
  COLOR_FAILED = '#ed5813';
const _crState = (completed, color) => [completed, color];
const ProgressLoading = () => {
  const loading = (0, _storeAtoms.useLoading)(),
    [completed, color] = loading === _LoadingProgressActions.LPAT_LOADING ? _crState(35, COLOR_LOADING) : loading === _LoadingProgressActions.LPAT_LOADING_COMPLETE ? _crState(100, COLOR_LOADING) : loading === _LoadingProgressActions.LPAT_LOADING_FAILED ? _crState(100, COLOR_FAILED) : _crState(0, COLOR_LOADING);
  return (0, _jsxRuntime.jsx)(_ProgressLine.default, {
    color: color,
    completed: completed
  });
};
const _isNotShouldRerender = () => true;
var _default = (0, _uiApi.memo)(ProgressLoading, _isNotShouldRerender);
exports.default = _default;
//# sourceMappingURL=LoadingProgress.js.map