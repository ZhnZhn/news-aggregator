import {
  bindTo
} from '../storeApi';
import {
  showNewsPane
} from '../compStore';
import {
  useMsItem,
  loadItem,
  removeItem,
  removeItems,
  removeUnderItems
} from '../itemStore';

import RouterDialog from '../../components/dialogs/RouterDialog';
import RouterPane from '../../components/panes/RouterPane';

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
      onShow={bindTo(showNewsPane, itemConf)}
      onLoad={loadItem}
    />
  );
}

export const createNewsPane = (
  itemConf,
  useMsPane
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
      Item={CompItem}
      useMsPane={useMsPane}
      useMsItem={useMsItem}
      onRemoveItems={bindTo(removeItems, paneId)}
      onRemoveUnder={removeUnderItems}
      onCloseItem={removeItem}
    />
  );
}
