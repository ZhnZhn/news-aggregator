"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const PATH_TO_SVG_SPRITE = './sprite.svg';
const UseLogoById = _ref => {
  let {
    id,
    style
  } = _ref;
  return (0, _jsxRuntime.jsx)("use", {
    style: style,
    href: PATH_TO_SVG_SPRITE + "#" + id + "Logo"
  });
};
var _default = UseLogoById;
exports.default = _default;
//# sourceMappingURL=UseLogoById.js.map