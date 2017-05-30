'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TYPES = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _Reflux$createActions;

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _Store = require('../stores/Store');

var _Store2 = _interopRequireDefault(_Store);

var _RouterLoad = require('../logic/RouterLoad');

var _RouterLoad2 = _interopRequireDefault(_RouterLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPES = exports.TYPES = {
  LOAD_NEWS: 'loadNews',
  LOAD_NEWS_COMPLETED: 'loadNewsCompleted',
  LOAD_NEWS_FAILED: 'loadNewsFailed',

  REMOVE_NEWS: 'removeNews',
  REMOVE_ALL_NEWS: 'removeAllNews',
  REMOVE_UNDER_NEWS: 'removeUnderNews'
};

var NewsActions = _reflux2.default.createActions((_Reflux$createActions = {}, (0, _defineProperty3.default)(_Reflux$createActions, TYPES.LOAD_NEWS, {
  children: ['completed', 'failed']
}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.REMOVE_NEWS, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.REMOVE_ALL_NEWS, {}), (0, _defineProperty3.default)(_Reflux$createActions, TYPES.REMOVE_UNDER_NEWS, {}), _Reflux$createActions));

NewsActions[TYPES.LOAD_NEWS].listen(function () {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _option$loadId = option.loadId,
      loadId = _option$loadId === undefined ? 'N' : _option$loadId,
      _apiNewsKey = _Store2.default.getNewsKey();

  if (_apiNewsKey) {
    option.apiNewsKey = _apiNewsKey;
    _RouterLoad2.default[loadId](option, this.completed, this.failed);
  } else {
    this.failed({ msg: "NewsApi Key is not set. \nPlease, set and try again." });
  }
});

exports.default = NewsActions;
//# sourceMappingURL=D:\_Dev\_React\_News\js\flux\actions\NewsActions.js.map