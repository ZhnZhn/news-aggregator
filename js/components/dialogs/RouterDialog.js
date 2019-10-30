'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogType = require('./DialogType1');

var _DialogType2 = _interopRequireDefault(_DialogType);

var _WebhoseQueryDialog = require('./WebhoseQueryDialog');

var _WebhoseQueryDialog2 = _interopRequireDefault(_WebhoseQueryDialog);

var _WebhoseBrodcastDialog = require('./WebhoseBrodcastDialog');

var _WebhoseBrodcastDialog2 = _interopRequireDefault(_WebhoseBrodcastDialog);

var _StackTaggedDialog = require('./StackTaggedDialog');

var _StackTaggedDialog2 = _interopRequireDefault(_StackTaggedDialog);

var _StackSearchDialog = require('./StackSearchDialog');

var _StackSearchDialog2 = _interopRequireDefault(_StackSearchDialog);

var _IexNewsDialog = require('./IexNewsDialog');

var _IexNewsDialog2 = _interopRequireDefault(_IexNewsDialog);

var _NewsApiSearchDialog = require('./NewsApiSearchDialog');

var _NewsApiSearchDialog2 = _interopRequireDefault(_NewsApiSearchDialog);

var _NewsApiTopDialog = require('./NewsApiTopDialog');

var _NewsApiTopDialog2 = _interopRequireDefault(_NewsApiTopDialog);

var _CryptoCompareNewsDialog = require('./CryptoCompareNewsDialog');

var _CryptoCompareNewsDialog2 = _interopRequireDefault(_CryptoCompareNewsDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DEFAULT: _DialogType2.default,
  DialogType1: _DialogType2.default,
  WebhoseQuery: _WebhoseQueryDialog2.default, WebhoseBrodcast: _WebhoseBrodcastDialog2.default,
  StackTagged: _StackTaggedDialog2.default, StackSearch: _StackSearchDialog2.default,
  CryptoCompareNews: _CryptoCompareNewsDialog2.default,
  IexNews: _IexNewsDialog2.default,
  NewsApiSearch: _NewsApiSearchDialog2.default, NewsApiTop: _NewsApiTopDialog2.default
};

var RouterDialog = {
  getElement: function getElement(type) {
    return R[type] || R.DEFAULT;
  }
};

exports.default = RouterDialog;
//# sourceMappingURL=RouterDialog.js.map