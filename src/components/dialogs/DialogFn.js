import { getItemValue } from '../zhn-m-input/OptionFn';

export const SYMBOL_INPUT_PROPS = {
  maxLength: '10',
  inputStyle: {
    textTransform: 'uppercase'
  },
  autoCapitalize: 'characters'
}

const _crObject = Object.create
, _getId = arrConfig => arrConfig[1]
, _getDfValue = arrConfig => arrConfig[0] === 's'
   ? getItemValue(arrConfig[4])
   //_type === 't'
   : arrConfig[3];

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
