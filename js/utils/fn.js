"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("./isTypeFn");
const _toSeconds = mls => mls / 1000;
const MLS_FREQUENCY_RESTRICTION = 5000;
const _crRequestPerSecondsMsg = numberOfSeconds => `1 Request per ${numberOfSeconds} seconds.`;
const _crMsgFrequencyRestriction = numberOfSeconds => `Time request frequency restriction.\n${_crRequestPerSecondsMsg(numberOfSeconds)}`;
const _crMsgLoadRestriction = numberOfSeconds => `Request has already loaded.\n${_crRequestPerSecondsMsg(numberOfSeconds)}`;
const _crErrMsg = msg => ({
  msg
});
let _recentUri;
let _mlsLastFetch;
const _mathMax = Math.max;
const _getFrequencyRestriction = mlsFr => (0, _isTypeFn.isNumber)(mlsFr) ? _mathMax(mlsFr, MLS_FREQUENCY_RESTRICTION) : MLS_FREQUENCY_RESTRICTION;
const _crFrequencyRestrictionMsg = (mlsNow, mlsFr, uri) => {
  const _mlsFr = _getFrequencyRestriction(mlsFr);
  if (mlsNow - _mlsLastFetch < _mlsFr) {
    const _crMsg = _recentUri === uri ? _crMsgLoadRestriction : _crMsgFrequencyRestriction;
    return _crMsg(_toSeconds(_mlsFr));
  }
};
const fnFetch = _ref => {
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
    _frequencyRestrictionMsg = _crFrequencyRestrictionMsg(_mlsNow, (option || {})._mlsFr, uri);
  if (_frequencyRestrictionMsg) {
    onFailed(_crErrMsg(_frequencyRestrictionMsg));
    return;
  }
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
};
var _default = exports.default = fnFetch;
//# sourceMappingURL=fn.js.map