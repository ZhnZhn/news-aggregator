"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _useKeyEnter = _interopRequireDefault(require("../hooks/useKeyEnter"));
var _ResizeElementImpl = _interopRequireDefault(require("./ResizeElementImpl"));
var useResizeElement = function useResizeElement(props, ref) {
  var resizeImpl = (0, _useRefInit["default"])(function () {
      return new _ResizeElementImpl["default"](props);
    }),
    _onMinusWidth = (0, _useKeyEnter["default"])(props.onMinusWidth),
    _onPlusWidth = (0, _useKeyEnter["default"])(props.onPlusWidth);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      toWidth: resizeImpl.toWidth,
      resizeBy: resizeImpl.resizeBy
    };
  }, []);
  // resizeImpl.toWidth, resizeImpl.resizeBy

  (0, _uiApi.useEffect)(function () {
    return function () {
      return resizeImpl.clearInterval();
    };
  }, []);
  // resizeImpl
  /*eslint-enable react-hooks/exhaustive-deps */

  return [resizeImpl.hStartResizeLeft, resizeImpl.hStartResizeRight, resizeImpl.hStopResize, _onMinusWidth, _onPlusWidth];
};
var _default = useResizeElement;
exports["default"] = _default;
//# sourceMappingURL=useResizeElement.js.map