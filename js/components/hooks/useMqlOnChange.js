"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useMqlOnChange = function useMqlOnChange(mql, onChange) {
  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (mql) {
      mql.addEventListener('change', onChange);
    }

    return function () {
      if (mql) {
        mql.removeEventListener('change', onChange);
      }
    };
  }, []); // mql, onChange

  /*eslint-enable react-hooks/exhaustive-deps */
};

var _default = useMqlOnChange;
exports["default"] = _default;
//# sourceMappingURL=useMqlOnChange.js.map