"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _dt = _interopRequireDefault(require("../../utils/dt"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _dec, _class, _temp;

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
  caption: "Hot Tab",
  value: "hot"
}, {
  caption: "Hot Week Tab",
  value: "week"
}, {
  caption: "Hot Month Tab",
  value: "month"
}],
    DF_SORT_BY = SORT_BY_OPTIONS[4],
    DF_TAG = "CSS";

var StackTaggedDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(StackTaggedDialog, _Component);

  function StackTaggedDialog(props) {
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
          _tag = _this.inputTag.getValue() || DF_TAG,
          fromDate = _this.fromDate.getValue(),
          toDate = _this.toDate.getValue(),
          _fromDate = _dt["default"].toUTCSecond(fromDate),
          _toDate = _dt["default"].toUTCSecond(toDate);

      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'SO',
        requestType: 'TAG',
        tag: _tag,
        sortBy: _this.sortBy,
        fromDate: _fromDate,
        toDate: _toDate
      });
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputTag = function (comp) {
      return _this.inputTag = comp;
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

  var _proto = StackTaggedDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT),
        _tagCaption = "Tag (Default: " + DF_TAG + ")";

    return _react["default"].createElement(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "Tagged Questions",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose
    }, _react["default"].createElement(_Comp["default"].TextField, {
      style: TS.INPUT_ROOT,
      ref: this._refInputTag,
      caption: _tagCaption,
      initValue: DF_TAG,
      onEnter: this._handleLoad
    }), _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "SortBy",
      initItem: DF_SORT_BY,
      options: SORT_BY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectSortBy
    }), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].TextField, {
      ref: this._refFromDate,
      caption: "From Date",
      style: TS.INPUT_DATE,
      initValue: INITIAL_FROM_DATE,
      errorMsg: DATE_ERR_MSG,
      onTest: _onTestDate
    }), _react["default"].createElement(_Comp["default"].TextField, {
      ref: this._refToDate,
      caption: "To Date",
      style: TS.INPUT_DATE,
      initValue: INITIAL_TO_DATE,
      errorMsg: DATE_ERR_MSG,
      onTest: _onTestDate
    })), _react["default"].createElement(_Comp["default"].Link.PoweredBy, {
      rootStyle: TS.POWERED_BY
    }, _react["default"].createElement(_Comp["default"].Link.StackOverflow, null)));
  };

  return StackTaggedDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(StackTaggedDialog);

exports["default"] = _default;
//# sourceMappingURL=StackTaggedDialog.js.map