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

var DATE_ERR_MSG = "YYYY-MM-DD";

var INITIAL_FROM_DATE = _dt2.default.getFromDate(1),
    INITIAL_TO_DATE = _dt2.default.getToDate(),
    _onTestDate = _dt2.default.isValidDate,
    SORT_BY_OPTIONS = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Relevance", value: "relevance" }],
    DF_SORT_BY = SORT_BY_OPTIONS[2];

var StackSearchDialog = (_dec = _Decors2.default.withDecors, _dec(_class = function (_Component) {
  (0, _inherits3.default)(StackSearchDialog, _Component);

  function StackSearchDialog(props) {
    (0, _classCallCheck3.default)(this, StackSearchDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackSearchDialog.__proto__ || Object.getPrototypeOf(StackSearchDialog)).call(this, props));

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
          _fromDate = _dt2.default.toUTCSecond(fromDate),
          _toDate = _dt2.default.toUTCSecond(toDate);

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
    _this._initWithDecors(_this);
    return _this;
  }

  (0, _createClass3.default)(StackSearchDialog, [{
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
          caption: 'Search Questions',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputTagged,
          caption: 'Tagged (Default: CSS)',
          initValue: 'CSS'
        }),
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputInTitle,
          caption: 'In Title (Default: flexbox)',
          initValue: 'flexbox'
        }),
        _react2.default.createElement(_Comp2.default.InputSelect, {
          caption: 'SortBy',
          initItem: DF_SORT_BY,
          options: SORT_BY_OPTIONS,
          styleConfig: TS.SELECT,
          onSelect: this._selectSortBy
        }),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.TextField, {
            ref: this._refFromDate,
            caption: 'From Date',
            rootStyle: TS.INPUT_DATE,
            initValue: INITIAL_FROM_DATE,
            errorMsg: DATE_ERR_MSG,
            onTest: _onTestDate
          }),
          _react2.default.createElement(_Comp2.default.TextField, {
            ref: this._refToDate,
            caption: 'To Date',
            rootStyle: TS.INPUT_DATE,
            initValue: INITIAL_TO_DATE,
            errorMsg: DATE_ERR_MSG,
            onTest: _onTestDate
          })
        ),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: TS.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.StackOverflow, null)
        )
      );
    }
  }]);
  return StackSearchDialog;
}(_react.Component)) || _class);
exports.default = (0, _withTheme2.default)(StackSearchDialog);
//# sourceMappingURL=StackSearchDialog.js.map