"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuTopic = _interopRequireDefault(require("./MenuTopic"));
var _jsxRuntime = require("preact/jsx-runtime");
const Menu = _ref => {
  let {
    menuModel,
    getFocusRef,
    onToggle
  } = _ref;
  return getFocusRef ? menuModel.map((topic, index) => (0, _jsxRuntime.jsx)(_MenuTopic.default, {
    refBt: getFocusRef(index),
    caption: topic.t,
    items: topic.items,
    onItem: topic.onItem,
    onToggle: onToggle
  }, topic.t)) : null;
};
var _default = exports.default = (0, _uiApi.memo)(Menu);
//# sourceMappingURL=Menu.js.map