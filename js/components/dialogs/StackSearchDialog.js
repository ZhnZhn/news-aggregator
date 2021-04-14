"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

var DATE_ERR_MSG = "YYYY-MM-DD";

var INITIAL_FROM_DATE = _dt["default"].getFromDate(1),
    INITIAL_TO_DATE = _dt["default"].getToDate(),
    _onTestDate = _dt["default"].isValidDate,
    SORT_BY_OPTIONS = [{
  caption: "Activity, Recent Day",
  value: "activity"
}, {
  caption: "Creation Date",
  value: "creation"
}, {
  caption: "Score",
  value: "votes"
}, {
  caption: "Relevance",
  value: "relevance"
}],
    DF_SORT_BY = SORT_BY_OPTIONS[2];

var StackSearchDialog = (_dec = _Decors["default"].withDecors, _dec(_class = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(StackSearchDialog, _Component);

  function StackSearchDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _tagged = _this.inputTagged.getValue(),
          _inTitle = _this.inputInTitle.getValue(),
          fromDate = _this.fromDate.getValue(),
          toDate = _this.toDate.getValue(),
          _fromDate = _dt["default"].toUTCSecond(fromDate),
          _toDate = _dt["default"].toUTCSecond(toDate);

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'SO',
        requestType: 'SEARCH',
        tagged: _tagged,
        inTitle: _inTitle,
        sortBy: _this.sortBy,
        fromDate: _fromDate,
        toDate: _toDate
      });

      _this._handleClose();
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputTagged = function (comp) {
      return _this.inputTagged = comp;
    };

    _this._refInputInTitle = function (comp) {
      return _this.inputInTitle = comp;
    };

    _this._refFromDate = function (comp) {
      return _this.fromDate = comp;
    };

    _this._refToDate = function (comp) {
      return _this.toDate = comp;
    };

    _this.sortBy = DF_SORT_BY.value;

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = StackSearchDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "Search Questions",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        style: TS.INPUT_ROOT,
        ref: this._refInputTagged,
        caption: "Tagged (Default: CSS)",
        initValue: "CSS"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
        style: TS.INPUT_ROOT,
        ref: this._refInputInTitle,
        caption: "In Title (Default: flexbox)",
        initValue: "flexbox"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].InputSelect, {
        caption: "SortBy",
        initItem: DF_SORT_BY,
        options: SORT_BY_OPTIONS,
        styleConfig: TS.SELECT,
        onSelect: this._selectSortBy
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
          ref: this._refFromDate,
          caption: "From Date",
          hasClear: false,
          style: TS.INPUT_DATE,
          initValue: INITIAL_FROM_DATE,
          errorMsg: DATE_ERR_MSG,
          onTest: _onTestDate
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].TextField, {
          ref: this._refToDate,
          caption: "To Date",
          hasClear: false,
          style: TS.INPUT_DATE,
          initValue: INITIAL_TO_DATE,
          errorMsg: DATE_ERR_MSG,
          onTest: _onTestDate
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.PoweredBy, {
        rootStyle: TS.POWERED_BY,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Comp["default"].Link.StackOverflow, {})
      })]
    });
  };

  return StackSearchDialog;
}(_react.Component)) || _class);

var _default = (0, _withTheme["default"])(StackSearchDialog);

exports["default"] = _default;
//# sourceMappingURL=StackSearchDialog.js.map