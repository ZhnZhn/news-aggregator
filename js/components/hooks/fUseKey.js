"use strict";

exports.__esModule = true;
exports.useKeyEnterOrSpace = exports.useKeyDelete = exports.isKeyEnterOrSpace = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
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
//# sourceMappingURL=fUseKey.js.map