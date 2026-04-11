"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _bindTo = require("../../utils/bindTo");
var _joinBy = require("../../utils/joinBy");
var _compStore = require("../../flux/compStore");
var _memoFn = require("../hoc/memoFn");
var _crStyle = require("../crStyle");
var _has = require("../has");
var _DP = require("../DP");
var _hotkeys = require("../hotkeys/hotkeys");
var _DialogFn = require("../dialogs/DialogFn");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _FlatButton = _interopRequireDefault(require("../zhn-bt/FlatButton"));
var _SvgDelete = _interopRequireDefault(require("../zhn/svg/SvgDelete"));
var _HeaderBar = require("./HeaderBar.Style");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_HOT = "bt-hot",
  DF_BT_CAPTION = "DLG";
const _crBtProps = (index, conf) => {
  const caption = (0, _DialogFn.getCaption)(conf),
    shortCaption = (0, _DialogFn.getShortCaption)(conf),
    _hotKey = _has.HAS_TOUCH_EVENTS ? '' : String(index + 1);
  return {
    ariaLabel: caption,
    dataPos: _DP.DP_BOTTOM_LEFT,
    hotKey: _hotKey || void 0,
    caption: (0, _joinBy.joinBy)(_hotKey, shortCaption || DF_BT_CAPTION)
  };
};
const _crHotBtItem = (conf, index) => (0, _jsxRuntime.jsx)(_FlatButton.default, {
  ..._crBtProps(index, conf),
  timeout: 0,
  className: CL_BT_HOT,
  onClick: (0, _bindTo.bindTo)(_compStore.showDialog, conf)
}, conf.type);
const HotBar = () => {
  const hotButtons = (0, _compStore.useDialogItems)();
  return (0, _isTypeFn.isArr)(hotButtons) && hotButtons.length !== 0 ? (0, _jsxRuntime.jsxs)("div", {
    style: _crStyle.S_INLINE_BLOCK,
    children: [(0, _jsxRuntime.jsx)("span", {
      style: _crStyle.S_COLOR_BLACK,
      children: "|"
    }), (0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: hotButtons,
      crItem: _crHotBtItem
    }), (0, _jsxRuntime.jsx)(_FlatButton.default, {
      ariaLabel: "Clean hot bar",
      dataPos: _DP.DP_BOTTOM_LEFT,
      hotKey: _has.HAS_TOUCH_EVENTS ? void 0 : _hotkeys.HK_CLEAR_HOT_BAR,
      timeout: 0,
      onClick: _compStore.cleanDialogItems,
      children: (0, _jsxRuntime.jsx)(_SvgDelete.default, {
        style: _HeaderBar.S_SVG_ICON
      })
    }, "BT_CLEAN")]
  }) : null;
};
var _default = exports.default = (0, _memoFn.memoTrue)(HotBar);
//# sourceMappingURL=HotBar.js.map