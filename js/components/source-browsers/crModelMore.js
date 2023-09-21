"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../crStyle");
const crModelMore = _ref => {
  let {
    onRemoveBadges
  } = _ref;
  return {
    titleCl: _crStyle.CL_MENU_MORE_ITEM,
    pageWidth: '11.625rem',
    maxPages: 1,
    p0: [{
      cn: _crStyle.CL_MENU_MORE_ITEM,
      name: 'Remove All Badges',
      onClick: onRemoveBadges,
      isClose: true
    }]
  };
};
var _default = crModelMore;
exports.default = _default;
//# sourceMappingURL=crModelMore.js.map