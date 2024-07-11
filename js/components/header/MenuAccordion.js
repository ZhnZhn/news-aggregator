"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useToggleAccordion = _interopRequireDefault(require("../hooks/useToggleAccordion"));
var _Menu = _interopRequireDefault(require("./Menu"));
var _jsxRuntime = require("preact/jsx-runtime");
const MenuAccordion = props => {
  const _onToggleTopic = (0, _useToggleAccordion.default)();
  return (0, _jsxRuntime.jsx)(_Menu.default, {
    ...props,
    onToggle: _onToggleTopic
  });
};
var _default = exports.default = MenuAccordion;
//# sourceMappingURL=MenuAccordion.js.map