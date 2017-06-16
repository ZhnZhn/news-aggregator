'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var BASE = "https://api.stackexchange.com/2.2";

var SORT_BY = 'week';
var FROM_DATE_S = 1465776000;
var TO_DATE_S = 1497312000;

var _rRequestUrl = {
  TAG: function TAG(_ref) {
    var tag = _ref.tag,
        _ref$sortBy = _ref.sortBy,
        sortBy = _ref$sortBy === undefined ? SORT_BY : _ref$sortBy,
        fromDate = _ref.fromDate,
        toDate = _ref.toDate;

    var _fromDate = fromDate || FROM_DATE_S,
        _toDate = toDate || TO_DATE_S;
    return BASE + '/questions?page=1&pagesize=50&order=desc&fromdate=' + _fromDate + '&todate=' + _toDate + '&sort=' + sortBy + '&tagged=' + tag + '&site=stackoverflow';
  }
};

var StackOverflowApi = {
  getRequestUrl: function getRequestUrl(option) {
    var fn = _rRequestUrl[option.requestType];
    return fn(option);
  },
  checkResponse: function checkResponse(json, option) {
    var error_message = json.error_message,
        _json$error_name = json.error_name,
        error_name = _json$error_name === undefined ? '' : _json$error_name;

    if (error_message) {
      throw {
        msg: error_name + ' ' + error_message
      };
    }
    return true;
  }
};

exports.default = StackOverflowApi;
//# sourceMappingURL=D:\_Dev\_React\_News\js\api\StackOverflowApi.js.map