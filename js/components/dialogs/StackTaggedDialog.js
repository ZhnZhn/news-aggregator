'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dt = require('../../utils/dt');

var _dt2 = _interopRequireDefault(_dt);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _Decors = require('./decorators/Decors');

var _Decors2 = _interopRequireDefault(_Decors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

var _initFromDate = _dt2.default.getFromDate(1),
    _initToDate = _dt2.default.getToDate(),
    _onTestDate = _dt2.default.isValidDate,
    _sortByOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Hot Tab", value: "hot" }, { caption: "Hot Week Tab", value: "week" }, { caption: "Hot Month Tab", value: "month" }],
    DF_SORT_BY = _sortByOptions[4];

var StackTaggedDialog = (_dec = _Decors2.default.withDecors, _dec(_class = function (_Component) {
  (0, _inherits3.default)(StackTaggedDialog, _Component);

  function StackTaggedDialog(props) {
    (0, _classCallCheck3.default)(this, StackTaggedDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackTaggedDialog.__proto__ || Object.getPrototypeOf(StackTaggedDialog)).call(this, props));

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _tag = _this.inputTag.getValue(),
          fromDate = _this.fromDate.getValue(),
          toDate = _this.toDate.getValue(),
          _fromDate = _dt2.default.toUTCSecond(fromDate),
          _toDate = _dt2.default.toUTCSecond(toDate);

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
    _this._initWithDecors(_this);
    return _this;
  }

  (0, _createClass3.default)(StackTaggedDialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          onShow = _props.onShow,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _Comp2.default.DraggableDialog,
        {
          ref: this._refDialogComp,
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'Tagged Questions',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputTag,
          caption: 'Tag (Default: CSS)',
          initValue: 'CSS'
        }),
        _react2.default.createElement(_Comp2.default.InputSelect, {
          caption: 'SortBy',
          initItem: DF_SORT_BY,
          options: _sortByOptions,
          styleConfig: TS.SELECT,
          onSelect: this._selectSortBy
        }),
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refFromDate,
          caption: 'From Date',
          initValue: _initFromDate,
          errorMsg: 'YYYY-MM-DD format must be',
          onTest: _onTestDate
        }),
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refToDate,
          caption: 'To Date',
          initValue: _initToDate,
          errorMsg: 'YYYY-MM-DD format must be',
          onTest: _onTestDate
        }),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.StackOverflow, null)
        )
      );
    }
  }]);
  return StackTaggedDialog;
}(_react.Component)) || _class);
exports.default = (0, _withTheme2.default)(StackTaggedDialog);
//# sourceMappingURL=StackTaggedDialog.js.map