"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _DP = require("../DP");
var _LogoGitHub = _interopRequireDefault(require("./LogoGitHub"));
var _LogoPreact = _interopRequireDefault(require("./LogoPreact"));
var _jsxRuntime = require("preact/jsx-runtime");
const S_ROOT = {
  position: 'relative',
  textAlign: 'center',
  paddingTop: 20
};
const LogoBar = () => (0, _jsxRuntime.jsxs)("div", {
  style: S_ROOT,
  children: [(0, _jsxRuntime.jsx)(_LogoGitHub.default, {
    ariaLabel: "GitHub: Repository News Aggregator",
    dataPos: _DP.DP_GITHUB,
    className: "logo__github",
    href: "https://github.com/zhnzhn/news-aggregator"
  }), (0, _jsxRuntime.jsx)(_LogoPreact.default, {
    ariaLabel: "Official Preact site",
    dataPos: _DP.DP_BOTTOM_RIGHT,
    className: "logo__preact"
  })]
});
var _default = LogoBar;
exports.default = _default;
//# sourceMappingURL=LogoBar.js.map