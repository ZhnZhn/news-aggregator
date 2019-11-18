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

var SORT_BY_OPTIONS = [{ caption: "Relevancy", value: "relevancy" }, { caption: "Popularity", value: "popularity" }, { caption: "PublishedAt", value: "publishedAt" }],
    DF_SORT_BY = SORT_BY_OPTIONS[0];

var NewsApiSearchDialog = (_dec = _Decors2.default.withDecors, _dec(_class = function (_Component) {
  (0, _inherits3.default)(NewsApiSearchDialog, _Component);

  function NewsApiSearchDialog(props) {
    (0, _classCallCheck3.default)(this, NewsApiSearchDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsApiSearchDialog.__proto__ || Object.getPrototypeOf(NewsApiSearchDialog)).call(this, props));

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad,
          _symbol = _this.inputSymbol.getValue();

      onLoad({
        type: type, source: source, itemConf: itemConf,
        loadId: 'NS',
        symbol: _symbol,
        sortBy: _this.sortBy
      });
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this._refInputSymbol = function (comp) {
      return _this.inputSymbol = comp;
    };

    _this.sortBy = DF_SORT_BY.value;
    _this._initWithDecors(_this);
    return _this;
  }

  (0, _createClass3.default)(NewsApiSearchDialog, [{
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
          caption: 'NewsApi Search',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_Comp2.default.TextField, {
          rootStyle: TS.INPUT_ROOT,
          ref: this._refInputSymbol,
          caption: 'Term (Default: Weather)',
          initValue: 'Weather'
        }),
        _react2.default.createElement(_Comp2.default.InputSelect, {
          caption: 'SortBy',
          initItem: DF_SORT_BY,
          options: SORT_BY_OPTIONS,
          styleConfig: TS.SELECT,
          onSelect: this._selectSortBy
        }),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.NewsApi, null)
        )
      );
    }
  }]);
  return NewsApiSearchDialog;
}(_react.Component)) || _class);
exports.default = (0, _withTheme2.default)(NewsApiSearchDialog);
//# sourceMappingURL=NewsApiSearchDialog.js.map