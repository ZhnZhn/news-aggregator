'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _CaptionInput = require('../zhn-atoms/CaptionInput');

var _CaptionInput2 = _interopRequireDefault(_CaptionInput);

var _InputText = require('../zhn-atoms/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  INPUT: {
    width: '250px',
    marginLeft: '0px',
    height: '30px',
    paddingLeft: '10px'
  }
};

var RowInputText = function (_Component) {
  (0, _inherits3.default)(RowInputText, _Component);

  function RowInputText() {
    (0, _classCallCheck3.default)(this, RowInputText);
    return (0, _possibleConstructorReturn3.default)(this, (RowInputText.__proto__ || Object.getPrototypeOf(RowInputText)).apply(this, arguments));
  }

  (0, _createClass3.default)(RowInputText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          caption = _props.caption,
          accessKey = _props.accessKey,
          rest = (0, _objectWithoutProperties3.default)(_props, ['caption', 'accessKey']);

      return _react2.default.createElement(
        'div',
        { style: _DialogStyles2.default.rowDiv },
        _react2.default.createElement(
          'label',
          { accessKey: accessKey },
          _react2.default.createElement(_CaptionInput2.default, {
            rootStyle: _DialogStyles2.default.labelSpan,
            caption: caption,
            accessKey: accessKey
          }),
          _react2.default.createElement(_InputText2.default, (0, _extends3.default)({
            style: S.INPUT
          }, rest))
        )
      );
    }
  }]);
  return RowInputText;
}(_react.Component);

exports.default = RowInputText;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\RowInputText.js.map