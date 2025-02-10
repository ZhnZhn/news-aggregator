"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("./isTypeFn");
const _toSeconds = mls => mls / 1000;
const MLS_FREQUENCY_RESTRICTION = 5000;
const _crMsgFrequencyRestriction = numberOfSeconds => `Time request frequency restriction.\n1 Request per ${numberOfSeconds} seconds.`;
const _crMsgLoadRestriction = numberOfSeconds => `Request has already loaded.\n1 Request per ${numberOfSeconds} seconds.`;
const _crErrMsg = msg => ({
  msg
});
let _recentUri;
let _mlsLastFetch;
const _mathMax = Math.max;
const _getFrequencyRestriction = function (_temp) {
  let {
    _mlsFr
  } = _temp === void 0 ? {} : _temp;
  return (0, _isTypeFn.isNumber)(_mlsFr) ? _mathMax(_mlsFr, MLS_FREQUENCY_RESTRICTION) : MLS_FREQUENCY_RESTRICTION;
};
const fnFetch = function (_ref) {
  let {
    uri,
    optionFetch,
    option,
    onCheckResponse,
    onFetch,
    onCompleted,
    onFailed,
    onCatch
  } = _ref;
  const _mlsNow = Date.now(),
    _mlsFr = _getFrequencyRestriction(option);
  if (_mlsNow - _mlsLastFetch < _mlsFr) {
    const _numberOfSeconds = _toSeconds(_mlsFr);
    if (_recentUri !== uri) {
      onFailed(_crErrMsg(_crMsgFrequencyRestriction(_numberOfSeconds)));
    } else {
      onFailed(_crErrMsg(_crMsgLoadRestriction(_numberOfSeconds)));
      //onCompleted({ json: {}, option })
    }
  } else {
    _recentUri = uri;
    _mlsLastFetch = _mlsNow;
    fetch(uri, optionFetch).then(response => {
      const {
        status,
        statusText
      } = response;
      if (status === 404) {
        throw _crErrMsg(`Not Found ${status}`);
      } else if (status >= 500 && status < 600) {
        throw _crErrMsg(`Response Error ${status} : ${statusText}`);
      } else {
        return Promise.all([Promise.resolve(status), response.json()]);
      }
    }).then(_ref2 => {
      let [status, json] = _ref2;
      if (onCheckResponse(json, option)) {
        onFetch({
          json,
          option,
          onCompleted
        });
      }
    }).catch(error => {
      onCatch({
        error,
        option,
        onFailed
      });
    });
  }
};
var _default = exports.default = fnFetch;
//# sourceMappingURL=fn.js.map