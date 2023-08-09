"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _NewsBrowser = _interopRequireDefault(require("./NewsBrowser.Style"));
var _DynamicMenuBrowser = _interopRequireDefault(require("../zhn-moleculs/DynamicMenuBrowser"));
var _PoweredByLink = require("../links/PoweredByLink");
var _jsxRuntime = require("preact/jsx-runtime");
const NewsBrowser = _ref => {
  let {
    id,
    useMsBrowser,
    onClick,
    onError,
    onRemoveBadges
  } = _ref;
  const TS = (0, _useTheme.default)(_NewsBrowser.default);
  return (0, _jsxRuntime.jsx)(_DynamicMenuBrowser.default, {
    styleConfig: TS,
    caption: "News Sources",
    url: "data/news-source-menu.json",
    browserId: id,
    useMsBrowser: useMsBrowser,
    onClick: onClick,
    onError: onError,
    children: (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByNewsApi, {})
  });
};
var _default = NewsBrowser;
exports.default = _default;
//# sourceMappingURL=NewsBrowser.js.map