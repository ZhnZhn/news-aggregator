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

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

var _ActionButton = require('../zhn-atoms/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var options = [{ caption: 'top', value: 'top' }, { caption: 'latest', value: 'latest' }, { caption: 'popular', value: 'popular' }];

var DialogType1 = function (_Component) {
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
      _this.props.onClose();
    };

    _this.sortBy = undefined;
    _this.commandButtons = [_react2.default.createElement(_ActionButton2.default, {
      type: 'TypeC',
      caption: 'Load',
      onClick: _this._handleLoad
    })];
    return _this;
  }

  (0, _createClass3.default)(DialogType1, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          caption = _props.caption,
          onShow = _props.onShow;

      return _react2.default.createElement(
        _DraggableDialog2.default,
        {
          caption: caption,
          isShow: isShow,
          commandButtons: this.commandButtons,
          onShowChart: onShow,
          onClose: this._handleClose
        },
        _react2.default.createElement(_RowInputSelect2.default, {
          accessKey: 's',
          caption: 'SortBy:',
          placeholder: 'Default: top',
          options: options,
          onSelect: this._selectSortBy
        })
      );
    }
  }]);
  return DialogType1;
}(_react.Component);

exports.default = DialogType1;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\DialogType1.js.map