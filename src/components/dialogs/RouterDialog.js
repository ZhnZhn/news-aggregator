import DialogType1 from './DialogType1';
import WebzQuery from './WebzQueryDialog';
import WebzCountry from './WebzCountryDialog';
import StackTagged from './StackTaggedDialog';
import StackSearch from './StackSearchDialog';
import IexNews from './IexNewsDialog';
import FmpNews from './FmpNewsDialog';
import AvSentiments from './AvSentimentsDialog';
import NewsApiSearch from './NewsApiSearchDialog';
import NewsApiTop from './NewsApiTopDialog';
import TheNewsApiSearch from './TheNewsApiSearchDialog';
import TheNewsApiTop from './TheNewsApiTopDialog';
import CryptoCompareNews from './CryptoCompareNewsDialog';
import CoinStatsNews from './CoinStatsDialog';
import MessariNews from './MessariDialog';
import RedditTop from './RedditTopDialog';

const R = {
  DF: DialogType1,
  DialogType1,
  WebzQuery,
  WebzCountry,
  StackTagged,
  StackSearch,
  CryptoCompareNews,
  CoinStatsNews,
  MessariNews,
  IexNews,
  FmpNews,
  AvSentiments,
  NewsApiSearch,
  NewsApiTop,
  TheNewsApiSearch,
  TheNewsApiTop,
  RedditTop
}

const RouterDialog = {
  getElement: (type) => R[type] || R.DF
};

export default RouterDialog
