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
    setPlgKey: _fSetKey(LT.PLG),
    setNewsKey: _fSetKey(LT.NEWS),
    setTheNewsKey: _fSetKey(LT.TNEWS),
    setWebzKey: _fSetKey(LT.WEBZ)
  }),

  getAvKey: () => _settings[LT.AV],
  getFmpKey: () => _settings[LT.FMP],
  getPlgKey: () => _settings[LT.PLG],
  getNewsKey: () => _settings[LT.NEWS],
  getTheNewsKey: () => _settings[LT.TNEWS],
  getWebzKey: () => _settings[LT.WEBZ]
}

export default settingStore
