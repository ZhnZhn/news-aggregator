"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _toFirstUpperCase = _interopRequireDefault(require("../../utils/toFirstUpperCase"));

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _Decors = _interopRequireDefault(require("./decorators/Decors"));

var _dec, _class, _temp;

var S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

var _CATEGORY = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'],
    CATEGORY_OPTIONS = _CATEGORY.map(function (str) {
  return {
    caption: (0, _toFirstUpperCase["default"])(str),
    value: str
  };
}),
    DF_CATEGORY = CATEGORY_OPTIONS[0],
    COUNTRY_OPTIONS = [{
  caption: "Argentina",
  value: "ar"
}, {
  caption: "Australia",
  value: "au"
}, {
  caption: "Austria",
  value: "at"
}, {
  caption: "Belguim",
  value: "be"
}, {
  caption: "Brazil",
  value: "br"
}, {
  caption: "Bulgaria",
  value: "bg"
}, {
  caption: "Canada",
  value: "ca"
}, {
  caption: "China",
  value: "cn"
}, {
  caption: "Colombia",
  value: "co"
}, {
  caption: "Cuba",
  value: "cu"
}, {
  caption: "Czechia",
  value: "cz"
}, {
  caption: "Egypt",
  value: "eg"
}, {
  caption: "France",
  value: "fr"
}, {
  caption: "Germany",
  value: "de"
}, {
  caption: "Greece",
  value: "gr"
}, {
  caption: "Hong Kong",
  value: "hk"
}, {
  caption: "Hungary",
  value: "hu"
}, {
  caption: "India",
  value: "in"
}, {
  caption: "Indonesia",
  value: "id"
}, {
  caption: "Ireland",
  value: "ie"
}, {
  caption: "Israel",
  value: "il"
}, {
  caption: "Italy",
  value: "it"
}, {
  caption: "Japan",
  value: "jp"
}, {
  caption: "Latvia",
  value: "lv"
}, {
  caption: "Lithuania",
  value: "lt"
}, {
  caption: "Malaysia",
  value: "my"
}, {
  caption: "Mexico",
  value: "mx"
}, {
  caption: "Morocco",
  value: "ma"
}, {
  caption: "Netherlands",
  value: "nl"
}, {
  caption: "New Zealand",
  value: "nz"
}, {
  caption: "Nigeria",
  value: "ng"
}, {
  caption: "Norway",
  value: "no"
}, {
  caption: "Phillipines",
  value: "ph"
}, {
  caption: "Poland",
  value: "pl"
}, {
  caption: "Portugal",
  value: "pt"
}, {
  caption: "Romania",
  value: "ro"
}, {
  caption: "Russian Federation",
  value: "ru"
}, {
  caption: "Saudi Arabia",
  value: "sa"
}, {
  caption: "Serbia",
  value: "rs"
}, {
  caption: "Singapore",
  value: "sg"
}, {
  caption: "Slovakia",
  value: "sk"
}, {
  caption: "Slovenia",
  value: "si"
}, {
  caption: "South Africa",
  value: "za"
}, {
  caption: "South Korea",
  value: "kr"
}, {
  caption: "Sweden",
  value: "se"
}, {
  caption: "Switzerland",
  value: "ch"
}, {
  caption: "Taiwan",
  value: "tw"
}, {
  caption: "Thailand",
  value: "th"
}, {
  caption: "Turkey",
  value: "tr"
}, {
  caption: "Ukraine",
  value: "ua"
}, {
  caption: "United Arab Emirates",
  value: "ae"
}, {
  caption: "United Kingdom",
  value: "gb"
}, {
  caption: "United States",
  value: "us"
}, {
  caption: "Venezuala",
  value: "ve"
}],
    DF_COUNTRY = COUNTRY_OPTIONS[52];

var NewsApiTopDialog = (_dec = _Decors["default"].withDecors, _dec(_class = (_temp =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(NewsApiTopDialog, _Component);

  function NewsApiTopDialog(props) {
    var _this;

    _this = _Component.call(this, props) || this;

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
        type: type,
        source: source,
        itemConf: itemConf,
        loadId: 'NT',
        category: _this.category,
        country: _this.country
      });
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this.category = DF_CATEGORY.value;
    _this.country = DF_COUNTRY.value;

    _this._initWithDecors((0, _assertThisInitialized2["default"])(_this));

    return _this;
  }

  var _proto = NewsApiTopDialog.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        TS = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(TS.BT);

    return _react["default"].createElement(_Comp["default"].DraggableDialog, {
      ref: this._refDialogComp,
      rootStyle: TS.R_DIALOG,
      browserCaptionStyle: TS.BROWSER_CAPTION,
      styleButton: TS.BT,
      caption: "NewsApi Top By",
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose
    }, _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "Category",
      initItem: DF_CATEGORY,
      options: CATEGORY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectCategory
    })), _react["default"].createElement("div", null, _react["default"].createElement(_Comp["default"].InputSelect, {
      caption: "Country",
      initItem: DF_COUNTRY,
      options: COUNTRY_OPTIONS,
      styleConfig: TS.SELECT,
      onSelect: this._selectCountry
    })), _react["default"].createElement(_Comp["default"].Link.PoweredBy, {
      rootStyle: S.POWERED_BY
    }, _react["default"].createElement(_Comp["default"].Link.NewsApi, null)));
  };

  return NewsApiTopDialog;
}(_react.Component), _temp)) || _class);

var _default = (0, _withTheme["default"])(NewsApiTopDialog);

exports["default"] = _default;
//# sourceMappingURL=NewsApiTopDialog.js.map