"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var DX_REMOVE_UNDER = 90,
    DX_REMOVE_ITEM = 40;
/*eslint-disable react-hooks/exhaustive-deps */

var useItemGestureSwipeX = function useItemGestureSwipeX(item, onRemoveUnder, hClose) {
  return (0, _react.useCallback)(function (dX) {
    if (dX > DX_REMOVE_UNDER) {
      onRemoveUnder(item);
      return false;
    } else if (dX > DX_REMOVE_ITEM) {
      hClose();
      return false;
    }

    return true;
  }, []);
}; // _hClose, item, onRemoveItem

/*eslint-enable react-hooks/exhaustive-deps */


var _default = useItemGestureSwipeX;
exports["default"] = _default;
//# sourceMappingURL=useItemGestureSwipeX.js.map