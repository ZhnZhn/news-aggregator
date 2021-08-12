"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _fnNoop = function _fnNoop() {};

var useRefClose = function useRefClose(onClose) {
  if (onClose === void 0) {
    onClose = _fnNoop;
  }

  var _refDialog = (0, _react.useRef)(null);

  return [_refDialog,
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _react.useCallback)(function () {
    var current = _refDialog.current;

    if (current && current.focusPrevEl) {
      current.focusPrevEl();
    }

    onClose();
  }, []) //onClose

  /*eslint-enable react-hooks/exhaustive-deps */
  ];
};

var _default = useRefClose;
exports["default"] = _default;
//# sourceMappingURL=useRefClose.js.map