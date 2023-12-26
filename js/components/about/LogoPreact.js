"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useTooltip = _interopRequireDefault(require("../hooks/useTooltip"));
var _UseLogoById = _interopRequireDefault(require("./UseLogoById"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_PREACT = {
  transform: 'translate(-210px, -210px) scale(0.9)'
};
const LogoPreact = _ref => {
  let {
    ariaLabel,
    dataPos,
    className
  } = _ref;
  const [_ariaLabel, _dataPos] = (0, _useTooltip.default)(ariaLabel, dataPos);
  return (0, _jsxRuntime.jsx)("a", {
    "aria-label": _ariaLabel,
    "data-pos": _dataPos,
    className: className,
    href: "https://preactjs.com",
    children: (0, _jsxRuntime.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-256 -256 512 512",
      children: (0, _jsxRuntime.jsx)(_UseLogoById.default, {
        id: "Preact",
        style: S_PREACT
      })
    })
  });
};
var _default = exports.default = LogoPreact;
//# sourceMappingURL=LogoPreact.js.map