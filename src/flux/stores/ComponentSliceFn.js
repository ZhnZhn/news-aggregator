import {
  createDialog,
  createNewsPane
} from '../logic/Factory';

//NewsDialogFn
export const showDialogImpl = (
  slice,
  itemConf
) => {
  const { type } = itemConf;
  if (slice[type]){
    return { key:type };
  } else {
    const Comp = createDialog(itemConf);
    slice[type] = true
    return { key:type, Comp };
  }
}

//NewsPaneFn
export const showPaneImpl = (
  slice,
  itemConf,
  useMsPane,
  store
) => {
  const { type } = itemConf;
  if (slice[type]){
    return { id: itemConf.paneId };
  } else {
    const Comp = createNewsPane(itemConf, useMsPane, store)
    slice[type] = true;
    return { Comp };
  }
}
