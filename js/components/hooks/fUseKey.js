"use strict";

exports.__esModule = true;
exports.useKeyEscape = exports.useKeyEnterOrSpace = exports.useKeyDelete = exports.isKeyEnterOrSpace = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _has = require("../has");
const isKeyEnterOrSpace = evt => evt.key === _uiApi.KEY_ENTER || evt.key === _uiApi.KEY_SPACE;
exports.isKeyEnterOrSpace = isKeyEnterOrSpace;
const _fOnKeyFnEvt = (isKey, fn) => (0, _isTypeFn.isFn)(fn) ? evt => {
  if (isKey(evt)) {
    fn();
  }
} : void 0;

/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => (0, _uiApi.useMemo)(() => _fOnKeyFnEvt(isKey, fn), deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const useKeyEnterOrSpace = exports.useKeyEnterOrSpace = _fUseKey(isKeyEnterOrSpace);
const _isKeyDelete = evt => evt.key === _uiApi.KEY_DELETE;
const useKeyDelete = exports.useKeyDelete = _fUseKey(_isKeyDelete);
const useKeyEscape = (onKeyEscape, isPropagation) => _has.HAS_KEYBOARD_FOCUS
/*eslint-disable react-hooks/exhaustive-deps*/
/*eslint-disable react-hooks/rules-of-hooks*/ ? (0, _uiApi.useMemo)(() => evt => {
  if (evt.key === _uiApi.KEY_ESCAPE) {
    onKeyEscape();
    if (!isPropagation) {
      evt.stopPropagation();
    }
  }
}, []) : void 0;
// onKeyEscape
/*eslint-enable react-hooks/exhaustive-deps */
/*eslint-enable react-hooks/rules-of-hooks*/
exports.useKeyEscape = useKeyEscape;
//# sourceMappingURL=fUseKey.js.map