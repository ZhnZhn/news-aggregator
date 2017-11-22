
import Store from '../stores/Store'

import NewsApi from '../../api/NewsApi'
import NewsApiAdapter from '../../adapters/NewsApiAdapter'
import WebhoseApi from '../../api/WebhoseApi'
import WebhoseAdapter from '../../adapters/WebhoseAdapter'
import StackOverflowApi from '../../api/StackOverflowApi'
import StackOverflowAdapter from '../../adapters/StackOverflowAdapter'
import IexApi from '../../api/IexApi'
import IexAdapter from '../../adapters/IexAdapter' 

const MSG_ERR_TAIL = 'Key is not set. \nPlease, set and try again.';
const MSG_ERR_DF = 'Unknow news API provider';

const RouterApiConf = {
  getApiConf: (id) => {
    switch(id){
      case 'N':
        return {
          apiKey: Store.getNewsKey(),
          api: NewsApi,
          adapter: NewsApiAdapter,
          msgErr: `NewsApi ${MSG_ERR_TAIL}`
        };
      case 'W':
        return {
          apiKey: Store.getWebhoseKey(),
          api: WebhoseApi,
          adapter: WebhoseAdapter,
          msgErr: `Webhose.io API ${MSG_ERR_TAIL}`
        };
      case 'SO':
        return {
          apiKey: true,
          api: StackOverflowApi,
          adapter: StackOverflowAdapter,
          msgErr: `StackOverflowApi API ${MSG_ERR_TAIL}`
        }
      case 'IEX':
         return {
           apiKey: true,
           api: IexApi,
           adapter: IexAdapter,
           msgErr: `IEX API ${MSG_ERR_TAIL}`
         }
      default:
        return {
          apiKey: undefined,
          msgErr: MSG_ERR_DF
        };
    }
  }
}

export default RouterApiConf
