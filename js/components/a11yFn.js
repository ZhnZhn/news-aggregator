"use strict";

exports.__esModule = true;
exports.crPresentationRole = void 0;
const crPresentationRole = isShow => ({
  role: "presentation",
  hidden: !isShow,
  'aria-hidden': isShow ? void 0 : "true"
});
exports.crPresentationRole = crPresentationRole;
//# sourceMappingURL=a11yFn.js.map