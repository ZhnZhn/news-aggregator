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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArrowCell = require('./ArrowCell');

var _ArrowCell2 = _interopRequireDefault(_ArrowCell);

var _OptionsPane = require('./OptionsPane');

var _OptionsPane2 = _interopRequireDefault(_OptionsPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line'
};

var InputSelect = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(InputSelect, _Component);

  function InputSelect(props) {
    (0, _classCallCheck3.default)(this, InputSelect);

    var _this = (0, _possibleConstructorReturn3.default)(this, (InputSelect.__proto__ || Object.getPrototypeOf(InputSelect)).call(this));

    _this._handleOpen = function () {
      _this.setState({ isShow: true });
    };

    _this._handleClose = function () {
      _this.setState({ isShow: false });
    };

    _this._handleSelect = function (item, event) {
      event.stopPropagation();
      _this.props.onSelect(item);
      _this.setState({
        isShow: false,
        item: item
      });
    };

    _this.state = {
      isShow: false,
      item: props.initItem
    };
    return _this;
  }

  (0, _createClass3.default)(InputSelect, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          options = _props.options,
          TS = _props.styleConfig,
          _state = this.state,
          isShow = _state.isShow,
          item = _state.item;


      return _react2.default.createElement(
        'div',
        {
          className: CL.SELECT,
          style: TS.ROOT,
          onClick: this._handleOpen
        },
        _react2.default.createElement(_OptionsPane2.default, {
          rootStyle: TS.MODAL_PANE,
          isShow: isShow,
          item: item,
          options: options,
          clItem: TS.CL_ITEM,
          onSelect: this._handleSelect,
          onClose: this._handleClose
        }),
        _react2.default.createElement(
          'label',
          { className: CL.LABEL },
          caption
        ),
        _react2.default.createElement(
          'div',
          { className: CL.DIV },
          _react2.default.createElement(
            'div',
            { className: CL.DIV_VALUE },
            item.caption
          ),
          _react2.default.createElement(
            'button',
            { className: CL.DIV_BT, tabIndex: '0' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_ArrowCell2.default, null)
            )
          ),
          _react2.default.createElement('div', { className: CL.INPUT_LINE })
        )
      );
    }
  }]);
  return InputSelect;
}(_react.Component), _class.defaultProps = {
  initItem: {
    caption: '',
    value: ''
  }
}, _temp);
exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map