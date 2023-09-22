"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = exports.crTextFieldCaption = exports.crInputProps = exports.crInputCaption = exports.crDfInputs = void 0;
var _uiApi = require("../uiApi");
var _InputTypes = require("../zhn-inputs/InputTypes");
var _OptionFn = require("../zhn-m-input/OptionFn");
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
  _hasShow = (inputConfigs, arrConfig) => inputConfigs.length === 1 ? true : arrConfig[arrConfig.length - 1] === true ? true : false;
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
const getPaneCaption = itemConf => (itemConf || {}).paneCaption;
exports.getPaneCaption = getPaneCaption;
const getDialogCaption = itemConf => ((itemConf || {}).dialogProps || {}).caption;
exports.getDialogCaption = getDialogCaption;
const crInputCaption = token => (0, _uiApi.toFirstUpperCase)(token);
exports.crInputCaption = crInputCaption;
const crTextFieldCaption = (caption, dfValue) => caption + " (Default: " + dfValue + ")";
exports.crTextFieldCaption = crTextFieldCaption;
//# sourceMappingURL=DialogFn.js.map