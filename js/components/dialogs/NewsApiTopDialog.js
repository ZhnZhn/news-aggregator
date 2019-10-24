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

var _toFirstUpperCase = require('../../utils/toFirstUpperCase');

var _toFirstUpperCase2 = _interopRequireDefault(_toFirstUpperCase);

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

var _CATEGORY = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    CATEGORY_OPTIONS = _CATEGORY.map(function (str) {
  return {
    caption: (0, _toFirstUpperCase2.default)(str),
    value: str
  };
}),
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    COUNTRY_OPTIONS = [{ caption: "Argentina", value: "ar" }, { caption: "Australia", value: "au" }, { caption: "Austria", value: "at" }, { caption: "Belguim", value: "be" }, { caption: "Brazil", value: "br" }, { caption: "Bulgaria", value: "bg" }, { caption: "Canada", value: "ca" }, { caption: "China", value: "cn" }, { caption: "Colombia", value: "co" }, { caption: "Cuba", value: "cu" }, { caption: "Czechia", value: "cz" }, { caption: "Egypt", value: "eg" }, { caption: "France", value: "fr" }, { caption: "Germany", value: "de" }, { caption: "Greece", value: "gr" }, { caption: "Hong Kong", value: "hk" }, { caption: "Hungary", value: "hu" }, { caption: "India", value: "in" }, { caption: "Indonesia", value: "id" }, { caption: "Ireland", value: "ie" }, { caption: "Israel", value: "il" }, { caption: "Italy", value: "it" }, { caption: "Japan", value: "jp" }, { caption: "Korea (the Republic of)", value: "kr" }, { caption: "Latvia", value: "lv" }, { caption: "Lithuania", value: "lt" }, { caption: "Malaysia", value: "my" }, { caption: "Mexico", value: "mx" }, { caption: "Morocco", value: "ma" }, { caption: "Netherlands", value: "nl" }, { caption: "New Zealand", value: "nz" }, { caption: "Nigeria", value: "ng" }, { caption: "Norway", value: "no" }, { caption: "Phillipines", value: "ph" }, { caption: "Poland", value: "pl" }, { caption: "Portugal", value: "pt" }, { caption: "Romania", value: "ro" }, { caption: "Russian Federation", value: "ru" }, { caption: "Saudi Arabia", value: "sa" }, { caption: "Serbia", value: "rs" }, { caption: "Singapore", value: "sg" }, { caption: "Slovakia", value: "sk" }, { caption: "Slovenia", value: "si" }, { caption: "South Africa", value: "za" }, { caption: "Sweden", value: "se" }, { caption: "Switzerland", value: "ch" }, { caption: "Taiwan (Province of China)", value: "tw" }, { caption: "Thailand", value: "th" }, { caption: "Turkey", value: "tr" }, { caption: "Ukraine", value: "ua" }, { caption: "United Arab Emirates", value: "ae" }, { caption: "United Kingdom", value: "gb" }, { caption: "United States of America", value: "us" }, { caption: "Venezuala", value: "ve" }],
    DF_COUNTRY = COUNTRY_OPTIONS[52];

var NewsApiTopDialog = (0, _withKeyDown2.default)(_class = function (_Component) {
  (0, _inherits3.default)(NewsApiTopDialog, _Component);

  function NewsApiTopDialog(props) {
    (0, _classCallCheck3.default)(this, NewsApiTopDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsApiTopDialog.__proto__ || Object.getPrototypeOf(NewsApiTopDialog)).call(this, props));

    _this._selectCategory = function (option) {
      _this.category = option ? option.value : void 0;
    };

    _this._selectCountry = function (option) {
      _this.country = option ? option.value : void 0;
    };

    _this._handleLoad = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          source = _this$props.source,
          itemConf = _this$props.itemConf,
          onLoad = _this$props.onLoad;


      onLoad({
        type: type, source: source, itemConf: itemConf,
        loadId: 'NT',
        category: _this.category,
        country: _this.country
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

    _this.category = DF_CATEGORY.value;
    _this.country = DF_COUNTRY.value;
    _this._handleKeyDownWith = _this._handleKeyDownWith.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(NewsApiTopDialog, [{
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
          caption: 'NewsApi Top By',
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
            caption: 'Category',
            initItem: DF_CATEGORY,
            options: CATEGORY_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectCategory
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_Comp2.default.InputSelect, {
            caption: 'Country',
            initItem: DF_COUNTRY,
            options: COUNTRY_OPTIONS,
            styleConfig: TS.SELECT,
            onSelect: this._selectCountry
          })
        ),
        _react2.default.createElement(
          _Comp2.default.Link.PoweredBy,
          { rootStyle: S.POWERED_BY },
          _react2.default.createElement(_Comp2.default.Link.NewsApi, null)
        )
      );
    }
  }]);
  return NewsApiTopDialog;
}(_react.Component)) || _class;

exports.default = (0, _withTheme2.default)(NewsApiTopDialog);
//# sourceMappingURL=NewsApiTopDialog.js.map