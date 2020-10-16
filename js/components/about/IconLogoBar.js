"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime.js");

var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));

var _IconReact = _interopRequireDefault(require("./IconReact"));

var S = {
  ROOT: {
    textAlign: 'center',
    paddingTop: 20
  }
};

var IconLogoBar = function IconLogoBar() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: S.ROOT,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_IconGitHub["default"], {
      className: "icon__github",
      title: "GitHub: Repo News Aggregator",
      uri: "https://github.com/zhnzhn/news-aggregator"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconReact["default"], {})]
  });
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map