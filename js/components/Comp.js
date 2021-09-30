"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Atoms = _interopRequireDefault(require("./zhn-atoms/Atoms"));

var _A = _interopRequireDefault(require("./zhn-m-input/A"));

var _A2 = _interopRequireDefault(require("./zhn-modal-slider/A"));

var _A3 = _interopRequireDefault(require("./zhn-moleculs/A"));

var _A4 = _interopRequireDefault(require("./zhn-tab/A"));

var _Links = _interopRequireDefault(require("./links/Links"));

var Comp = (0, _extends2["default"])({}, _Atoms["default"], _A["default"], _A2["default"], _A3["default"], _A4["default"], {
  Link: _Links["default"]
});
var _default = Comp;
exports["default"] = _default;
//# sourceMappingURL=Comp.js.map