"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useHasMounted = function useHasMounted() {
  var _ref = (0, _uiApi.useRef)(true),
      current = _ref.current;

  _ref.current = false;
  return current;
};

var _default = useHasMounted;
exports["default"] = _default;
//# sourceMappingURL=useHasMounted.js.map