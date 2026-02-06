"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _UseLogoById = _interopRequireDefault(require("./UseLogoById"));
var _jsxRuntime = require("preact/jsx-runtime");
const LogoGitHub = props => {
  const [_ariaLabel, _dataPos] = (0, _useTooltip.default)(props.ariaLabel, props.dataPos);
  return (0, _jsxRuntime.jsx)("a", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: props.className,
    href: (0, _uiApi.toLink)(props.href),
    children: (0, _jsxRuntime.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16",
      children: (0, _jsxRuntime.jsx)(_UseLogoById.default, {
        id: "GitHub"
      })
    })
  });
};
var _default = exports.default = LogoGitHub;
//# sourceMappingURL=LogoGitHub.js.map