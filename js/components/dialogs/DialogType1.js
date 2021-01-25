"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _withTheme = _interopRequireDefault(require("../hoc/withTheme"));

var _Dialog = _interopRequireDefault(require("./Dialog.Style"));

var _DraggableDialog = _interopRequireDefault(require("../zhn-moleculs/DraggableDialog"));

var _InputSelect = _interopRequireDefault(require("../zhn-m-input/InputSelect"));

var _RaisedButton = _interopRequireDefault(require("../zhn-atoms/RaisedButton"));

var _withKeyDown = _interopRequireDefault(require("./decorators/withKeyDown"));

var _class, _temp;

var DF_SORTBY = {
  caption: 'Top',
  value: 'top'
};
var options = [{
  caption: 'Top',
  value: 'top'
}, {
  caption: 'Popular',
  value: 'popularity'
}, {
  caption: 'Newest',
  value: 'publishedAt'
}];

var DialogType1 = (0, _withKeyDown["default"])(_class = (_temp = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(DialogType1, _Component);

  function DialogType1(props) {
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
          onLoad = _this$props.onLoad;
      onLoad({
        type: type,
        source: source,
        itemConf: itemConf,
        sortBy: _this.sortBy
      });
    };

    _this._handleClose = function () {
      _this.dialogComp.focusPrevEl();

      _this.props.onClose();
    };

    _this._createCommandButtons = function (S) {
      return [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RaisedButton["default"], {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: "Load",
        isPrimary: true,
        onClick: _this._handleLoad
      }, "_load")];
    };

    _this._refDialogComp = function (comp) {
      return _this.dialogComp = comp;
    };

    _this.sortBy = DF_SORTBY.value;
    _this._handleKeyDownWith = _this._handleKeyDownWith.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  var _proto = DialogType1.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (!this.props.isShow && !nextProps.isShow) {
        return false;
      }
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        isShow = _this$props2.isShow,
        caption = _this$props2.caption,
        theme = _this$props2.theme,
        onShow = _this$props2.onShow,
        S = theme.createStyle(_Dialog["default"]),
        _commandButtons = this._createCommandButtons(S.BT);

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DraggableDialog["default"], {
      ref: this._refDialogComp,
      rootStyle: S.R_DIALOG,
      browserCaptionStyle: S.BROWSER_CAPTION,
      styleButton: S.BT,
      caption: caption,
      isShow: isShow,
      commandButtons: _commandButtons,
      onKeyDown: this._handleKeyDownWith,
      onShowChart: onShow,
      onClose: this._handleClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect["default"], {
        caption: "SortBy",
        initItem: DF_SORTBY,
        options: options,
        styleConfig: S.SELECT,
        onSelect: this._selectSortBy
      })
    });
  };

  return DialogType1;
}(_react.Component), _temp)) || _class;

var _default = (0, _withTheme["default"])(DialogType1);

exports["default"] = _default;
//# sourceMappingURL=DialogType1.js.map