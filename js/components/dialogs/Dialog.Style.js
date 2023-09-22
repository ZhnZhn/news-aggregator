"use strict";

exports.__esModule = true;
exports.crInputSelectStyle = exports.S_POWERED_BY = exports.S_INPUT_ROOT = exports.S_INPUT_DATE = exports.S_DIALOG_CAPTION = exports.S_BT_RAISED = exports.S_BROWSER_CAPTION = void 0;
const INPUT_WIDTH = 250;
const S_DIALOG_CAPTION = {
  fontSize: '1.125rem'
};
exports.S_DIALOG_CAPTION = S_DIALOG_CAPTION;
const S_BROWSER_CAPTION = {
  ...S_DIALOG_CAPTION,
  textAlign: 'center'
};
exports.S_BROWSER_CAPTION = S_BROWSER_CAPTION;
const S_BT_RAISED = {
  marginRight: 2,
  marginLeft: 2
};
exports.S_BT_RAISED = S_BT_RAISED;
const S_INPUT_ROOT = {
  width: INPUT_WIDTH,
  display: 'block'
};
exports.S_INPUT_ROOT = S_INPUT_ROOT;
const S_INPUT_DATE = {
  display: 'inline-block',
  width: 110
};
exports.S_INPUT_DATE = S_INPUT_DATE;
const S_POWERED_BY = {
  margin: '16px 0 8px 16px'
};
exports.S_POWERED_BY = S_POWERED_BY;
const crInputSelectStyle = function (width) {
  if (width === void 0) {
    width = INPUT_WIDTH;
  }
  return {
    width
  };
};
exports.crInputSelectStyle = crInputSelectStyle;
//# sourceMappingURL=Dialog.Style.js.map