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

//BrowserFn
export const createResult = (
  slice,
  itemConf
) => {
  const { browserId } = itemConf;
  return {
    id: browserId,
    data: slice[browserId]
  };
}

export const updateBadge = (
  slice,
  itemConf,
  option={ isOpen: true }
) => {
  const { browserId, type } = itemConf;
  if (!slice[browserId]){
    slice[browserId] = {}
  }
  slice[browserId][type] = {
    ...slice[browserId][type],
    ...option
  }
  return {
    id: browserId,
    data: slice[browserId]
  };
}

export const toggleBadge = (
  slice,
  itemConf
) => {
   const { browserId, type } = itemConf;
   slice[browserId][type].isOpen = !slice[browserId][type].isOpen
   return {
     id: browserId,
     data: slice[browserId]
   };
}

export const removeBadges = (
  slice,
  itemConf
) => {
  const { browserId } = itemConf;
  slice[browserId] = {}
  return {
    id: browserId,
    data: slice[browserId]
  };
}
