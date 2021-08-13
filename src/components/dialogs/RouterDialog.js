
import DialogType1 from './DialogType1';
import WebhoseQuery from './WebhoseQueryDialog';
import StackTagged from './StackTaggedDialog';
import StackSearch from './StackSearchDialog';
import IexNews from './IexNewsDialog';
import FmpNews from './FmpNewsDialog';
import NewsApiSearch from './NewsApiSearchDialog';
import NewsApiTop from './NewsApiTopDialog';
import CryptoCompareNews from './CryptoCompareNewsDialog';
import CoinStatsNews from './CoinStatsDialog';
import MessariNews from './MessariDialog';

const R = {
  DEFAULT: DialogType1,
  DialogType1,
  WebhoseQuery,
  StackTagged, StackSearch,
  CryptoCompareNews,
  CoinStatsNews,
  MessariNews,
  IexNews,
  FmpNews,
  NewsApiSearch, NewsApiTop
}

const RouterDialog = {
  getElement: (type) => {
   return R[type] || R.DEFAULT;
  }
};

export default RouterDialog
