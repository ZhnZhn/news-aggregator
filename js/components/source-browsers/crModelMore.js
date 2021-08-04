"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var CL_ROW = 'menu-more__item not-selected';

var crModelMore = function crModelMore(_ref) {
  var onRemoveBadges = _ref.onRemoveBadges;
  return {
    titleCl: CL_ROW,
    pageWidth: 186,
    maxPages: 1,
    p0: [{
      cn: CL_ROW,
      name: 'Remove All Badges',
      onClick: onRemoveBadges,
      isClose: true
    }]
  };
};

var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=crModelMore.js.map