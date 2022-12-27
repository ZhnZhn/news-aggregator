"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _dt = _interopRequireDefault(require("../utils/dt"));
var API_URL = "https://api.stackexchange.com/2.2";
var _toUTCSecond = _dt["default"].toUTCSecond,
  DF_FROM_DATE_S = _toUTCSecond(_dt["default"].getFromDate(1)),
  DF_TO_DATE_S = _toUTCSecond(_dt["default"].getToDate()),
  DF_TAG_TAG = 'CSS',
  DF_TAG_SORT_BY = 'week',
  DF_SEARCH_TAGGED = 'CSS',
  DF_SEARCH_IN_TITLE = 'flexbox',
  DF_SEARCH_SORT_BY = 'votes';
var _rRequestUrl = {
  SO_TAGGED: function SO_TAGGED(_ref) {
    var _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? DF_TAG_TAG : _ref$tag,
      _ref$sortBy = _ref.sortBy,
      sortBy = _ref$sortBy === void 0 ? DF_TAG_SORT_BY : _ref$sortBy,
      _ref$fromDate = _ref.fromDate,
      fromDate = _ref$fromDate === void 0 ? DF_FROM_DATE_S : _ref$fromDate,
      _ref$toDate = _ref.toDate,
      toDate = _ref$toDate === void 0 ? DF_TO_DATE_S : _ref$toDate;
    return API_URL + "/questions?page=1&pagesize=50&order=desc&fromdate=" + fromDate + "&todate=" + toDate + "&sort=" + sortBy + "&tagged=" + tag + "&site=stackoverflow";
  },
  SO_SEARCH: function SO_SEARCH(_ref2) {
    var _ref2$tagged = _ref2.tagged,
      tagged = _ref2$tagged === void 0 ? DF_SEARCH_TAGGED : _ref2$tagged,
      _ref2$inTitle = _ref2.inTitle,
      inTitle = _ref2$inTitle === void 0 ? DF_SEARCH_IN_TITLE : _ref2$inTitle,
      _ref2$sortBy = _ref2.sortBy,
      sortBy = _ref2$sortBy === void 0 ? DF_SEARCH_SORT_BY : _ref2$sortBy,
      _ref2$fromDate = _ref2.fromDate,
      fromDate = _ref2$fromDate === void 0 ? DF_FROM_DATE_S : _ref2$fromDate,
      _ref2$toDate = _ref2.toDate,
      toDate = _ref2$toDate === void 0 ? DF_TO_DATE_S : _ref2$toDate;
    return API_URL + "/search?page=1&pagesize=50&order=desc&fromdate=" + fromDate + "&todate=" + toDate + "&sort=" + sortBy + "&tagged=" + tagged + "&intitle=" + inTitle + "&site=stackoverflow";
  }
};
var StackOverflowApi = {
  getRequestUrl: function getRequestUrl(option) {
    var _crRequestUrl = _rRequestUrl[option.type];
    return _crRequestUrl(option);
  },
  checkResponse: function checkResponse(json, option) {
    var error_message = json.error_message,
      _json$error_name = json.error_name,
      error_name = _json$error_name === void 0 ? '' : _json$error_name;
    if (error_message) {
      throw {
        msg: error_name + " " + error_message
      };
    }
    return true;
  }
};
var _default = StackOverflowApi;
exports["default"] = _default;
//# sourceMappingURL=StackOverflowApi.js.map