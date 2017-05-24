'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _lastUri = void 0;
var _msLastFetch = void 0;

var fnFetch = function fnFetch(_ref) {
  var uri = _ref.uri,
      option = _ref.option,
      onCheckResponse = _ref.onCheckResponse,
      onFetch = _ref.onFetch,
      onCompleted = _ref.onCompleted,
      onFailed = _ref.onFailed,
      onCatch = _ref.onCatch;

  var _msNow = Date.now();
  if (_msNow - _msLastFetch < FREQUENCY_RESTRICTION) {
    if (_lastUri !== uri) {
      onFailed({ msg: MSG_FREQUENCY_RESTRICTION });
    } else {
      onCompleted({ json: {}, option: option });
    }
  } else {
    _lastUri = uri;
    _msLastFetch = _msNow;
    fetch(uri).then(function (response) {
      var status = response.status,
          statusText = response.statusText;

      if (status >= 500 && status < 600) {
        throw { msg: 'Response Error ' + status + ' : ' + statusText };
      } else {
        return Promise.all([Promise.resolve(status), response.json()]);
      }
    }).then(function (_ref2) {
      var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
          status = _ref3[0],
          json = _ref3[1];

      if (onCheckResponse(json, option)) {
        //option.limitRemaining = limitRemaining;
        onFetch({ json: json, option: option, onCompleted: onCompleted });
      }
    }).catch(function (error) {
      onCatch({ error: error, option: option, onFailed: onFailed });
    });
  }
};

exports.default = fnFetch;
//# sourceMappingURL=D:\_Dev\_React\_News\js\utils\fn.js.map