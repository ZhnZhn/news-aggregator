"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _CL = require("../styles/CL");
var crModelMore = function crModelMore(_ref) {
  var onRemoveBadges = _ref.onRemoveBadges;
  return {
    titleCl: _CL.CL_MENU_MORE_ITEM,
    pageWidth: '11.625rem',
    maxPages: 1,
    p0: [{
      cn: _CL.CL_MENU_MORE_ITEM,
      name: 'Remove All Badges',
      onClick: onRemoveBadges,
      isClose: true
    }]
  };
};
var _default = crModelMore;
exports["default"] = _default;
//# sourceMappingURL=crModelMore.js.map