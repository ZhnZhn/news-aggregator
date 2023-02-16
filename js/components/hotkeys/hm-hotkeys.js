"use strict";

exports.__esModule = true;
exports.removeHotKey = exports.hmHotKeys = exports.clearHotKeys = exports.addHotKey = exports.HOT_KEY_EVENT = exports.HAS_HOT_KEYS = void 0;
var _has = require("../has");
var HAS_HOT_KEYS = !_has.HAS_TOUCH_EVENTS;
exports.HAS_HOT_KEYS = HAS_HOT_KEYS;
var HOT_KEY_EVENT = 'keydown';
exports.HOT_KEY_EVENT = HOT_KEY_EVENT;
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