"use strict";

exports.__esModule = true;
exports.default = void 0;
var _LoadType = require("../conf/LoadType");
const _settings = Object.create(null),
  _fSetKey = propName => value => {
    _settings[propName] = value;
  },
  settingStore = {
    exportSettingsFn: () => ({
      setAvKey: _fSetKey(_LoadType.LT_AV),
      setFmpKey: _fSetKey(_LoadType.LT_FMP),
      setMsvKey: _fSetKey(_LoadType.LT_MSV),
      setNewsKey: _fSetKey(_LoadType.LT_NEWS),
      setTheNewsKey: _fSetKey(_LoadType.LT_TNEWS),
      setWebzKey: _fSetKey(_LoadType.LT_WEBZ)
    }),
    getAvKey: () => _settings[_LoadType.LT_AV],
    getFmpKey: () => _settings[_LoadType.LT_FMP],
    getMsvKey: () => _settings[_LoadType.LT_MSV],
    getNewsKey: () => _settings[_LoadType.LT_NEWS],
    getTheNewsKey: () => _settings[_LoadType.LT_TNEWS],
    getWebzKey: () => _settings[_LoadType.LT_WEBZ]
  };
var _default = exports.default = settingStore;
//# sourceMappingURL=settingStore.js.map