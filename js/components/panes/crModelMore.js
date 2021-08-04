"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var CL_ROW = 'menu-more__item not-selected';

var crModelMore = function crModelMore(_ref) {
  var onMinWidth = _ref.onMinWidth,
      onInitWidth = _ref.onInitWidth,
      onPlusWidth = _ref.onPlusWidth,
      onMinusWidth = _ref.onMinusWidth,
      onRemoveItems = _ref.onRemoveItems;
  return {
    titleCl: CL_ROW,
    pageWidth: 180,
    maxPages: 2,
    p0: [{
      id: 'p1',
      type: 'sub',
      cn: CL_ROW,
      name: 'Resize'
    }, {
      cn: CL_ROW,
      name: 'Remove All Items',
      onClick: onRemoveItems,
      isClose: true
    }],
    p1: [{
      cn: CL_ROW,
      name: 'to MinWidth',
      onClick: onMinWidth
    }, {
      cn: CL_ROW,
      name: 'to InitWidth',
      onClick: onInitWidth
    }, {
      cn: CL_ROW,
      name: '+10px to Width',
      onClick: onPlusWidth
    }, {
      cn: CL_ROW,
      name: '-10px to Width',
      onClick: onMinusWidth
    }]
  };
};

var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=crModelMore.js.map