"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var _removeClickListener = function _removeClickListener(listener, refIs) {
  if ((0, _uiApi.getRefValue)(refIs)) {
    document.removeEventListener('click', listener, true);
    refIs.current = null;
  }
};
var useClickOutside = function useClickOutside(isShow, onClose) {
  var _refElement = (0, _uiApi.useRef)(null),
    _refIs = (0, _uiApi.useRef)(null)

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickOutside = (0, _uiApi.useCallback)(function (evt) {
      var _element = (0, _uiApi.getRefValue)(_refElement) || {};
      if (_element.contains && !_element.contains(evt.target)) {
        evt.stopPropagation();
        onClose();
      }
    }, []);
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    if (isShow && !_refIs.current) {
      document.addEventListener('click', _hClickOutside, true);
      _refIs.current = true;
    } else if (!isShow) {
      _removeClickListener(_hClickOutside, _refIs);
    }
  });

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    return function () {
      return _removeClickListener(_hClickOutside, _refIs);
    };
  }, []);
  // _hClickOutside
  /*eslint-enable react-hooks/exhaustive-deps */

  return _refElement;
};
var _default = useClickOutside;
exports["default"] = _default;
//# sourceMappingURL=useClickOutside.js.map