"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _Comp = _interopRequireDefault(require("../../Comp"));

var _jsxRuntime = require("react/jsx-runtime");

/*eslint-disable react-hooks/exhaustive-deps */
var useBtLoad = function useBtLoad(TS, hLoad) {
  return (0, _react.useMemo)(function () {
    return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].RaisedButton, {
      isPrimary: true,
      style: TS.RAISED,
      clDiv: TS.CL_RAISED_DIV,
      caption: "Load",
      onClick: hLoad
    }, "_load")];
  }, [TS]);
}; //hLoad

/*eslint-enable react-hooks/exhaustive-deps */


var _default = useBtLoad;
exports["default"] = _default;
//# sourceMappingURL=useBtLoad.js.map