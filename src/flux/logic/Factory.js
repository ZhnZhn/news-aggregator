import {
  createElement
} from '../../components/uiApi';

import ComponentActions, {
  CAT_SHOW_NEWS_PANE,
  CAT_TOGGLE_NEWS_PANE
} from '../actions/ComponentActions'
import NewsActions, {
  NAT_LOAD_NEWS_COMPLETED,
  NAT_UPDATE_NEWS
} from '../actions/NewsActions'

import RouterDialog from '../../components/dialogs/RouterDialog'
import RouterPane from '../../components/panes/RouterPane'

const showNewsPane = ComponentActions.showNewsPane;
const closeNewsPane = ComponentActions.closeNewsPane;
const loadNews = NewsActions.loadNews;

const Factory = {
  createDialog: (itemConf) => {
    const {
      type,
      dialogType,
      dialogProps
    } = itemConf
    , El = RouterDialog.getElement(dialogType);
    return createElement(El, {
      key: type,
      type: type,
      itemConf: itemConf,
      ...dialogProps,
      onShow: showNewsPane.bind(null, itemConf),
      onLoad: loadNews
    });
  },

  createNewsPane: (itemConf, store) => {
    const {
      type,
      paneType,
      paneCaption,
      paneId
    } = itemConf
    , {
      Pane,
      Item
    } = RouterPane.getElement(paneType);
    return createElement(Pane, {
      key: type,
      id: paneId,
      paneCaption,
      store,
      Item,
      addAction: NAT_LOAD_NEWS_COMPLETED,
      updateAction: NAT_UPDATE_NEWS,
      showAction: CAT_SHOW_NEWS_PANE,
      toggleAction: CAT_TOGGLE_NEWS_PANE,
      onRemoveItems: NewsActions.removeAllNews.bind(null, paneId),
      onRemoveUnder: NewsActions.removeUnderNews,
      onCloseItem: NewsActions.removeNews,
      onClose: closeNewsPane.bind(null, itemConf)
    });
  }
}

export default Factory
