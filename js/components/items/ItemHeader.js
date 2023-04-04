"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _CL = require("../styles/CL");
var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));
var _jsxRuntime = require("preact/jsx-runtime");
var FN_NOOP = function FN_NOOP() {};
var ItemHeader = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    style = _ref.style,
    captionStyle = _ref.captionStyle,
    btCloseStyle = _ref.btCloseStyle,
    title = _ref.title,
    _ref$onKeyDown = _ref.onKeyDown,
    onKeyDown = _ref$onKeyDown === void 0 ? FN_NOOP : _ref$onKeyDown,
    onClick = _ref.onClick,
    onToggle = _ref.onToggle,
    onClose = _ref.onClose;
  /*eslint-disable react-hooks/exhaustive-deps */
  var _useMemo = (0, _uiApi.useMemo)(function () {
      return [function (evt) {
        if (evt.keyCode === 13) {
          onToggle();
        } else {
          onKeyDown(evt);
        }
      }, function (evt) {
        evt.stopPropagation();
        onClose();
      }];
    }, []),
    _hKeyDown = _useMemo[0],
    _hClose = _useMemo[1];
  //onToggle, onKeyDown
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("div", {
    role: "button",
    ref: ref,
    tabIndex: "0",
    className: className,
    style: style,
    onClick: onClick,
    onKeyDown: _hKeyDown,
    children: [(0, _jsxRuntime.jsx)("span", {
      className: _CL.CL_SELECT_NONE,
      style: captionStyle,
      children: title
    }), (0, _jsxRuntime.jsx)(_SvgX["default"], {
      style: btCloseStyle,
      onClick: _hClose
    })]
  });
});
var _default = ItemHeader;
exports["default"] = _default;
//# sourceMappingURL=ItemHeader.js.map