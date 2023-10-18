"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuTopic = _interopRequireDefault(require("./MenuTopic"));
var _jsxRuntime = require("preact/jsx-runtime");
const Menu = _ref => {
  let {
    style,
    itemStyle,
    menuModel,
    getFocusRef
  } = _ref;
  return getFocusRef ? menuModel.map((topic, index) => (0, _jsxRuntime.jsx)(_MenuTopic.default, {
    refBt: getFocusRef(index),
    caption: topic.t,
    items: topic.items,
    style: style,
    itemStyle: itemStyle,
    onItem: topic.onItem
  }, topic.t)) : null;
};
var _default = exports.default = (0, _uiApi.memo)(Menu);
//# sourceMappingURL=Menu.js.map