"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _MenuTopic = _interopRequireDefault(require("./MenuTopic"));
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const Menu = _ref => {
  let {
    refFirstItem,
    refLastItem,
    style,
    itemStyle,
    menuModel
  } = _ref;
  if (!_isArr(menuModel)) {
    return null;
  }
  const _lastIndex = menuModel.length - 1;
  return menuModel.map((topic, index) => (0, _jsxRuntime.jsx)(_MenuTopic.default, {
    refBt: index === 0 ? refFirstItem : index === _lastIndex ? refLastItem : void 0,
    caption: topic.t,
    items: topic.items,
    style: style,
    itemStyle: itemStyle
  }, topic.t));
};
var _default = (0, _uiApi.memo)(Menu);
exports.default = _default;
//# sourceMappingURL=Menu.js.map