import {
  LT_FMP,
  LT_AV,
  LT_MSV,
  LT_NEWS,
  LT_TNEWS,
  LT_WEBZ
} from '../conf/LoadType';

const _settings = Object.create(null)
, _fSetKey = (
  propName
) => (value) => {
  _settings[propName] = value
}
, settingStore = {
  exportSettingsFn: () => ({
    setAvKey: _fSetKey(LT_AV),
    setFmpKey: _fSetKey(LT_FMP),
    setMsvKey: _fSetKey(LT_MSV),
    setNewsKey: _fSetKey(LT_NEWS),
    setTheNewsKey: _fSetKey(LT_TNEWS),
    setWebzKey: _fSetKey(LT_WEBZ)
  }),

  getAvKey: () => _settings[LT_AV],
  getFmpKey: () => _settings[LT_FMP],
  getMsvKey: () => _settings[LT_MSV],
  getNewsKey: () => _settings[LT_NEWS],
  getTheNewsKey: () => _settings[LT_TNEWS],
  getWebzKey: () => _settings[LT_WEBZ]
}

export default settingStore
