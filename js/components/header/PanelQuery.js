"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useTheme = _interopRequireDefault(require("../hooks/useTheme"));
var _useFocusRefElementIf = _interopRequireDefault(require("../hooks/useFocusRefElementIf"));
var _useItemsFocusTrap = _interopRequireDefault(require("../hooks/useItemsFocusTrap"));
var _NewsBrowser = _interopRequireDefault(require("../source-browsers/NewsBrowser.Style"));
var _ModalPopup = _interopRequireDefault(require("../zhn-moleculs/ModalPopup"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _Menu = _interopRequireDefault(require("./Menu"));
var _jsxRuntime = require("preact/jsx-runtime");
const HAS_NOT_TOUCH_EVENTS = !_has.HAS_TOUCH_EVENTS;
const PanelQuery = _ref => {
  let {
    menuModel,
    refFocusItem,
    className,
    paneStyle,
    isShow,
    onClose
  } = _ref;
  const TS = (0, _useTheme.default)(_NewsBrowser.default),
    _refFirstItem = (0, _useFocusRefElementIf.default)(isShow && HAS_NOT_TOUCH_EVENTS, refFocusItem),
    _refLastItem = (0, _uiApi.useRef)(),
    _getFocusRef = (0, _useItemsFocusTrap.default)(menuModel, _refFirstItem, _refLastItem)[0];
  return (0, _jsxRuntime.jsx)(_ModalPopup.default, {
    isShow: isShow,
    className: className,
    style: paneStyle,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: (0, _jsxRuntime.jsx)(_Menu.default, {
        menuModel: menuModel,
        style: TS.OPEN_CLOSE,
        itemStyle: TS.ITEM,
        getFocusRef: _getFocusRef
      })
    })
  });
};
var _default = PanelQuery;
exports.default = _default;
//# sourceMappingURL=PanelQuery.js.map