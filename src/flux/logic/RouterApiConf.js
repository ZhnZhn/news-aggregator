
import Store from '../stores/Store'

import Adapter from '../../adapters/Adapters'
import Api from '../../api/Api'

const MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
const MSG_ERR_DF = 'Unknow news API provider';

const RouterApiConf = {
  getApiConf: (id) => {
    switch(id){
      case 'N':
        return {
          apiKey: Store.getNewsKey(),
          api: Api.News,
          adapter: Adapter.News,
          msgErr: `NewsApi ${MSG_ERR_TAIL}`
        };
      case 'NS':
        return {
          apiKey: Store.getNewsKey(),
          api: Api.NewsSearch,
          adapter: Adapter.News,
          msgErr: `NewsApi ${MSG_ERR_TAIL}`
        };
      case 'NT':
        return {
          apiKey: Store.getNewsKey(),
          api: Api.NewsTop,
          adapter: Adapter.News,
          msgErr: `NewsApi ${MSG_ERR_TAIL}`
        };
      case 'TNT':
        return {
          apiKey: Store.getTheNewsKey(),
          api: Api.TheNewsTop,
          adapter: Adapter.TheNews,
          msgErr: `TheNewsApi ${MSG_ERR_TAIL}`
        };
      case 'W':
        return {
          apiKey: Store.getWebzKey(),
          api: Api.Webz,
          adapter: Adapter.Webz,
          msgErr: `Webz.io API ${MSG_ERR_TAIL}`
        };
      case 'SO':
        return {
          apiKey: true,
          api: Api.StackOverflow,
          adapter: Adapter.StackOverflow,
          msgErr: `StackOverflowApi API ${MSG_ERR_TAIL}`
        };
      case 'IEX':
         return {
           apiKey: Store.getIexKey(),
           api: Api.Iex,
           adapter: Adapter.Iex,
           msgErr: `IEX Cloud API ${MSG_ERR_TAIL}`
         };
     case 'FMP':
        return {
          apiKey: Store.getFmpKey(),
          api: Api.Fmp,
          adapter: Adapter.Fmp,
          msgErr: `FMP API ${MSG_ERR_TAIL}`
        };
     case 'CCN':
        return {
          apiKey: true,
          api: Api.CryptoCompare,
          adapter: Adapter.CryptoCompare,
          msgErr: `CryptoCompare News API ${MSG_ERR_TAIL}`
        };
      case 'CS':
        return {
          apiKey: true,
          api: Api.CoinStats,
          adapter: Adapter.CoinStats,
          msgErr: `CoinStats API ${MSG_ERR_TAIL}`
        };
      case 'MS':
        return {
          apiKey: true,
          api: Api.Messari,
          adapter: Adapter.Messari,
          msgErr: `Messari Blockchain News API ${MSG_ERR_TAIL}`
        };
      default:
        return {
          msgErr: MSG_ERR_DF
        };
    }
  }
}

export default RouterApiConf
