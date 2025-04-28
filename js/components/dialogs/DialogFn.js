"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getLoadId = exports.getDialogCaption = exports.getCaption = exports.fGetDialogConfig = exports.crTextFieldConfig = exports.crTextFieldCaption = exports.crInputSuggestConfig = exports.crInputSelectConfig = exports.crInputProps = exports.crFromToDateConfig = exports.crDfInputs = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _dt = require("../../utils/dt");
var _uiApi = require("../uiApi");
var _OptionFn = require("../zhn-m-input/OptionFn");
var _InputTypes = require("../zhn-inputs/InputTypes");
const crInputProps = function (maxLength) {
  if (maxLength === void 0) {
    maxLength = '10';
  }
  return {
    maxLength,
    autoCapitalize: 'characters',
    inputStyle: {
      textTransform: 'uppercase'
    }
  };
};
exports.crInputProps = crInputProps;
const _crObject = Object.create,
  _getId = arrConfig => arrConfig[1],
  _getDfValue = arrConfig => {
    const _type = arrConfig[0];
    return _type === _InputTypes.INPUT_TYPE_SELECT || _type === _InputTypes.INPUT_TYPE_SUGGEST ? (0, _OptionFn.getItemValue)(arrConfig[4]) : _type === _InputTypes.INPUT_TYPE_TEXT_FIELD ? arrConfig[3] : void 0;
  },
  _hasShow = (inputConfigs, arrConfig) => inputConfigs.length === 1 ? true : arrConfig[5] === true;
const crDfInputs = inputConfigs => inputConfigs.reduce((r, arrConfig) => {
  const _isShow = _hasShow(inputConfigs, arrConfig);
  r[0][_getId(arrConfig)] = _getDfValue(arrConfig);
  r[1].push({
    id: arrConfig[1],
    caption: arrConfig[2],
    df: _isShow
  });
  r[2][arrConfig[1]] = _isShow;
  return r;
  //dfInputs, toggles, isInputs
}, [_crObject(null), [], _crObject(null)]);
exports.crDfInputs = crDfInputs;
const _fGetByPropName = propName => obj => (obj || {})[propName];
const _getPaneCaption = _fGetByPropName("paneCaption");
const _getCaption = _fGetByPropName("caption");
const getCaption = itemConf => _getCaption(itemConf) || _getPaneCaption(itemConf);
exports.getCaption = getCaption;
const getPaneCaption = exports.getPaneCaption = _fGetByPropName("paneCaption");
const _getType = _fGetByPropName("type");
const _getLoadId = _fGetByPropName("loadId");
const getLoadId = itemConf => _getLoadId(itemConf) || _getType(itemConf);
exports.getLoadId = getLoadId;
const getDialogCaption = itemConf => ((itemConf || {}).dialogProps || {}).caption;
exports.getDialogCaption = getDialogCaption;
const crTextFieldCaption = (caption, dfValue) => dfValue ? `${caption} (Default: ${dfValue})` : caption;
exports.crTextFieldCaption = crTextFieldCaption;
const _crInputCaption = (caption, id) => caption || (0, _uiApi.toFirstUpperCase)(id);
const crTextFieldConfig = (id, _ref) => {
  let {
    caption,
    dfValue,
    inputProps,
    is
  } = _ref;
  return [_InputTypes.INPUT_TYPE_TEXT_FIELD, id, _crInputCaption(caption, id), dfValue, inputProps, is];
};
exports.crTextFieldConfig = crTextFieldConfig;
const _fCrInputConfig = inputType => function (id, options, _temp) {
  let {
    caption,
    dfOption,
    dfIndex,
    is,
    isInput,
    isNotFirstUpperCase
  } = _temp === void 0 ? {} : _temp;
  const _options = (0, _isTypeFn.isStr)(options[0]) ? (0, _OptionFn.crSelectOptions)(options, isNotFirstUpperCase) : options;
  return [inputType, id, _crInputCaption(caption, id), _options, dfOption || _options[dfIndex || 0], is, isInput];
};
const crInputSelectConfig = exports.crInputSelectConfig = _fCrInputConfig(_InputTypes.INPUT_TYPE_SELECT);
const crInputSuggestConfig = exports.crInputSuggestConfig = _fCrInputConfig(_InputTypes.INPUT_TYPE_SUGGEST);
const INITIAL_FROM_DATE = (0, _dt.getFromDate)(1),
  INITIAL_TO_DATE = (0, _dt.getToDate)();
const crFromToDateConfig = (id, fromDate, toDate) => [_InputTypes.INPUT_TYPE_FROM_DATE, id, 'From To Date', fromDate || INITIAL_FROM_DATE, toDate || INITIAL_TO_DATE];
exports.crFromToDateConfig = crFromToDateConfig;
const fGetDialogConfig = crInputConfigs => (0, _uiApi.crLazyValue)(() => {
  const INPUT_CONFIGS = crInputConfigs();
  return [INPUT_CONFIGS, ...crDfInputs(INPUT_CONFIGS)];
});
exports.fGetDialogConfig = fGetDialogConfig;
//# sourceMappingURL=DialogFn.js.map