"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NewsActions = exports.NAT_UPDATE_NEWS = exports.NAT_LOAD_NEWS_COMPLETED = void 0;

var _refluxCore = _interopRequireDefault(require("reflux-core"));

var _RouterApiConf = _interopRequireDefault(require("../logic/RouterApiConf"));

var _loadNews = _interopRequireDefault(require("../logic/loadNews"));

var _Reflux$createActions;

var _assign = Object.assign;
var NAT_LOAD_NEWS_COMPLETED = 'loadNewsCompleted';
exports.NAT_LOAD_NEWS_COMPLETED = NAT_LOAD_NEWS_COMPLETED;
var NAT_UPDATE_NEWS = 'updateNews';
exports.NAT_UPDATE_NEWS = NAT_UPDATE_NEWS;
var NAT_LOAD_NEWS = 'loadNews',
    NAT_REMOVE_NEWS = 'removeNews',
    NAT_REMOVE_ALL_NEWS = 'removeAllNews',
    NAT_REMOVE_UNDER_NEWS = 'removeUnderNews';

var _NewsActions = _refluxCore["default"].createActions((_Reflux$createActions = {}, _Reflux$createActions[NAT_LOAD_NEWS] = {
  children: ['completed', 'failed']
}, _Reflux$createActions[NAT_REMOVE_NEWS] = {}, _Reflux$createActions[NAT_REMOVE_ALL_NEWS] = {}, _Reflux$createActions[NAT_REMOVE_UNDER_NEWS] = {}, _Reflux$createActions));

_NewsActions[NAT_LOAD_NEWS].listen(function (option) {
  if (option === void 0) {
    option = {};
  }

  var _RouterApiConf$getApi = _RouterApiConf["default"].getApiConf(option.loadId || 'N'),
      apiKey = _RouterApiConf$getApi.apiKey,
      adapter = _RouterApiConf$getApi.adapter,
      api = _RouterApiConf$getApi.api,
      msgErr = _RouterApiConf$getApi.msgErr;

  if (apiKey) {
    _assign(option, {
      apiKey: apiKey,
      adapter: adapter,
      api: api
    });

    (0, _loadNews["default"])(option, this.completed, this.failed);
  } else {
    this.failed({
      msg: msgErr
    });
  }
});

var NewsActions = _NewsActions;
exports.NewsActions = NewsActions;
//# sourceMappingURL=NewsActions.js.map