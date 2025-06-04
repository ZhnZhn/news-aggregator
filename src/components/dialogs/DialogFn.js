import {
  toFirstUpperCase
} from '../../utils';
import {
  crLazyValue
} from '../../utils/crLazyValue';

import {
  isStr
} from '../../utils/isTypeFn';
import {
  getFromDate,
  getToDate
} from '../../utils/dt';

import {
  crSelectOptions
} from '../zhn-m-input/OptionFn';

import {
  INPUT_TYPE_SELECT,
  INPUT_TYPE_SUGGEST,
  INPUT_TYPE_TEXT_FIELD,
  INPUT_TYPE_FROM_DATE
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
  : arrConfig[5] === true;

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

const _getPaneCaption = _fGetByPropName("paneCaption")
const _getCaption = _fGetByPropName("caption")
export const getCaption = (
  itemConf
) => _getCaption(itemConf) || _getPaneCaption(itemConf)
export const getPaneCaption = _fGetByPropName("paneCaption")

const _getType = _fGetByPropName("type");
const _getLoadId = _fGetByPropName("loadId");
export const getLoadId = (
  itemConf
) => _getLoadId(itemConf) || _getType(itemConf)

export const getDialogCaption = (
  itemConf
) => ((itemConf || {}).dialogProps || {}).caption

export const crTextFieldCaption = (
  caption,
  dfValue
) => dfValue
  ? `${caption} (Default: ${dfValue})`
  : caption

const _crInputCaption = (
  caption,
  id
) => caption || toFirstUpperCase(id)

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
  _crInputCaption(caption, id),
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
  dfIndex,
  is,
  isInput,
  isNotFirstUpperCase
}={}) => {
  const _options = isStr(options[0])
   ? crSelectOptions(options, isNotFirstUpperCase)
   : options
  return [
    inputType,
    id,
    _crInputCaption(caption, id),
    _options,
    dfOption || _options[dfIndex || 0],
    is,
    isInput
  ];
}

export const crInputSelectConfig = _fCrInputConfig(INPUT_TYPE_SELECT)
export const crInputSuggestConfig = _fCrInputConfig(INPUT_TYPE_SUGGEST)

const INITIAL_FROM_DATE = getFromDate(1)
, INITIAL_TO_DATE = getToDate();
export const crFromToDateConfig = (
  id,
  fromDate,
  toDate
) => [
  INPUT_TYPE_FROM_DATE,
  id,
  'From To Date',
  fromDate || INITIAL_FROM_DATE,
  toDate || INITIAL_TO_DATE
]

export const fGetDialogConfig = (
  crInputConfigs
) => crLazyValue(() => {
  const INPUT_CONFIGS = crInputConfigs();
  return [
    INPUT_CONFIGS,
    ...crDfInputs(INPUT_CONFIGS)
  ];
})
