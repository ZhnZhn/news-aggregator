"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _uiApi = require("../uiApi");

var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));

var _ModalPane = _interopRequireDefault(require("./ModalPane.Style"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var _removeClickListener = function _removeClickListener(listener, ref) {
  if (ref.current) {
    document.removeEventListener('click', listener, true);
    ref.current = null;
  }
};
/*eslint-disable react-hooks/exhaustive-deps */


var ModalPane = function ModalPane(_ref) {
  var isShow = _ref.isShow,
      style = _ref.style,
      children = _ref.children,
      onClose = _ref.onClose;

  var _refNode = (0, _uiApi.useRef)(null),
      _refIs = (0, _uiApi.useRef)(null),
      _hClickOutside = (0, _uiApi.useCallback)(function (event) {
    var _refNode$current;

    if (_refNode != null && (_refNode$current = _refNode.current) != null && _refNode$current.contains && !_refNode.current.contains(event.target)) {
      event.stopPropagation();
      onClose(event);
    }
  }, []);

  (0, _uiApi.useEffect)(function () {
    if (isShow && !_refIs.current) {
      document.addEventListener('click', _hClickOutside, true);
      _refIs.current = true;
    } else if (!isShow) {
      _removeClickListener(_hClickOutside, _refIs);
    }
  });
  (0, _uiApi.useEffect)(function () {
    return function () {
      return _removeClickListener(_hClickOutside, _refIs);
    };
  }, []);
  /*eslint-enable react-hooks/exhaustive-deps */

  var TS = (0, _useTheme["default"])(_ModalPane["default"]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: _refNode,
    style: (0, _extends2["default"])({}, style, TS.ROOT),
    children: children
  });
};
/*
ModalPane.propTypes = {
 className: PropTypes.string,
 style: PropTypes.object,
 isShow: PropTypes.bool,
 onClose: PropTypes.func
}
*/


var _default = ModalPane;
exports["default"] = _default;
//# sourceMappingURL=ModalPane.js.map