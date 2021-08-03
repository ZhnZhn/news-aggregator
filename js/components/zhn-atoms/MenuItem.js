"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _fnNoop = function _fnNoop() {};

var MenuItem = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      caption = _ref.caption,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? _fnNoop : _ref$onClick,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? _fnNoop : _ref$onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hKeyDown = (0, _react.useCallback)(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 13) {
      onClick();
    } else if (keyCode === 27) {
      onClose({
        target: ref.current
      });
    }
  }, []); //oncLick, onClose

  /*eslint-enable react-hooks/exhaustive-deps */


  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    ref: ref,
    role: "menuitem",
    className: className,
    tabIndex: "0",
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: caption
  });
});

var _default = MenuItem;
exports["default"] = _default;
//# sourceMappingURL=MenuItem.js.map