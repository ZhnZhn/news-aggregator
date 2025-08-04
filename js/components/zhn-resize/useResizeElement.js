"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _fUseKey = require("../hooks/fUseKey");
var _ResizeElementImpl = _interopRequireDefault(require("./ResizeElementImpl"));
const useResizeElement = props => {
  const resizeImpl = (0, _useRefInit.default)(() => {
      return new _ResizeElementImpl.default(props);
    }),
    _onMinusWidth = (0, _fUseKey.useKeyEnterOrSpace)(props.onMinusWidth),
    _onPlusWidth = (0, _fUseKey.useKeyEnterOrSpace)(props.onPlusWidth);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    return () => resizeImpl.clearInterval();
  }, []);
  // resizeImpl
  /*eslint-enable react-hooks/exhaustive-deps */

  return [resizeImpl.hStartResizeLeft, resizeImpl.hStartResizeRight, resizeImpl.hStopResize, _onMinusWidth, _onPlusWidth];
};
var _default = exports.default = useResizeElement;
//# sourceMappingURL=useResizeElement.js.map