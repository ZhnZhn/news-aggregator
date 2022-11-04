"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _TextField = _interopRequireDefault(require("../zhn-m-input/TextField"));

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _jsxRuntime = require("preact/jsx-runtime");

var DATE_ERR_MSG = "YYYY-MM-DD",
    _onTestDate = _dt["default"].isValidDate;

var InputFromToDate = function InputFromToDate(_ref) {
  var refFromDate = _ref.refFromDate,
      refToDate = _ref.refToDate,
      TS = _ref.TS,
      initialFrom = _ref.initialFrom,
      initialTo = _ref.initialTo;
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_TextField["default"], {
      ref: refFromDate,
      caption: "From Date",
      hasClear: false,
      style: TS.INPUT_DATE,
      initValue: initialFrom,
      errorMsg: DATE_ERR_MSG,
      onTest: _onTestDate
    }), (0, _jsxRuntime.jsx)(_TextField["default"], {
      ref: refToDate,
      caption: "To Date",
      hasClear: false,
      style: TS.INPUT_DATE,
      initValue: initialTo,
      errorMsg: DATE_ERR_MSG,
      onTest: _onTestDate
    })]
  });
};

var _default = InputFromToDate;
exports["default"] = _default;
//# sourceMappingURL=InputFromToDate.js.map