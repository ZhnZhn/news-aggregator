import {
  CAT_SHOW_NEWS_PANE,
  CAT_TOGGLE_NEWS_PANE,
  ComponentActions
} from '../actions/ComponentActions';
import {
  NAT_LOAD_NEWS_COMPLETED,
  NAT_UPDATE_NEWS,
  NewsActions
} from '../actions/NewsActions';

import RouterDialog from '../../components/dialogs/RouterDialog';
import RouterPane from '../../components/panes/RouterPane';

const showNewsPane = ComponentActions.showNewsPane
, closeNewsPane = ComponentActions.closeNewsPane
, loadNews = NewsActions.loadNews;

export const createDialog = (
  itemConf
) => {
  const {
    type,
    dialogType,
    dialogProps
  } = itemConf
  , El = RouterDialog.getElement(dialogType);
  return (
    <El
      key={type}
      type={type}
      itemConf={itemConf}
      {...dialogProps}
      onShow={showNewsPane.bind(null, itemConf)}
      onLoad={loadNews}
    />
  );
}

export const createNewsPane = (
  itemConf,
  store
) => {
  const {
    type,
    paneType,
    paneCaption,
    paneId
  } = itemConf
  , [
    CompPane,
    CompItem
  ] = RouterPane.getElement(paneType);
  return (
    <CompPane
      key={type}
      id={paneId}
      paneCaption={paneCaption}
      store={store}
      Item={CompItem}
      addAction={NAT_LOAD_NEWS_COMPLETED}
      updateAction={NAT_UPDATE_NEWS}
      showAction={CAT_SHOW_NEWS_PANE}
      toggleAction={CAT_TOGGLE_NEWS_PANE}
      onRemoveItems={NewsActions.removeAllNews.bind(null, paneId)}
      onRemoveUnder={NewsActions.removeUnderNews}
      onCloseItem={NewsActions.removeNews}
      onClose={closeNewsPane.bind(null, itemConf)}
    />
  );
}
