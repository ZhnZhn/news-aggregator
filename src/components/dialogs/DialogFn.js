import { getItemValue } from '../zhn-m-input/OptionFn';

const _crObject = Object.create
, _getId = arrConfig => arrConfig[1]
, _getDfValue = arrConfig => getItemValue(arrConfig[4]);

export const crDfInputs = (
  inputConfigs
) => inputConfigs
 .reduce((dfInputs, arrConfig) => {
    dfInputs[_getId(arrConfig)] = _getDfValue(arrConfig)
    return dfInputs;
 }, _crObject(null))

export const getPaneCaption = (
  itemConf
) => (itemConf || {}).paneCaption

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption
