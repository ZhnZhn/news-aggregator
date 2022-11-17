
export const getPaneCaption = (
  itemConf
) => (itemConf || {}).paneCaption

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption
