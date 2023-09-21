"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
const crModelMore = _ref => {
  let {
    onMinWidth,
    onInitWidth,
    onPlusWidth,
    onMinusWidth,
    onRemoveItems
  } = _ref;
  return {
    titleCl: _crStyle.CL_MENU_MORE_ITEM,
    pageWidth: 196,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: 'Resize'
    }, {
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: 'Remove Items',
      onClick: onRemoveItems,
      isClose: true
    }],
    p1: [{
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: 'to MinWidth',
      onClick: onMinWidth
    }, {
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: 'to InitWidth',
      onClick: onInitWidth
    }, {
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: '+10px to Width',
      onClick: onPlusWidth
    }, {
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: '-10px to Width',
      onClick: onMinusWidth
    }]
  };
};
var _default = crModelMore;
exports.default = _default;
//# sourceMappingURL=crModelMore.js.map