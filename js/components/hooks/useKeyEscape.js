"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
const useKeyEscape = (onKeyEscape, isPropagation) => _has.HAS_KEYBOARD_FOCUS
/*eslint-disable react-hooks/exhaustive-deps*/
/*eslint-disable react-hooks/rules-of-hooks*/ ? (0, _uiApi.useCallback)(evt => {
  if (evt && evt.keyCode === 27) {
    onKeyEscape();
    if (!isPropagation) {
      evt.stopPropagation();
    }
  }
}, []) : _uiApi.FN_NOOP;
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */
/*eslint-enable react-hooks/rules-of-hooks*/
var _default = exports.default = useKeyEscape;
//# sourceMappingURL=useKeyEscape.js.map