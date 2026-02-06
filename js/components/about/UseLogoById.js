"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const PATH_TO_SVG_SPRITE = './sprite.svg';
const UseLogoById = props => (0, _jsxRuntime.jsx)("use", {
  style: props.style,
  href: `${PATH_TO_SVG_SPRITE}#${props.id}Logo`
});
var _default = exports.default = UseLogoById;
//# sourceMappingURL=UseLogoById.js.map