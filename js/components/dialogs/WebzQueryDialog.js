"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _useRefClose2 = _interopRequireDefault(require("./hooks/useRefClose"));

var _useRefInput3 = _interopRequireDefault(require("./hooks/useRefInput"));

var _useRefSelectOption2 = _interopRequireDefault(require("./hooks/useRefSelectOption"));

var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _InputBeforeDays = _interopRequireDefault(require("./InputBeforeDays"));

var _jsxRuntime = require("react/jsx-runtime");

var SITE_TYPE_OPTIONS = [{
  caption: 'News',
  value: 'news'
}, {
  caption: 'Blogs',
  value: 'blogs'
}],
    DF_SITE_TYPE = SITE_TYPE_OPTIONS[0],
    DF_IN_TITLE = 'Weather',
    DF_BEFORE_DAYS = 2;

var WebzQueryDialog = function WebzQueryDialog(_ref) {
  var isShow = _ref.isShow,
      type = _ref.type,
      source = _ref.source,
      itemConf = _ref.itemConf,
      onLoad = _ref.onLoad,
      onShow = _ref.onShow,
      onClose = _ref.onClose;

  var _useRefClose = (0, _useRefClose2["default"])(onClose),
      _refDialog = _useRefClose[0],
      _hClose = _useRefClose[1],
      _useRefInput = (0, _useRefInput3["default"])(DF_IN_TITLE),
      _refInputInTitle = _useRefInput[0],
      _getInputInTitle = _useRefInput[1],
      _useRefSelectOption = (0, _useRefSelectOption2["default"])(DF_SITE_TYPE.value),
      _refSiteType = _useRefSelectOption[0],
      _selectSiteType = _useRefSelectOption[1],
      _useRefInput2 = (0, _useRefInput3["default"])(DF_BEFORE_DAYS),
      _refInputBeforeDays = _useRefInput2[0],
      _getInputBeforeDays = _useRefInput2[1],
      _hLoad = (0, _uiApi.useCallback)(function () {
    onLoad({
      type: type,
      source: source,
      itemConf: itemConf,
      loadId: "W",
      inTitle: _getInputInTitle(),
      siteType: (0, _uiApi.getRefValue)(_refSiteType),
      beforeDays: _getInputBeforeDays()
    });

    _hClose();
  }, []),
      _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
      TS = _useDecorDialog[0],
      _hKeyDown = _useDecorDialog[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: "Webz.io: News, Blogs",
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: _refInputInTitle,
      caption: "In Title (Default: Weather)",
      initValue: DF_IN_TITLE
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
      caption: "Site Type",
      initItem: DF_SITE_TYPE,
      options: SITE_TYPE_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: _selectSiteType
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputBeforeDays["default"], {
      ref: _refInputBeforeDays,
      style: TS.INPUT_ROOT,
      initValue: DF_BEFORE_DAYS
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.Webz, {})
    })]
  });
};

var _default = WebzQueryDialog;
exports["default"] = _default;
//# sourceMappingURL=WebzQueryDialog.js.map