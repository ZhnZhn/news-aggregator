"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _Dialog = _interopRequireDefault(require("./Dialog.Style"));
var _useRefInputs2 = _interopRequireDefault(require("./hooks/useRefInputs"));
var _useDialog2 = _interopRequireDefault(require("./hooks/useDialog"));
var _useDecorDialog2 = _interopRequireDefault(require("./hooks/useDecorDialog"));
var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));
var _FlexColumn = _interopRequireDefault(require("../zhn-atoms/FlexColumn"));
var _StackInputs = _interopRequireDefault(require("../zhn-inputs/StackInputs"));
var _DialogFn = require("./DialogFn");
var _PoweredByLink = require("../links/PoweredByLink");
var _TheNewsApiDialogFn = require("./TheNewsApiDialogFn");
var _jsxRuntime = require("preact/jsx-runtime");
var SORT_BY_OPTIONS = [["Relevancy", "relevance_score"], ["PublishedAt", " published_at"]],
  DF_SORT_BY = SORT_BY_OPTIONS[0],
  DF_TERM = "Weather",
  INPUT_CONFIGS = [['t', 'search', "Term (Default: " + DF_TERM + ")", DF_TERM], ['s', 'category', 'Category', _TheNewsApiDialogFn.CATEGORY_OPTIONS, _TheNewsApiDialogFn.DF_CATEGORY], ['s', 'sortBy', 'SortBy', SORT_BY_OPTIONS, DF_SORT_BY]],
  INITIAL_INPUTS = (0, _DialogFn.crDfInputs)(INPUT_CONFIGS);
var TheNewsApiSearchDialog = function TheNewsApiSearchDialog(props) {
  var isShow = props.isShow,
    itemConf = props.itemConf,
    onShow = props.onShow,
    _useRefInputs = (0, _useRefInputs2["default"])(INITIAL_INPUTS),
    _refInputs = _useRefInputs[0],
    _selectInput = _useRefInputs[1],
    _useDialog = (0, _useDialog2["default"])(props, 'TNS', _refInputs),
    _refDialog = _useDialog[0],
    _hLoad = _useDialog[1],
    _hClose = _useDialog[2],
    _useDecorDialog = (0, _useDecorDialog2["default"])(_Dialog["default"], _hLoad, _hClose),
    TS = _useDecorDialog[0],
    _hKeyDown = _useDecorDialog[1],
    caption = (0, _DialogFn.getPaneCaption)(itemConf);
  return (0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
    ref: _refDialog,
    isShow: isShow,
    style: TS.R_DIALOG,
    captionStyle: TS.BROWSER_CAPTION,
    buttonStyle: TS.BT,
    caption: caption,
    onKeyDown: _hKeyDown,
    onLoad: _hLoad,
    onShow: onShow,
    onClose: _hClose,
    children: (0, _jsxRuntime.jsxs)(_FlexColumn["default"], {
      children: [(0, _jsxRuntime.jsx)(_StackInputs["default"], {
        TS: TS,
        configs: INPUT_CONFIGS,
        onSelect: _selectInput
      }), (0, _jsxRuntime.jsx)(_PoweredByLink.PoweredByTheNewsApi, {
        style: TS.POWERED_BY
      })]
    })
  });
};
var _default = TheNewsApiSearchDialog;
exports["default"] = _default;
//# sourceMappingURL=TheNewsApiSearchDialog.js.map