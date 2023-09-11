"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));
var _PoweredByLink = require("../links/PoweredByLink");
var _jsxRuntime = require("preact/jsx-runtime");
const NewsBrowser = _ref => {
  let {
    browserId,
    useMsBrowser,
    onClick,
    onError,
    onRemoveBadges
  } = _ref;
  return (0, _jsxRuntime.jsx)(_DynamicMenuBrowser.default, {
    caption: "News Sources",
    url: "data/news-source-menu.json",
    browserId: browserId,
    useMsBrowser: useMsBrowser,
    onClick: onClick,
    onError: onError,
    children: (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByNewsApi, {})
  });
};
var _default = NewsBrowser;
exports.default = _default;
//# sourceMappingURL=NewsBrowser.js.map