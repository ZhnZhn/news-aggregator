import {
  CRYPTO_COMPARE,
  COIN_STATS,
  MESSARI,
  IEX_CLOUD,
  FMP_LONG,
  ALPHA_VANTAGE,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO,
  REDDIT,
  DEV_TO,
  STACK_OVERFLOW
} from '../../conf/ProviderNames';

import QUERY from '../../conf/NewsQuery';

import { showDialog } from '../../flux/compStore';
import { bindTo } from '../uiApi';

const _fOnClick = (
  onClose,
  id
) => (evt) => {
  showDialog(id)
  onClose(evt)
};

let _menuQuery;
const crMenuQuery = (onClose) => {
  if (!_menuQuery) {
    const _crOnClick = bindTo(
      _fOnClick,
      onClose
    );
    _menuQuery = [
      {
        t: 'Blockchain',
        items: [
          [CRYPTO_COMPARE, _crOnClick(QUERY.CRYPTO_COMPARE)],
          [COIN_STATS, _crOnClick(QUERY.COIN_STATS)],
          [MESSARI, _crOnClick(QUERY.MESSARI)]
        ]
      },{
        t: "Stock Market",
        items: [
          [`${ALPHA_VANTAGE}: Sentiment`, _crOnClick(QUERY.AV)],
          [IEX_CLOUD, _crOnClick(QUERY.IEX)],
          [FMP_LONG, _crOnClick(QUERY.FMP)]
        ]
      },{
        t: "General News",
        items: [
          [`${NEWS_API_LONG}: Search`, _crOnClick(QUERY.NEWS_SEARCH)],
          [`${NEWS_API_LONG}: Top By`, _crOnClick(QUERY.NEWS_TOP)],
          '1',
          [`${THE_NEWS_API}: Search`, _crOnClick(QUERY.THE_NEWS_SEARCH)],
          [`${THE_NEWS_API}: Top By`, _crOnClick(QUERY.THE_NEWS_TOP)],
          '2',
          [`${WEBZ_IO}: News, Blogs`, _crOnClick(QUERY.WEBZ)],
          [`${WEBZ_IO}: By Country, Topic`, _crOnClick(QUERY.WEBZ_COUNTRY)]
        ]
      },{
        t: "Miscellaneous",
        items: [
          [DEV_TO, _crOnClick(QUERY.DEV_TO)],
          '1',
          [`${STACK_OVERFLOW}: Tagged`, _crOnClick(QUERY.STACK_TAGGED)],
          [`${STACK_OVERFLOW}: Search`, _crOnClick(QUERY.STACK_SEARCH)],
          '2',
          [`${REDDIT}: Top By`, _crOnClick(QUERY.REDDIT)]
        ]
      }
    ]
  }
  return _menuQuery;
};

export default crMenuQuery
