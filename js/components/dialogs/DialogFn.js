"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = exports.crDfInputs = void 0;
var _assign = Object.assign;
var crDfInputs = function crDfInputs(values) {
  return _assign(Object.create(null), values);
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