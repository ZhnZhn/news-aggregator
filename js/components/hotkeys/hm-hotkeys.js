"use strict";

exports.__esModule = true;
exports.removeHotKey = exports.hmHotKeys = exports.clearHotKeys = exports.addHotKey = void 0;
var hmHotKeys = Object.create(null);
exports.hmHotKeys = hmHotKeys;
var addHotKey = function addHotKey(hotKey, onKeyDown) {
  return hmHotKeys && (hmHotKeys[hotKey] = onKeyDown);
};
exports.addHotKey = addHotKey;
var removeHotKey = function removeHotKey(hotKey) {
  return hmHotKeys && (hmHotKeys[hotKey] = void 0);
};
exports.removeHotKey = removeHotKey;
var clearHotKeys = function clearHotKeys() {
  exports.hmHotKeys = hmHotKeys = null;
};
exports.clearHotKeys = clearHotKeys;
//# sourceMappingURL=hm-hotkeys.js.map