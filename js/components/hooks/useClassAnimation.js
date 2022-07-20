"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useRerender2 = _interopRequireDefault(require("./useRerender"));

var useClassAnimation = function useClassAnimation(_ref) {
  var isShow = _ref.isShow,
      CL = _ref.CL,
      S = _ref.S,
      _ref$initialWasClosed = _ref.initialWasClosed,
      initialWasClosed = _ref$initialWasClosed === void 0 ? true : _ref$initialWasClosed,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 450 : _ref$timeout;

  var _useRerender = (0, _useRerender2["default"])(),
      _wasRerendered = _useRerender[0],
      _rerender = _useRerender[1],
      _refWasClosed = (0, _uiApi.useRef)(initialWasClosed),
      _refPrevIsShow = (0, _uiApi.useRef)(isShow);
  /*eslint-disable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    if (_refPrevIsShow.current && !isShow) {
      setTimeout(function () {
        _refWasClosed.current = true;

        _rerender();
      }, timeout);
    }

    _refPrevIsShow.current = isShow;
    _refWasClosed.current = false;
  }, [isShow, _wasRerendered]);
  /*eslint-enable react-hooks/exhaustive-deps */

  var _ref2 = _refWasClosed.current ? [CL.INIT, S.INIT] : isShow ? [CL.SHOWING, S.SHOWING] : [CL.HIDING, S.HIDING],
      className = _ref2[0],
      style = _ref2[1];

  return {
    className: className,
    style: style
  };
};

var _default = useClassAnimation;
exports["default"] = _default;
//# sourceMappingURL=useClassAnimation.js.map