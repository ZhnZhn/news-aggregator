"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _CL = require("../styles/CL");
var crModelMore = function crModelMore(_ref) {
  var onMinWidth = _ref.onMinWidth,
    onInitWidth = _ref.onInitWidth,
    onPlusWidth = _ref.onPlusWidth,
    onMinusWidth = _ref.onMinusWidth,
    onRemoveItems = _ref.onRemoveItems;
  return {
    titleCl: _CL.CL_MENU_MORE_ITEM,
    pageWidth: 196,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: _CL.CL_MENU_MORE_ITEM,
      name: 'Resize'
    }, {
      cn: _CL.CL_MENU_MORE_ITEM,
      name: 'Remove Items',
      onClick: onRemoveItems,
      isClose: true
    }],
    p1: [{
      cn: _CL.CL_MENU_MORE_ITEM,
      name: 'to MinWidth',
      onClick: onMinWidth
    }, {
      cn: _CL.CL_MENU_MORE_ITEM,
      name: 'to InitWidth',
      onClick: onInitWidth
    }, {
      cn: _CL.CL_MENU_MORE_ITEM,
      name: '+10px to Width',
      onClick: onPlusWidth
    }, {
      cn: _CL.CL_MENU_MORE_ITEM,
      name: '-10px to Width',
      onClick: onMinusWidth
    }]
  };
};
var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=crModelMore.js.map