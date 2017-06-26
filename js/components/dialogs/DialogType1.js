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

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _InputSelect = require('../zhn-m-input/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _RaisedButton = require('../zhn-atoms/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _withKeyDown = require('./decorators/withKeyDown');

var _withKeyDown2 = _interopRequireDefault(_withKeyDown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DF_SORTBY = { caption: 'Top', value: 'top' };

var options = [{ caption: 'Top', value: 'top' }, { caption: 'Latest', value: 'latest' }, { caption: 'Popular', value: 'popular' }];

var DialogType1 = (0, _withKeyDown2.default)(_class = function (_Component) {
  (0, _inherits3.default)(DialogType1, _Component);

  function DialogType1(props) {
    (0, _classCallCheck3.default)(this, DialogType1);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DialogType1.__proto__ || Object.getPrototypeOf(DialogType1)).call(this));

    _this._selectSortBy = function (option) {
      _this.sortBy = option ? option.value : undefined;
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
      return [_react2.default.createElement(_RaisedButton2.default, {
        rootStyle: S.RAISED_ROOT,
        clDiv: S.CL_RAISED_DIV,
        caption: 'Load',
        isPrimary: true,
        onClick: _this._handleLoad
      })];
    };

    _this.sortBy = DF_SORTBY.value;
    _this._handleKeyDownWith = _this._handleKeyDownWith.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DialogType1, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps) {
        if (!this.props.isShow && !nextProps.isShow) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          isShow = _props.isShow,
          caption = _props.caption,
          theme = _props.theme,
          onShow = _props.onShow,
          S = theme.createStyle(_Dialog2.default),
          _commandButtons = this._createCommandButtons(S.BT);

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          ref: function ref(comp) {
            return _this2.dialogComp = comp;
          },
          rootStyle: S.R_DIALOG,
          browserCaptionStyle: S.BROWSER_CAPTION,
          styleButton: S.BT,
          caption: caption,
          isShow: isShow,
          commandButtons: _commandButtons,
          onKeyDown: this._handleKeyDownWith,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_InputSelect2.default, {
          caption: 'SortBy',
          initItem: DF_SORTBY,
          options: options,
          styleConfig: S.SELECT,
          onSelect: this._selectSortBy
        })
      );
    }
  }]);
  return DialogType1;
}(_react.Component)) || _class;

exports.default = (0, _withTheme2.default)(DialogType1);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\DialogType1.js.map