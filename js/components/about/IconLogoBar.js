"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _IconGitHub = _interopRequireDefault(require("./IconGitHub"));

var _IconReact = _interopRequireDefault(require("./IconReact"));

var S = {
  ROOT: {
    textAlign: 'center',
    paddingTop: 20
  }
};

var IconLogoBar = function IconLogoBar() {
  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement(_IconGitHub["default"], {
    className: "icon__github",
    title: "GitHub: Repo News Aggregator",
    uri: "https://github.com/zhnzhn/news-aggregator"
  }), _react["default"].createElement(_IconReact["default"], null));
};

var _default = IconLogoBar;
exports["default"] = _default;
//# sourceMappingURL=IconLogoBar.js.map