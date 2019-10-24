
import DialogType1 from './DialogType1'
import WebhoseQuery from './WebhoseQueryDialog'
import WebhoseBrodcast from './WebhoseBrodcastDialog'
import StackTagged from './StackTaggedDialog'
import StackSearch from './StackSearchDialog'
import IexNews from './IexNewsDialog'
import NewsApiSearch from './NewsApiSearchDialog'
import NewsApiTop from './NewsApiTopDialog'

const R = {
  DEFAULT: DialogType1,
  DialogType1,
  WebhoseQuery, WebhoseBrodcast,
  StackTagged, StackSearch,
  IexNews,
  NewsApiSearch, NewsApiTop
}

const RouterDialog = {
  getElement: (type) => {
   return R[type] || R.DEFAULT;
  }
}

export default RouterDialog
