"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const AsyncShowComponent = _ref => {
  let {
    is,
    mls,
    children
  } = _ref;
  const [isShow, setIsShow] = (0, _uiApi.useState)(is);
  (0, _uiApi.useEffect)(() => {
    let _idTimeout;
    if (is) {
      _idTimeout = setTimeout(() => setIsShow(true), mls);
    } else {
      setIsShow(false);
    }
    return () => clearTimeout(_idTimeout);
  }, [is, mls]);
  return is && isShow ? children : null;
};
var _default = exports.default = AsyncShowComponent;
//# sourceMappingURL=AsyncShowComponent.js.map