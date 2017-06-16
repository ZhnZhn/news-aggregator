import React from 'react'

import ComponentActions, {TYPES as CA } from '../actions/ComponentActions'
import NewsActions, { TYPES as NA } from '../actions/NewsActions'

import RouterDialog from '../../components/dialogs/RouterDialog'
import RouterPane from '../../components/panes/RouterPane'

const showNewsPane = ComponentActions.showNewsPane;
const closeNewsPane = ComponentActions.closeNewsPane;
const loadNews = NewsActions.loadNews;

const Factory = {
  createDialog : (itemConf) => {
    const { type, dialogType, dialogProps } = itemConf
        , El = RouterDialog.getElement(dialogType);
    return React.createElement(El, {
      key: type,
      type: type,
      itemConf: itemConf,
      ...dialogProps,
      onShow: showNewsPane.bind(null, itemConf),
      onLoad: loadNews
    });
  },

  createNewsPane : (itemConf, store) => {
    const { type, paneType, paneCaption, paneId } = itemConf
        , { Pane, Item } = RouterPane.getElement(paneType);
    console.log(paneType)
    return React.createElement(Pane, {
      key: type,
      id: paneId,
      paneCaption,
      store,
      Item,
      addAction: NA.LOAD_NEWS_COMPLETED,
      showAction: CA.SHOW_NEWS_PANE,
      toggleAction: CA.TOGGLE_NEWS_PANE,
      onRemoveItems: NewsActions.removeAllNews.bind(null, paneId),
      onRemoveUnder: NewsActions.removeUnderNews,
      onCloseItem: NewsActions.removeNews,
      onClose: closeNewsPane.bind(null, itemConf)
    });
  }
}

export default Factory
