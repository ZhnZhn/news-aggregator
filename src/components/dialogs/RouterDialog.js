import DialogType1 from './DialogType1';
import DialogType2 from './DialogType2';
import WebzQuery from './WebzQueryDialog';
import WebzCountry from './WebzCountryDialog';
import DevToTop from './DevToTopDialog';
import StackTagged from './StackTaggedDialog';
import StackSearch from './StackSearchDialog';
import IexNews from './IexNewsDialog';
import FmpNews from './FmpNewsDialog';
import NewsApiSearch from './NewsApiSearchDialog';
import NewsApiTop from './NewsApiTopDialog';
import TheNewsApiSearch from './TheNewsApiSearchDialog';
import TheNewsApiTop from './TheNewsApiTopDialog';
import MessariNews from './MessariDialog';
import RedditTop from './RedditTopDialog';

const R = {
  DF: DialogType1,
  DialogType1,
  DialogType2,
  WebzQuery,
  WebzCountry,
  DevToTop,
  StackTagged,
  StackSearch,
  MessariNews,
  IexNews,
  FmpNews,
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
