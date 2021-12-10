"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _SafeLink = _interopRequireDefault(require("../zhn-atoms/SafeLink"));

var _PoweredBy = _interopRequireDefault(require("./PoweredBy"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["title"];
var CL_LINK = "link";

var _fSafeLink = function _fSafeLink(href, caption) {
  return function (_ref) {
    var title = _ref.title,
        restProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref, _excluded);
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SafeLink["default"], (0, _extends2["default"])({
      className: CL_LINK
    }, restProps, {
      href: href,
      tabIndex: "-1",
      children: title || caption
    }));
  };
},
    CryptoCompare = _fSafeLink("https://cryptocompare.com", "CryptoCompare"),
    CoinStats = _fSafeLink("https://coinstats.app", "CoinStats"),
    Messari = _fSafeLink("https://messari.io", "Messari"),
    NewsApi = _fSafeLink("https://newsapi.org", "NewsApi.org"),
    Webz = _fSafeLink("https://webz.io", "Webz.io"),
    StackOverflow = _fSafeLink("https://stackoverflow.com", "StackOverflow"),
    IexApi = _fSafeLink("https://iexcloud.io", "IEX Cloud"),
    FmpApi = _fSafeLink("https://financialmodelingprep.com", "FMP");

var Link = {
  NewsApi: NewsApi,
  Webz: Webz,
  StackOverflow: StackOverflow,
  IexApi: IexApi,
  FmpApi: FmpApi,
  CryptoCompare: CryptoCompare,
  CoinStats: CoinStats,
  Messari: Messari,
  PoweredBy: _PoweredBy["default"]
};
var _default = Link;
exports["default"] = _default;
//# sourceMappingURL=Links.js.map