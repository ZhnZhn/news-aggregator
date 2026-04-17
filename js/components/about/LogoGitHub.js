"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _SafeLink = _interopRequireDefault(require("../zhn/SafeLink"));
var _UseLogoById = _interopRequireDefault(require("./UseLogoById"));
var _jsxRuntime = require("preact/jsx-runtime");
// biome-ignore-start lint/a11y/useAnchorContent: tag a has arria-label
const LogoGitHub = props => (0, _jsxRuntime.jsx)(_SafeLink.default, {
  "aria-label": props.ariaLabel,
  className: props.className,
  href: props.href,
  children: (0, _jsxRuntime.jsx)("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    children: (0, _jsxRuntime.jsx)(_UseLogoById.default, {
      id: "GitHub"
    })
  })
});
// biome-ignore-end lint/a11y/useAnchorContent: tag a has arria-label
var _default = exports.default = LogoGitHub;
//# sourceMappingURL=LogoGitHub.js.map