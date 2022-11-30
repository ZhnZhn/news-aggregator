"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = exports.crTextFieldCaption = exports.crDfInputs = exports.SYMBOL_INPUT_PROPS = void 0;
var _OptionFn = require("../zhn-m-input/OptionFn");
var SYMBOL_INPUT_PROPS = {
  maxLength: '10',
  inputStyle: {
    textTransform: 'uppercase'
  },
  autoCapitalize: 'characters'
};
exports.SYMBOL_INPUT_PROPS = SYMBOL_INPUT_PROPS;
var _crObject = Object.create,
  _getId = function _getId(arrConfig) {
    return arrConfig[1];
  },
  _getDfValue = function _getDfValue(arrConfig) {
    var _type = arrConfig[0];
    return _type === 's' ? (0, _OptionFn.getItemValue)(arrConfig[4]) : _type === 't' ? arrConfig[3] : void 0;
  },
  _hasShow = function _hasShow(inputConfigs, arrConfig) {
    return inputConfigs.length === 1 ? true : arrConfig[arrConfig.length - 1] === true ? true : false;
  };
var crDfInputs = function crDfInputs(inputConfigs) {
  return inputConfigs.reduce(function (r, arrConfig) {
    var _isShow = _hasShow(inputConfigs, arrConfig);
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
};
exports.crDfInputs = crDfInputs;
var getPaneCaption = function getPaneCaption(itemConf) {
  return (itemConf || {}).paneCaption;
};
exports.getPaneCaption = getPaneCaption;
var getDialogCaption = function getDialogCaption(itemConf) {
  return ((itemConf || {}).dialogProps || {}).caption;
};
exports.getDialogCaption = getDialogCaption;
var crTextFieldCaption = function crTextFieldCaption(caption, dfValue) {
  return caption + " (Default: " + dfValue + ")";
};
exports.crTextFieldCaption = crTextFieldCaption;
//# sourceMappingURL=DialogFn.js.map