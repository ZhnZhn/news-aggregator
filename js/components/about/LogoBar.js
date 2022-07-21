"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _LogoGitHub = _interopRequireDefault(require("./LogoGitHub"));

var _LogoPreact = _interopRequireDefault(require("./LogoPreact"));

var _jsxRuntime = require("preact/jsx-runtime");

var S_ROOT = {
  textAlign: 'center',
  paddingTop: 20
};

var LogoBar = function LogoBar() {
  return (0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [(0, _jsxRuntime.jsx)(_LogoGitHub["default"], {
      className: "logo__github",
      title: "GitHub: Repository News Aggregator",
      href: "https://github.com/zhnzhn/news-aggregator"
    }), (0, _jsxRuntime.jsx)(_LogoPreact["default"], {
      className: "logo__preact"
    })]
  });
};

var _default = LogoBar;
exports["default"] = _default;
//# sourceMappingURL=LogoBar.js.map