"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.useMsItem = exports.removeUnderItems = exports.removeItems = exports.removeItem = exports.loadItem = void 0;
var _storeApi = require("./storeApi");
var _RouterApiConf = _interopRequireDefault(require("./logic/RouterApiConf"));
var _loadNews = _interopRequireDefault(require("./logic/loadNews"));
var _NewsSliceFn = require("./stores/NewsSliceFn");
var _compStore = require("./compStore");
var _storeAtoms = require("./storeAtoms");
const _assign = Object.assign;
const _items = {};
const _crStore = () => ({
    msItem: void 0
  }),
  _itemStore = (0, _storeApi.createStoreWithSelector)(_crStore),
  _selectMsItem = state => state.msItem,
  [_set] = (0, _storeApi.getStoreApi)(_itemStore);
const useMsItem = (0, _storeApi.fCrUse)(_itemStore, _selectMsItem);
exports.useMsItem = useMsItem;
const _loadItemCompleted = _ref => {
    let {
      news,
      itemConf
    } = _ref;
    if (news) {
      const r = (0, _NewsSliceFn.loadItemCompletedImpl)(_items, news);
      _set({
        msItem: r
      });
    }
    (0, _storeAtoms.setLoadingComplete)();
  },
  _loadItemFailed = option => {
    (0, _compStore.showAlertDialog)(option);
    (0, _storeAtoms.setLoadingFailed)();
  };
const loadItem = function (option) {
  if (option === void 0) {
    option = {};
  }
  const {
      itemConf,
      loadId
    } = option,
    {
      apiKey,
      adapter,
      api,
      msgErr
    } = _RouterApiConf.default.getApiConf(loadId || 'N');
  if (apiKey) {
    (0, _compStore.showNewsPane)(itemConf);
    (0, _storeAtoms.setLoading)();
    _assign(option, {
      apiKey,
      adapter,
      api
    });
    (0, _loadNews.default)(option, _loadItemCompleted, _loadItemFailed);
  } else {
    _loadItemFailed({
      msg: msgErr
    });
  }
};
exports.loadItem = loadItem;
const removeItem = item => {
  (0, _NewsSliceFn.removeItemImpl)(_items, item);
};
exports.removeItem = removeItem;
const removeItems = paneId => {
  const r = (0, _NewsSliceFn.removeItemsImpl)(_items, paneId);
  _set({
    msItem: r
  });
};
exports.removeItems = removeItems;
const removeUnderItems = item => {
  const r = (0, _NewsSliceFn.removeUnderItemImpl)(_items, item);
  _set({
    msItem: r
  });
};
exports.removeUnderItems = removeUnderItems;
//# sourceMappingURL=itemStore.js.map