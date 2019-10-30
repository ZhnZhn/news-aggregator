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

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('./Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _withKeyDown = require('./decorators/withKeyDown');

var _withKeyDown2 = _interopRequireDefault(_withKeyDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

var SORTBY_OPTIONS = [{ caption: 'Latest', value: 'latest' }, { caption: 'Popular', value: 'popular' }],
    DF_SORTBY = SORTBY_OPTIONS[0];

var CryptoCompareNewsDialog = (0, _withKeyDown2.default)(_class = function (_Component) {
  (0, _inherits3.default)(CryptoCompareNewsDialog, _Component);

  function CryptoCompareNewsDialog(props) {
    (0, _classCallCheck3.default)(this, CryptoCompareNewsDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CryptoCompareNewsDialog.__proto__ || Object.getPrototypeOf(CryptoCompareNewsDialog)).call(this, props));

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad;


      onLoad({
        type: type, source: source, itemConf: itemConf,
        loadId: 'CCN',
        sortOrder: _this.sortBy

      });
    };

    _this._handleClose = function () {
      _this.dialogComp.focusPrevEl();
      _this.props.onClose();
    };

    _this._createCommandButtons = function (S) {
      return [_react2.default.createElement(_Comp2.default.RaisedButton, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Load',
        isPrimary: true,
        onClick: _this._handleLoad
      })];
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this.sortBy = DF_SORTBY.value;
    _this._handleKeyDownWith = _this._handleKeyDownWith.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(CryptoCompareNewsDialog, [{
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
          caption: 'CryptoCompare News',
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.InputSelect, {
            caption: 'SortBy',
            initItem: DF_SORTBY,
            options: SORTBY_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectSortBy
          })
        ),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.CryptoCompare, null)
        )
      );
    }
  }]);
  return CryptoCompareNewsDialog;
}(_react.Component)) || _class;

exports.default = (0, _withTheme2.default)(CryptoCompareNewsDialog);
//# sourceMappingURL=CryptoCompareNewsDialog.js.map