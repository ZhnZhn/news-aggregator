"use strict";

exports.__esModule = true;
exports.default = void 0;
var _Type = require("../conf/Type");
const _settings = Object.create(null),
  _fSetKey = propName => value => {
    _settings[propName] = value;
  },
  settingStore = {
    exportSettingsFn: () => ({
      setAvKey: _fSetKey(_Type.LoadType.AV),
      setFmpKey: _fSetKey(_Type.LoadType.FMP),
      setNewsKey: _fSetKey(_Type.LoadType.NEWS),
      setTheNewsKey: _fSetKey(_Type.LoadType.TNEWS),
      setWebzKey: _fSetKey(_Type.LoadType.WEBZ)
    }),
    getAvKey: () => _settings[_Type.LoadType.AV],
    getFmpKey: () => _settings[_Type.LoadType.FMP],
    getNewsKey: () => _settings[_Type.LoadType.NEWS],
    getTheNewsKey: () => _settings[_Type.LoadType.TNEWS],
    getWebzKey: () => _settings[_Type.LoadType.WEBZ]
  };
var _default = exports.default = settingStore;
//# sourceMappingURL=settingStore.js.map