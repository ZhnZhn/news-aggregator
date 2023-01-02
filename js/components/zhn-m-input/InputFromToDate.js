"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _dt = require("../../utils/dt");
var _TextField = _interopRequireDefault(require("./TextField"));
var _jsxRuntime = require("preact/jsx-runtime");
var DATE_ERR_MSG = "YYYY-MM-DD";
var InputFromToDate = function InputFromToDate(_ref) {
  var style = _ref.style,
    initialFrom = _ref.initialFrom,
    initialTo = _ref.initialTo,
    onInput = _ref.onInput;
  var _onInput = (0, _uiApi.useCallback)(function (v, id) {
    onInput('' + (0, _dt.toUTCSecond)(v), id);
  }, [onInput]);
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_TextField["default"], {
      id: "fromDate",
      caption: "From Date",
      hasClear: false,
      style: style,
      initValue: initialFrom,
      errorMsg: DATE_ERR_MSG,
      onTest: _dt.isValidDate,
      onEnter: _onInput,
      onBlur: _onInput
    }), (0, _jsxRuntime.jsx)(_TextField["default"], {
      id: "toDate",
      caption: "To Date",
      hasClear: false,
      style: style,
      initValue: initialTo,
      errorMsg: DATE_ERR_MSG,
      onTest: _dt.isValidDate,
      onEnter: _onInput,
      onBlur: _onInput
    })]
  });
};
var _default = InputFromToDate;
exports["default"] = _default;
//# sourceMappingURL=InputFromToDate.js.map