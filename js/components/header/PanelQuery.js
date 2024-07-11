"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
var _useFocusRefElementIf = _interopRequireDefault(require("../hooks/useFocusRefElementIf"));
var _useItemsFocusTrap = _interopRequireDefault(require("../hooks/useItemsFocusTrap"));
var _useToggleAccordion = _interopRequireDefault(require("../hooks/useToggleAccordion"));
var _ModalPopup = _interopRequireDefault(require("../zhn-moleculs/ModalPopup"));
var _FocusTrap = _interopRequireDefault(require("../zhn-moleculs/FocusTrap"));
var _Menu = _interopRequireDefault(require("./Menu"));
var _jsxRuntime = require("preact/jsx-runtime");
const PanelQuery = _ref => {
  let {
    menuModel,
    refFocusItem,
    className,
    isShow,
    onClose
  } = _ref;
  const _refFirstItem = (0, _useFocusRefElementIf.default)(isShow && _has.HAS_KEYBOARD_FOCUS, refFocusItem),
    _refLastItem = (0, _uiApi.useRef)(),
    _getFocusRef = (0, _useItemsFocusTrap.default)(menuModel, _refFirstItem, _refLastItem)[0],
    _onToggleTopic = (0, _useToggleAccordion.default)();
  return (0, _jsxRuntime.jsx)(_ModalPopup.default, {
    isShow: isShow,
    className: className,
    onClose: onClose,
    children: (0, _jsxRuntime.jsx)(_FocusTrap.default, {
      refFirst: _refFirstItem,
      refLast: _refLastItem,
      children: (0, _jsxRuntime.jsx)(_Menu.default, {
        menuModel: menuModel,
        getFocusRef: _getFocusRef,
        onToggle: _onToggleTopic
      })
    })
  });
};
var _default = exports.default = PanelQuery;
//# sourceMappingURL=PanelQuery.js.map