import {
  NAT_LOAD_NEWS_COMPLETED,
  NAT_UPDATE_NEWS,
  NewsActions
} from '../actions/NewsActions';

import {
  showNewsPane
} from '../compStore';

import RouterDialog from '../../components/dialogs/RouterDialog';
import RouterPane from '../../components/panes/RouterPane';

const loadNews = NewsActions.loadNews;

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
  useMsPane,
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
      useMsPane={useMsPane}
      onRemoveItems={NewsActions.removeAllNews.bind(null, paneId)}
      onRemoveUnder={NewsActions.removeUnderNews}
      onCloseItem={NewsActions.removeNews}
    />
  );
}
