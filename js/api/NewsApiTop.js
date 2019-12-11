"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _NewsApiFns = _interopRequireDefault(require("./NewsApiFns"));

var C = {
  ROOT_V2: 'https://newsapi.org/v2/',
  TOPIC_TOP: 'top-headlines'
};
var NewsApiTop = (0, _extends2["default"])({
  getRequestUrl: function getRequestUrl(option) {
    var category = option.category,
        country = option.country;
    return "" + C.ROOT_V2 + C.TOPIC_TOP + "?category=" + category + "&country=" + country;
  }
}, _NewsApiFns["default"]);
var _default = NewsApiTop;
exports["default"] = _default;
//# sourceMappingURL=NewsApiTop.js.map