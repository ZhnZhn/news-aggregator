"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//const LIMIT_REMAINING = 'X-RateLimit-Remaining';

/*
const _fnMsg400 = (option) => {
  if (option.loadId === "EU_STAT"){
    return '400 : Bad request.\nDataset contains no data. One or more filtering elements (query parameters) are probably invalid.\nMaybe try request with older date.';
  } else {
    return '400 : Bad request';
  }
}
*/
var FREQUENCY_RESTRICTION = 5000;
var MSG_FREQUENCY_RESTRICTION = 'Time request frequency restriction.\n1 Request per 5 second.';
var MSG_LOAD_RESTRICTION = 'Request has already loaded.\n1 Request per 5 second.';

var _recentUri;

var _msLastFetch;

var fnFetch = function fnFetch(_ref) {
  var uri = _ref.uri,
      optionFetch = _ref.optionFetch,
      option = _ref.option,
      onCheckResponse = _ref.onCheckResponse,
      onFetch = _ref.onFetch,
      onCompleted = _ref.onCompleted,
      onFailed = _ref.onFailed,
      onCatch = _ref.onCatch;

  var _msNow = Date.now();

  if (_msNow - _msLastFetch < FREQUENCY_RESTRICTION) {
    if (_recentUri !== uri) {
      onFailed({
        msg: MSG_FREQUENCY_RESTRICTION
      });
    } else {
      onFailed({
        msg: MSG_LOAD_RESTRICTION
      }); //onCompleted({ json: {}, option })
    }
  } else {
    _recentUri = uri;
    _msLastFetch = _msNow;
    fetch(uri, optionFetch).then(function (response) {
      var status = response.status,
          statusText = response.statusText;

      if (status === 404) {
        throw {
          msg: "Not Found " + status
        };
      } else if (status >= 500 && status < 600) {
        throw {
          msg: "Response Error " + status + " : " + statusText
        };
      } else {
        return Promise.all([Promise.resolve(status), response.json()]);
      }
    }).then(function (_ref2) {
      var status = _ref2[0],
          json = _ref2[1];

      if (onCheckResponse(json, option)) {
        //option.limitRemaining = limitRemaining;
        onFetch({
          json: json,
          option: option,
          onCompleted: onCompleted
        });
      }
    })["catch"](function (error) {
      onCatch({
        error: error,
        option: option,
        onFailed: onFailed
      });
    });
  }
};

var _default = fnFetch;
exports["default"] = _default;
//# sourceMappingURL=fn.js.map