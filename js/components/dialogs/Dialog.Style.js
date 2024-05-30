"use strict";

exports.__esModule = true;
exports.crInputSelectStyle = exports.S_POWERED_BY = exports.S_INPUT_ROOT = exports.S_INPUT_DATE = exports.S_DIALOG_CAPTION = exports.S_BT_RAISED = exports.S_BROWSER_CAPTION = void 0;
const S_DIALOG_CAPTION = exports.S_DIALOG_CAPTION = {
  margin: -1,
  fontSize: '1.125rem'
};
const S_BROWSER_CAPTION = exports.S_BROWSER_CAPTION = {
  ...S_DIALOG_CAPTION,
  textAlign: 'center'
};
const S_BT_RAISED = exports.S_BT_RAISED = {
  marginRight: 2,
  marginLeft: 2
};
const S_INPUT_DATE = exports.S_INPUT_DATE = {
  display: 'inline-block',
  width: 110
};
const S_POWERED_BY = exports.S_POWERED_BY = {
  margin: '16px 0 8px 16px'
};
const INPUT_WIDTH = 'calc(190px + 4rem)';
const S_INPUT_ROOT = exports.S_INPUT_ROOT = {
  display: 'block',
  width: INPUT_WIDTH
};
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