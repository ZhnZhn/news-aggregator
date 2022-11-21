const _assign = Object.assign;

export const crDfInputs = (
  values
) => _assign(Object.create(null), values)

export const getPaneCaption = (
  itemConf
) => (itemConf || {}).paneCaption

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption
