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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _dt = require('../../utils/dt');

var _dt2 = _interopRequireDefault(_dt);

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _TextField = require('../zhn-m-input/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _PoweredBy = require('../links/PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Links = require('../links/Links');

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
};

var _initFromDate = _dt2.default.getFromDate(1),
    _initToDate = _dt2.default.getToDate(),
    _onTestDate = _dt2.default.isValidDate;

var DF_SORT_BY = { caption: "Hot Week Tab", value: "week" };
var _sortByOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Hot Tab", value: "hot" }, { caption: "Hot Week Tab", value: "week" }, { caption: "Hot Month Tab", value: "month" }];

var StackTaggedDialog = function (_Component) {
  (0, _inherits3.default)(StackTaggedDialog, _Component);

  function StackTaggedDialog(props) {
    (0, _classCallCheck3.default)(this, StackTaggedDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackTaggedDialog.__proto__ || Object.getPrototypeOf(StackTaggedDialog)).call(this));

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : undefined;
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
          _fromDate = _dt2.default.toUTCMillis(fromDate) / 1000,
          _toDate = _dt2.default.toUTCMillis(toDate) / 1000;

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

    _this._handleClose = function () {
      _this.props.onClose();
    };

    _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Load',
        isPrimary: true,
        onClick: _this._handleLoad
      })];
    };

    _this.sortBy = DF_SORT_BY.value;
    return _this;
  }

  (0, _createClass3.default)(StackTaggedDialog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          onShow = _props.onShow,
          TS = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(TS.BT);

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          rootStyle: TS.R_DIALOG,
          browserCaptionStyle: TS.BROWSER_CAPTION,
          styleButton: TS.BT,
          caption: 'Tagged Questions',
          isShow: isShow,
          commandButtons: _commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_TextField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: function ref(comp) {
            return _this2.inputTag = comp;
          },
          caption: 'Tag (Default: CSS)',
          initValue: 'CSS'
        }),
        _react2.default.createElement(_InputSelect2.default, {
          caption: 'SortBy',
          initItem: DF_SORT_BY,
          options: _sortByOptions,
          styleConfig: TS.SELECT,
          onSelect: this._selectSortBy
        }),
        _react2.default.createElement(_TextField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: function ref(comp) {
            return _this2.fromDate = comp;
          },
          caption: 'From Date',
          initValue: _initFromDate,
          errorMsg: 'YYYY-MM-DD format must be',
          onTest: _onTestDate
        }),
        _react2.default.createElement(_TextField2.default, {
          rootStyle: TS.INPUT_ROOT,
          ref: function ref(comp) {
            return _this2.toDate = comp;
          },
          caption: 'To Date',
          initValue: _initToDate,
          errorMsg: 'YYYY-MM-DD format must be',
          onTest: _onTestDate
        }),
        _react2.default.createElement(
          _PoweredBy2.default,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Links.LinkStackOverflow, null)
        )
      );
    }
  }]);
  return StackTaggedDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(StackTaggedDialog);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\StackTaggedDialog.js.map