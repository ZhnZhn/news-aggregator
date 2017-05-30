'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      step = _ref$step === undefined ? '0' : _ref$step,
      description = _ref.description;
  return _react2.default.createElement(
    'p',
    { style: styleRoot },
    _react2.default.createElement(
      'span',
      { style: S.STEP },
      step
    ),
    _react2.default.createElement(
      'span',
      { style: S.DESCR },
      '\xA0',
      description
    )
  );
};

exports.default = Step;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\about\Step.js.map