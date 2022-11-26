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
 .reduce((r, arrConfig) => {
    r[0][_getId(arrConfig)] = _getDfValue(arrConfig)
    r[1].push({
      id: arrConfig[1],
      caption: arrConfig[2],
      df: !!arrConfig[5]
    })
    r[2][arrConfig[1]] = !!arrConfig[5]
    return r;
 //dfInputs, toggles, isInputs
 }, [_crObject(null), [], _crObject(null)]);

 export const getPaneCaption = (
  itemConf
) => (itemConf || {}).paneCaption

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption
