"use strict";

exports.__esModule = true;
exports.getPaneCaption = exports.getDialogCaption = void 0;
var getPaneCaption = function getPaneCaption(itemConf) {
  return (itemConf || {}).paneCaption;
};
exports.getPaneCaption = getPaneCaption;
var getDialogCaption = function getDialogCaption(itemConf) {
  return ((itemConf || {}).dialogProps || {}).caption;
};
exports.getDialogCaption = getDialogCaption;
//# sourceMappingURL=DialogFn.js.map