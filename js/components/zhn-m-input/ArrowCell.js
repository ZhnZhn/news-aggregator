'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  SVG: {
    display: 'inline-block',
    color: 'black',
    //color: 'rgb(255, 255, 255)',
    //fill: 'inherit',
    fill: 'black',
    height: '24px',
    width: '24px',
    userSelect: 'none',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  }
};

var ArrowCell = function ArrowCell() {
  return _react2.default.createElement(
    'svg',
    { viewBox: '0 0 24 24', style: S.ROOT },
    _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' })
  );
};

exports.default = ArrowCell;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-m-input\ArrowCell.js.map