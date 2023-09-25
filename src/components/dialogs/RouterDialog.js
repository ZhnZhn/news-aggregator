import DialogType1 from './DialogType1';
import DialogType2 from './DialogType2';
import WebzQuery from './WebzQueryDialog';
import WebzCountry from './WebzCountryDialog';
import StackTagged from './StackTaggedDialog';
import StackSearch from './StackSearchDialog';
import NewsApiSearch from './NewsApiSearchDialog';
import NewsApiTop from './NewsApiTopDialog';
import TheNewsApiSearch from './TheNewsApiSearchDialog';
import TheNewsApiTop from './TheNewsApiTopDialog';
import RedditTop from './RedditTopDialog';

const R = {
  DF: DialogType1,
  DialogType1,
  DialogType2,
  WebzQuery,
  WebzCountry,
  StackTagged,
  StackSearch,
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
