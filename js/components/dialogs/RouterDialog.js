'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DialogType = require('./DialogType1');

var _DialogType2 = _interopRequireDefault(_DialogType);

var _WebhoseQueryDialog = require('./WebhoseQueryDialog');

var _WebhoseQueryDialog2 = _interopRequireDefault(_WebhoseQueryDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var R = {
  DEFAULT: _DialogType2.default,
  DialogType1: _DialogType2.default,
  WebhoseQuery: _WebhoseQueryDialog2.default
};

var RouterDialog = {
  getElement: function getElement(type) {
    var El = R[type];
    if (El) {
      return R[type];
    } else {
      return R.DEFAULT;
    }
  }
};

exports.default = RouterDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\RouterDialog.js.map