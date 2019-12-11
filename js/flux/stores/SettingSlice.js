"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _Type = require("../../conf/Type");

var _settings = {};

var _fSetKey = function _fSetKey(propName) {
  return function (value) {
    _settings[propName] = value;
  };
};

var SettingSlice = {
  exportSettingsFn: function exportSettingsFn() {
    return {
      setIexKey: _fSetKey(_Type.LoadType.IEX),
      setNewsKey: _fSetKey(_Type.LoadType.NEWS),
      setWebhoseKey: _fSetKey(_Type.LoadType.WEBHOSE)
    };
  },
  getIexKey: function getIexKey() {
    return _settings[_Type.LoadType.IEX];
  },
  getNewsKey: function getNewsKey() {
    return _settings[_Type.LoadType.NEWS];
  },
  getWebhoseKey: function getWebhoseKey() {
    return _settings[_Type.LoadType.WEBHOSE];
  }
};
var _default = SettingSlice;
exports["default"] = _default;
//# sourceMappingURL=SettingSlice.js.map