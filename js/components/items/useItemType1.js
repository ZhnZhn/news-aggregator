"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
// [isShowDescr, hToggle, hHide]
var useItemType1 = function useItemType1(ref) {
  var _useState = (0, _uiApi.useState)(false),
    isShowDescr = _useState[0],
    setIsShowDescr = _useState[1];
  return [isShowDescr].concat((0, _uiApi.useMemo)(function () {
    return [function () {
      return setIsShowDescr(function (is) {
        return !is;
      });
    }, function () {
      (0, _uiApi.focusRefElement)(ref);
      setIsShowDescr(false);
    }];
  }, []));
};
var _default = useItemType1;
exports["default"] = _default;
//# sourceMappingURL=useItemType1.js.map