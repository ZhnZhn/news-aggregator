'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _useClassAnimation = require('../zhn-hooks/useClassAnimation');

var _useClassAnimation2 = _interopRequireDefault(_useClassAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};
//import PropTypes from 'prop-types'

var S = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

var ModalContainer = function ModalContainer(_ref) {
  var isShow = _ref.isShow,
      timeout = _ref.timeout,
      children = _ref.children,
      onClose = _ref.onClose;

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, (0, _useClassAnimation2.default)({ isShow: isShow, CL: CL, S: S, timeout: timeout }), {
      onClick: onClose
    }),
    children
  );
};

exports.default = ModalContainer;
//# sourceMappingURL=ModalContainer.js.map