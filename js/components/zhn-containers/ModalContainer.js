"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _useClassAnimation = _interopRequireDefault(require("../hooks/useClassAnimation"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var MODAL_ROOT = 'modal-root',
    CL = {
  INIT: MODAL_ROOT,
  SHOWING: MODAL_ROOT + " show-modal",
  HIDING: MODAL_ROOT + " hide-modal"
},
    S = {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", (0, _extends2["default"])({}, (0, _useClassAnimation["default"])({
    isShow: isShow,
    CL: CL,
    S: S,
    timeout: timeout
  }), {
    onClick: onClose,
    children: children
  }));
};

var _default = ModalContainer;
exports["default"] = _default;
//# sourceMappingURL=ModalContainer.js.map