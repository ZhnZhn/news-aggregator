"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.PoweredByWebzLink = exports.PoweredByNewsApi = void 0;
var _fPoweredBy = _interopRequireDefault(require("./fPoweredBy"));
var _Links = require("./Links");
const PoweredByNewsApi = exports.PoweredByNewsApi = (0, _fPoweredBy.default)(_Links.NewsApiLink);
const PoweredByWebzLink = exports.PoweredByWebzLink = (0, _fPoweredBy.default)(_Links.WebzLink);
//# sourceMappingURL=PoweredByLink.js.map