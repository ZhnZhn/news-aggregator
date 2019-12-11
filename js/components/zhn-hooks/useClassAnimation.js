"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _useForceUpdate2 = _interopRequireDefault(require("./useForceUpdate"));

var useClassAnimation = function useClassAnimation(_ref) {
  var isShow = _ref.isShow,
      CL = _ref.CL,
      S = _ref.S,
      _ref$initialWasClosed = _ref.initialWasClosed,
      initialWasClosed = _ref$initialWasClosed === void 0 ? true : _ref$initialWasClosed,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 450 : _ref$timeout;

  var _useForceUpdate = (0, _useForceUpdate2["default"])(),
      _wasUpdated = _useForceUpdate[0],
      _forceUpdate = _useForceUpdate[1],
      _refWasClosed = (0, _react.useRef)(initialWasClosed),
      _refPrevIsShow = (0, _react.useRef)(isShow);

  (0, _react.useEffect)(function () {
    if (_refPrevIsShow.current && !isShow) {
      setTimeout(function () {
        _refWasClosed.current = true;

        _forceUpdate();
      }, timeout);
    }

    _refPrevIsShow.current = isShow;
    _refWasClosed.current = false;
  }, [isShow, _wasUpdated]);
  var className, style;

  if (_refWasClosed.current) {
    className = CL.INIT;
    style = S.INIT;
  } else {
    className = isShow ? CL.SHOWING : CL.HIDING;
    style = isShow ? S.SHOWING : S.HIDING;
  }

  return {
    className: className,
    style: style
  };
};

var _default = useClassAnimation;
exports["default"] = _default;
//# sourceMappingURL=useClassAnimation.js.map