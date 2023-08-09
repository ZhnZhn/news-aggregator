import {
  createDialog,
  createNewsPane
} from '../logic/Factory';

//NewsDialogFn
export const showNewsDialog = (
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
export const showNewsPane = (
  slice,
  itemConf,
  store
) => {
  const { type } = itemConf;
  if (slice[type]){
    return { id: itemConf.paneId };
  } else {
    const Comp = createNewsPane(itemConf, store)
    slice[type] = true;
    return { Comp };
  }
}

export const toggleNewsPane = (
  itemConf
) => ({
  id: itemConf.paneId
})
