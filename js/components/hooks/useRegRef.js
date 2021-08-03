"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var useRegRef = function useRegRef(onReg, ref) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _react.useLayoutEffect)(function () {
    var _node = ref.current;

    if (typeof onReg == 'function' && _node) {
      onReg(_node);
    }
  }, []); //onReg, ref

  /*eslint-enable react-hooks/exhaustive-deps */
};

var _default = useRegRef;
exports["default"] = _default;
//# sourceMappingURL=useRegRef.js.map