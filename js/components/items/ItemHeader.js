"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _CL = require("../styles/CL");

var _SvgX = _interopRequireDefault(require("../zhn-atoms/SvgX"));

var _jsxRuntime = require("preact/jsx-runtime");

var ItemHeader = (0, _uiApi.forwardRef)(function (_ref, ref) {
  var isShow = _ref.isShow,
      className = _ref.className,
      style = _ref.style,
      captionStyle = _ref.captionStyle,
      btCloseStyle = _ref.btCloseStyle,
      title = _ref.title,
      onClick = _ref.onClick,
      onHide = _ref.onHide,
      onClose = _ref.onClose;

  /*eslint-disable react-hooks/exhaustive-deps */
  var _hClose = (0, _uiApi.useCallback)(function (evt) {
    evt.stopPropagation();
    onClose();
  }, []) //onClose
  ,
      _hKeyDown = (0, _uiApi.useCallback)(function (evt) {
    var keyCode = evt.keyCode;

    if (keyCode === 13) {
      if (!isShow) {
        onClick();
      } else {
        onHide();
      }
    } else if (keyCode === 27 && isShow) {
      onClick();
    } else if (keyCode === 8 || keyCode === 46) {
      onClose();
    }
  }, [isShow]); //onClick, onHide, onClose

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