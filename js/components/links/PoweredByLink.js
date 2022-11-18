"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PoweredByWebzLink = exports.PoweredByTheNewsApi = exports.PoweredByStackOverflow = exports.PoweredByNewsApi = void 0;
var _fPoweredBy = _interopRequireDefault(require("./fPoweredBy"));
var _Links = require("./Links");
var PoweredByNewsApi = (0, _fPoweredBy["default"])(_Links.NewsApiLink);
exports.PoweredByNewsApi = PoweredByNewsApi;
var PoweredByTheNewsApi = (0, _fPoweredBy["default"])(_Links.TheNewsApiLink);
exports.PoweredByTheNewsApi = PoweredByTheNewsApi;
var PoweredByStackOverflow = (0, _fPoweredBy["default"])(_Links.StackOverflowLink);
exports.PoweredByStackOverflow = PoweredByStackOverflow;
var PoweredByWebzLink = (0, _fPoweredBy["default"])(_Links.WebzLink);
exports.PoweredByWebzLink = PoweredByWebzLink;
//# sourceMappingURL=PoweredByLink.js.map