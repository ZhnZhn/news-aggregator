"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.IexApi = exports.StackOverflow = exports.WebhoseIo = exports.NewsApi = void 0;

var _withProps = _interopRequireDefault(require("../hoc/withProps"));

var _Link = _interopRequireDefault(require("../zhn-atoms/Link"));

var _PoweredBy = _interopRequireDefault(require("./PoweredBy"));

var CryptoCompare = (0, _withProps["default"])({
  title: "CryptoCompare",
  href: "https://cryptocompare.com/",
  tabIndex: "-1"
})(_Link["default"]);
var NewsApi = (0, _withProps["default"])({
  title: "NewsApi.org",
  href: "https://newsapi.org/",
  tabIndex: "-1"
})(_Link["default"]);
exports.NewsApi = NewsApi;
var WebhoseIo = (0, _withProps["default"])({
  title: "Webhose.io",
  href: "https://webhose.io/",
  tabIndex: "-1"
})(_Link["default"]);
exports.WebhoseIo = WebhoseIo;
var StackOverflow = (0, _withProps["default"])({
  title: "StackOverflow",
  href: "https://stackoverflow.com/",
  tabIndex: "-1"
})(_Link["default"]);
exports.StackOverflow = StackOverflow;
var IexApi = (0, _withProps["default"])({
  title: "IEX Cloud",
  href: "https://iexcloud.io/",
  tabIndex: "-1"
})(_Link["default"]);
exports.IexApi = IexApi;
var Link = {
  NewsApi: NewsApi,
  WebhoseIo: WebhoseIo,
  StackOverflow: StackOverflow,
  IexApi: IexApi,
  CryptoCompare: CryptoCompare,
  PoweredBy: _PoweredBy["default"]
};
var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Links.js.map