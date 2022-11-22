"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = exports.crDfInputs = void 0;
var _OptionFn = require("../zhn-m-input/OptionFn");
var _crObject = Object.create,
  _getId = function _getId(arrConfig) {
    return arrConfig[1];
  },
  _getDfValue = function _getDfValue(arrConfig) {
    return (0, _OptionFn.getItemValue)(arrConfig[4]);
  };
var crDfInputs = function crDfInputs(inputConfigs) {
  return inputConfigs.reduce(function (dfInputs, arrConfig) {
    dfInputs[_getId(arrConfig)] = _getDfValue(arrConfig);
    return dfInputs;
  }, _crObject(null));
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