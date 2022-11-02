import { LoadType as LT } from '../../conf/Type'

const _settings = {};

const _fSetKey = (propName) => (value) => {
  _settings[propName] = value
};

const SettingSlice = {
  exportSettingsFn(){
    return {
      setIexKey: _fSetKey(LT.IEX),
      setFmpKey: _fSetKey(LT.FMP),
      setNewsKey: _fSetKey(LT.NEWS),
      setTheNewsKey: _fSetKey(LT.TNEWS),
      setWebzKey: _fSetKey(LT.WEBZ)
    };
  },
  getIexKey(){
    return _settings[LT.IEX];
  },
  getFmpKey(){
    return _settings[LT.FMP];
  },
  getNewsKey(){
    return _settings[LT.NEWS];
  },
  getTheNewsKey(){
    return _settings[LT.TNEWS]
  },
  getWebzKey(){
    return _settings[LT.WEBZ];
  }
}

export default SettingSlice
