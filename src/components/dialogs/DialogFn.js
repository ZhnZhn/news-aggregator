import {
  crLazyValue,
  toFirstUpperCase
} from '../uiApi';

import {
  INPUT_TYPE_SELECT,
  INPUT_TYPE_SUGGEST,
  INPUT_TYPE_TEXT_FIELD
} from '../zhn-inputs/InputTypes';
import {
  getItemValue
} from '../zhn-m-input/OptionFn';


export const crInputProps = (
  maxLength='10'
) => ({
  maxLength,
  autoCapitalize: 'characters',
  inputStyle: {
    textTransform: 'uppercase'
  }
})

const _crObject = Object.create
, _getId = arrConfig => arrConfig[1]
, _getDfValue = (
  arrConfig
) => {
  const _type = arrConfig[0];
  return _type === INPUT_TYPE_SELECT || _type === INPUT_TYPE_SUGGEST
    ? getItemValue(arrConfig[4])
    : _type === INPUT_TYPE_TEXT_FIELD
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

const _fGetByPropName = (
  propName
) => (obj) => (obj || {})[propName];

export const getPaneCaption = _fGetByPropName("paneCaption")
export const getLoadId = _fGetByPropName("type")

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption

export const crTextFieldCaption = (
  caption,
  dfValue
) => `${caption} (Default: ${dfValue})`

const crInputCaption = (
  token
) => toFirstUpperCase(token)

export const crTextFieldConfig = (
  id, {
    caption,
    dfValue,
    inputProps,
    is
  }
) => [
  INPUT_TYPE_TEXT_FIELD,
  id,
  caption || crInputCaption(id),
  dfValue,
  inputProps,
  is
]

const _fCrInputConfig = (
  inputType
) => (
  id,
  options, {
  caption,
  dfOption,
  is
}={}) => [
  inputType,
  id,
  caption || crInputCaption(id),
  options,
  dfOption || options[0],
  is
];

export const crInputSelectConfig = _fCrInputConfig(INPUT_TYPE_SELECT)
export const crInputSuggestConfig = _fCrInputConfig(INPUT_TYPE_SUGGEST)

export const fGetDialogConfig = (
  crInputConfigs
) => crLazyValue(() => {
  const INPUT_CONFIGS = crInputConfigs();
  return [
    INPUT_CONFIGS,
    ...crDfInputs(INPUT_CONFIGS)
  ];
})
