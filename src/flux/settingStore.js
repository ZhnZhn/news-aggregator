import { LoadType as LT } from '../conf/Type';

const _settings = Object.create(null)
, _fSetKey = (
  propName
) => (value) => {
  _settings[propName] = value
}
, settingStore = {
  exportSettingsFn: () => ({
    setAvKey: _fSetKey(LT.AV),
    setFmpKey: _fSetKey(LT.FMP),
    setNewsKey: _fSetKey(LT.NEWS),
    setTheNewsKey: _fSetKey(LT.TNEWS),
    setWebzKey: _fSetKey(LT.WEBZ)
  }),

  getAvKey: () => _settings[LT.AV],  
  getFmpKey: () => _settings[LT.FMP],
  getNewsKey: () => _settings[LT.NEWS],
  getTheNewsKey: () => _settings[LT.TNEWS],
  getWebzKey: () => _settings[LT.WEBZ]
}

export default settingStore
