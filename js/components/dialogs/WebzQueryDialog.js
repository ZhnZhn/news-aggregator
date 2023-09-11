"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _Dialog = require("./Dialog.Style");
var _useRefClose = _interopRequireDefault(require("./hooks/useRefClose"));
var _useRefInput = _interopRequireDefault(require("./hooks/useRefInput"));
var _useRefSelectOption = _interopRequireDefault(require("./hooks/useRefSelectOption"));
var _useKeyDown = _interopRequireDefault(require("./hooks/useKeyDown"));
var _Comp = _interopRequireDefault(require("../Comp"));
var _OptionFn = require("../zhn-m-input/OptionFn");
var _PoweredByLink = require("../links/PoweredByLink");
var _InputBeforeDays = _interopRequireDefault(require("./InputBeforeDays"));
var _jsxRuntime = require("preact/jsx-runtime");
const _SITE_TYPES = ['news', 'blogs'],
  SITE_TYPE_OPTIONS = (0, _OptionFn.crSelectOptions)(_SITE_TYPES),
  DF_SITE_TYPE = SITE_TYPE_OPTIONS[0],
  INITIAL_SITE_TYPE_VALUE = (0, _OptionFn.getItemValue)(DF_SITE_TYPE),
  DF_IN_TITLE = 'Weather',
  DF_BEFORE_DAYS = 2,
  SELECT_STYLE_CONFIG = (0, _Dialog.crSelectStyleConfig)();
const WebzQueryDialog = _ref => {
  let {
    isShow,
    type,
    source,
    itemConf,
    onLoad,
    onShow,
    onClose
  } = _ref;
  const [_refDialog, _hClose] = (0, _useRefClose.default)(onClose),
    [_refInputInTitle, _getInputInTitle] = (0, _useRefInput.default)(DF_IN_TITLE),
    [_refSiteType, _selectSiteType] = (0, _useRefSelectOption.default)(INITIAL_SITE_TYPE_VALUE),
    [_refInputBeforeDays, _getInputBeforeDays] = (0, _useRefInput.default)(DF_BEFORE_DAYS)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hLoad = (0, _uiApi.useCallback)(() => {
      onLoad({
        type,
        source,
        itemConf,
        loadId: "W",
        inTitle: _getInputInTitle(),
        siteType: (0, _uiApi.getRefValue)(_refSiteType),
        beforeDays: _getInputBeforeDays()
      });
      _hClose();
    }, [])
    //type, source, itemConf, onLoad
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hKeyDown = (0, _useKeyDown.default)(_hLoad, _hClose);
  return (0, _jsxRuntime.jsxs)(_Comp.default.DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    captionStyle: _Dialog.S_BROWSER_CAPTION,
    caption: "News, Blogs",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [(0, _jsxRuntime.jsx)(_Comp.default.TextField, {
      style: _Dialog.S_INPUT_ROOT,
      ref: _refInputInTitle,
      caption: "In Title (Default: Weather)",
      initValue: DF_IN_TITLE
    }), (0, _jsxRuntime.jsx)(_Comp.default.InputSelect, {
      caption: "Site Type",
      initItem: DF_SITE_TYPE,
      options: SITE_TYPE_OPTIONS,
      styleConfig: SELECT_STYLE_CONFIG,
      onSelect: _selectSiteType
    }), (0, _jsxRuntime.jsx)(_InputBeforeDays.default, {
      ref: _refInputBeforeDays,
      style: _Dialog.S_INPUT_ROOT,
      initValue: DF_BEFORE_DAYS
    }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByWebzLink, {
      style: _Dialog.S_POWERED_BY
    })]
  });
};
var _default = WebzQueryDialog;
exports.default = _default;
//# sourceMappingURL=WebzQueryDialog.js.map