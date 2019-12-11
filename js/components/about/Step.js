"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var S = {
  STEP: {
    display: 'inline-block',
    color: '#80c040',
    border: '2px solid #80c040',
    borderRadius: '50%',
    textTransform: 'uppercase',
    fontSize: '18px',
    lineHeight: '24px',
    width: '26px',
    height: '26px',
    textAlign: 'center'
  },
  DESCR: {
    color: 'black'
  }
};

var Step = function Step(_ref) {
  var styleRoot = _ref.styleRoot,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? '0' : _ref$step,
      description = _ref.description;
  return _react["default"].createElement("p", {
    style: styleRoot
  }, _react["default"].createElement("span", {
    style: S.STEP
  }, step), _react["default"].createElement("span", {
    style: S.DESCR
  }, "\xA0", description));
};

var _default = Step;
exports["default"] = _default;
//# sourceMappingURL=Step.js.map