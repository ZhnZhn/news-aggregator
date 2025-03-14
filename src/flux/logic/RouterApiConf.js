import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  FMP,
  ALPHA_VANTAGE,
  PLG_IO,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  REDDIT,
  DEV_TO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';
import { isFn  } from '../../utils/isTypeFn';

import settingStore from '../settingStore';

import Adapter from '../../adapters/Adapters';
import Api from '../../api/Api';

const MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
const MSG_ERR_DF = 'Unknow news API provider';

const _crConf = (
  type,
  msgErr,
  apiKey
) => ({
   apiKey: isFn(apiKey) ? apiKey() : true,
   api: Api[type],
   adapter: Adapter[type],
   msgErr
});


const _crNewsConf = () => ({
  apiKey: settingStore.getNewsKey(),
  adapter: Adapter.News,
  msgErr: `${NEWS_API_LONG} ${MSG_ERR_TAIL}`
});

const _crTheNewsConf = () => ({
  apiKey: settingStore.getTheNewsKey(),
  adapter: Adapter.TheNews,
  msgErr: `${THE_NEWS_API} ${MSG_ERR_TAIL}`
});

const RouterApiConf = {
  getApiConf: (id) => {
    switch(id){
      case 'N':
        return {
          ..._crNewsConf(),
          api: Api.News
        };
      case 'NS':
        return {
          ..._crNewsConf(),
          api: Api.NewsSearch
        };
      case 'NT':
        return {
          ..._crNewsConf(),
          api: Api.NewsTop
        };
      case 'TNS':
        return {
          ..._crTheNewsConf(),
          api: Api.TheNewsSearch
        };
      case 'TNT':
        return {
          ..._crTheNewsConf(),
          api: Api.TheNewsTop
        };
      case 'W':
        return _crConf(
          'Webz',
          `${WEBZ_IO} API ${MSG_ERR_TAIL}`,
          settingStore.getWebzKey
        );
      case 'RD':
        return _crConf(
          'Reddit',
          `${REDDIT} API ${MSG_ERR_TAIL}`
        );
      case 'DT':
        return _crConf(
          'DevTo',
          `${DEV_TO} API ${MSG_ERR_TAIL}`
        );
      case 'SO':
        return _crConf(
          'StackOverflow',
          `${STACK_OVERFLOW} API ${MSG_ERR_TAIL}`
        );
     case 'FMP':
        return _crConf(
          'Fmp',
          `${FMP} API ${MSG_ERR_TAIL}`,
          settingStore.getFmpKey
        );
    case 'PLG':
       return _crConf(
         'Plg',
         `${PLG_IO} API ${MSG_ERR_TAIL}`,
         settingStore.getPlgKey
       );
     case 'AV':
       return _crConf(
         'Av',
         `${ALPHA_VANTAGE} API ${MSG_ERR_TAIL}`,
         settingStore.getAvKey
       );
     case 'CCN':
        return _crConf(
          'CryptoCompare',
          `${CRYPTO_COMPARE} News API ${MSG_ERR_TAIL}`
        );
      case 'CS':
        return _crConf(
          'CoinStats',
          `${COIN_STATS} API ${MSG_ERR_TAIL}`
        );
      case 'MS':
        return _crConf(
          'Messari',
          `${MESSARI} Blockchain News API ${MSG_ERR_TAIL}`
        );
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
};

export default RouterApiConf
