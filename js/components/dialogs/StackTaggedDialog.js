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

var _dt = require('../../utils/dt');

var _dt2 = _interopRequireDefault(_dt);

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _PoweredBy = require('../links/PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Links = require('../links/Links');

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _DatesFragment = require('./DatesFragment');

var _DatesFragment2 = _interopRequireDefault(_DatesFragment);

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

var _sortByOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Hot Tab", value: "hot" }, { caption: "Hot Week Tab", value: "week" }, { caption: "Hot Month Tab", value: "month" }];

var StackTaggedDialog = function (_Component) {
  (0, _inherits3.default)(StackTaggedDialog, _Component);

  function StackTaggedDialog(props) {
    (0, _classCallCheck3.default)(this, StackTaggedDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackTaggedDialog.__proto__ || Object.getPrototypeOf(StackTaggedDialog)).call(this));

    _this._regInput = function (propName, inputComp) {
      _this[propName] = inputComp;
    };

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
          _this$datesFragment$g = _this.datesFragment.getValues(),
          fromDate = _this$datesFragment$g.fromDate,
          toDate = _this$datesFragment$g.toDate,
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

    _this.siteType = undefined;
    _this.commandButtons = [_react2.default.createElement(_ActionButton2.default, {
      type: 'TypeC',
      caption: 'Load',
      onClick: _this._handleLoad
    })];
    return _this;
  }

  (0, _createClass3.default)(StackTaggedDialog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          onShow = _props.onShow;

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          caption: 'Tagged Questions',
          isShow: isShow,
          commandButtons: this.commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_RowInputText2.default, {
          accessKey: 't',
          caption: 'Tag:',
          placeholder: 'Default: css',
          spellCheck: true,
          autoCorrect: 'on',
          autoComplete: 'on',
          onReg: this._regInput.bind(null, 'inputTag')
        }),
        _react2.default.createElement(_RowInputSelect2.default, {
          accessKey: 's',
          caption: 'SortBy:',
          placeholder: 'Default: Hot Week Tab',
          options: _sortByOptions,
          onSelect: this._selectSortBy
        }),
        _react2.default.createElement(_DatesFragment2.default, {
          ref: function ref(c) {
            return _this2.datesFragment = c;
          },
          initFromDate: _initFromDate,
          initToDate: _initToDate,
          onTestDate: _onTestDate
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

exports.default = StackTaggedDialog;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\StackTaggedDialog.js.map