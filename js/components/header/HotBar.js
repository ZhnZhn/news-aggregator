"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _compStore = require("../../flux/compStore");
var _memoFn = require("../hoc/memoFn");
var _has = require("../has");
var _DP = require("../DP");
var _hotkeys = require("../hotkeys/hotkeys");
var _DialogFn = require("../dialogs/DialogFn");
var _ItemStack = _interopRequireDefault(require("../zhn/ItemStack"));
var _FlatButton = _interopRequireDefault(require("../zhn-bt/FlatButton"));
var _preact = require("preact");
var _jsxRuntime = require("preact/jsx-runtime");
const _isArr = Array.isArray;
const CL_BT_HOT = "bt-hot",
  S_ROOT = {
    display: 'inline-block'
  },
  S_BT_CL = {
    color: '#f44336'
  },
  DF_BT_CAPTION = "DIA";
const _crBtProps = (index, caption) => {
  const _hotKey = _has.HAS_TOUCH_EVENTS ? '' : String(index + 1);
  return {
    ariaLabel: caption,
    dataPos: _DP.DP_BOTTOM_LEFT,
    hotKey: _hotKey || void 0,
    caption: _hotKey + (caption || DF_BT_CAPTION).slice(0, 3)
  };
};
const _crHotBtItem = (conf, index) => (0, _preact.createElement)(_FlatButton.default, {
  ..._crBtProps(index, (0, _DialogFn.getCaption)(conf)),
  key: conf.type,
  timeout: 0,
  className: CL_BT_HOT,
  onClick: (0, _uiApi.bindTo)(_compStore.showDialog, conf)
});
const HotBar = () => {
  const hotButtons = (0, _compStore.useDialogItems)();
  return _isArr(hotButtons) ? (0, _jsxRuntime.jsxs)("div", {
    style: S_ROOT,
    children: [(0, _jsxRuntime.jsx)(_ItemStack.default, {
      items: hotButtons,
      crItem: _crHotBtItem
    }), hotButtons.length !== 0 && (0, _jsxRuntime.jsx)(_FlatButton.default, {
      ariaLabel: "Clean Hot Bar",
      dataPos: _DP.DP_BOTTOM_LEFT,
      hotKey: _has.HAS_TOUCH_EVENTS ? void 0 : _hotkeys.HK_CLEAR_HOT_BAR,
      timeout: 0,
      style: S_BT_CL,
      caption: "CL",
      onClick: _compStore.cleanDialogItems
    }, "BT_CLEAN")]
  }) : null;
};
var _default = exports.default = (0, _memoFn.memoTrue)(HotBar);
//# sourceMappingURL=HotBar.js.map