"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("preact/jsx-runtime");
const AsyncShowComponent = _ref => {
  let {
    is,
    mls,
    children
  } = _ref;
  const [isShow, setIsShow] = (0, _uiApi.useState)(is);
  (0, _uiApi.useEffect)(() => {
    if (is) {
      setTimeout(() => setIsShow(true), mls);
    } else {
      setIsShow(false);
    }
  }, [is, mls]);
  return is && isShow ? (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children
  }) : null;
};
var _default = exports.default = AsyncShowComponent;
//# sourceMappingURL=AsyncShowComponent.js.map