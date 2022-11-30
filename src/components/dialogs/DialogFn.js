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
, _getDfValue = (
  arrConfig
) => {
  const _type = arrConfig[0];
  return _type === 's'
    ? getItemValue(arrConfig[4])
    : _type === 't'
       ? arrConfig[3]
       : void 0;
}
, _hasShow = (
  inputConfigs,
  arrConfig
) => inputConfigs.length === 1
  ? true
  : arrConfig[arrConfig.length-1] === true
      ? true
      : false;

export const crDfInputs = (
  inputConfigs
) => inputConfigs
 .reduce((r, arrConfig) => {
    const _isShow = _hasShow(inputConfigs, arrConfig);
    r[0][_getId(arrConfig)] = _getDfValue(arrConfig)
    r[1].push({
      id: arrConfig[1],
      caption: arrConfig[2],
      df: _isShow
    })
    r[2][arrConfig[1]] = _isShow
    return r;
 //dfInputs, toggles, isInputs
 }, [_crObject(null), [], _crObject(null)]);

 export const getPaneCaption = (
  itemConf
) => (itemConf || {}).paneCaption

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption

export const crTextFieldCaption = (
  caption,
  dfValue
) => `${caption} (Default: ${dfValue})`
