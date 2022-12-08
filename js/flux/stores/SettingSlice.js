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
      setAvKey: _fSetKey(_Type.LoadType.AV),
      setIexKey: _fSetKey(_Type.LoadType.IEX),
      setFmpKey: _fSetKey(_Type.LoadType.FMP),
      setNewsKey: _fSetKey(_Type.LoadType.NEWS),
      setTheNewsKey: _fSetKey(_Type.LoadType.TNEWS),
      setWebzKey: _fSetKey(_Type.LoadType.WEBZ)
    };
  },
  getAvKey: function getAvKey() {
    return _settings[_Type.LoadType.AV];
  },
  getIexKey: function getIexKey() {
    return _settings[_Type.LoadType.IEX];
  },
  getFmpKey: function getFmpKey() {
    return _settings[_Type.LoadType.FMP];
  },
  getNewsKey: function getNewsKey() {
    return _settings[_Type.LoadType.NEWS];
  },
  getTheNewsKey: function getTheNewsKey() {
    return _settings[_Type.LoadType.TNEWS];
  },
  getWebzKey: function getWebzKey() {
    return _settings[_Type.LoadType.WEBZ];
  }
};
var _default = SettingSlice;
exports["default"] = _default;
//# sourceMappingURL=SettingSlice.js.map