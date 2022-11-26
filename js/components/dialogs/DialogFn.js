"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = exports.crDfInputs = exports.SYMBOL_INPUT_PROPS = void 0;
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
    return arrConfig[0] === 's' ? (0, _OptionFn.getItemValue)(arrConfig[4])
    //_type === 't'
    : arrConfig[3];
  };
var crDfInputs = function crDfInputs(inputConfigs) {
  return inputConfigs.reduce(function (r, arrConfig) {
    r[0][_getId(arrConfig)] = _getDfValue(arrConfig);
    r[1].push({
      id: arrConfig[1],
      caption: arrConfig[2],
      df: !!arrConfig[5]
    });
    r[2][arrConfig[1]] = !!arrConfig[5];
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
//# sourceMappingURL=DialogFn.js.map