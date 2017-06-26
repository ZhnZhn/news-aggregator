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

var _ModalPane = require('../zhn-moleculs/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _MenuItem = require('../zhn-atoms/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelQuery = function (_Component) {
  (0, _inherits3.default)(PanelQuery, _Component);

  function PanelQuery() {
    (0, _classCallCheck3.default)(this, PanelQuery);
    return (0, _possibleConstructorReturn3.default)(this, (PanelQuery.__proto__ || Object.getPrototypeOf(PanelQuery)).apply(this, arguments));
  }

  (0, _createClass3.default)(PanelQuery, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props !== prevProps) {
        if (this.props.isShow && !prevProps.isShow) {
          this.prevFocused = document.activeElement;
          this.firstItem.focus();
        } else if (!this.props.isShow && prevProps.isShow) {
          if (this.prevFocused) {
            this.prevFocused.focus();
          }
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          paneStyle = _props.paneStyle,
          isShow = _props.isShow,
          clItem = _props.clItem,
          onClose = _props.onClose,
          onWebhose = _props.onWebhose,
          onStackTagged = _props.onStackTagged,
          onStackSearch = _props.onStackSearch;


      return _react2.default.createElement(
        _ModalPane2.default,
        {
          isShow: isShow,
          onClose: onClose
        },
        _react2.default.createElement(
          _ShowHide2.default,
          {
            className: className,
            style: paneStyle,
            isShow: isShow
          },
          _react2.default.createElement(_MenuItem2.default, {
            ref: function ref(comp) {
              return _this2.firstItem = comp;
            },
            className: clItem,
            caption: 'Webhose',
            onClick: onWebhose,
            onClose: onClose
          }),
          _react2.default.createElement(_MenuItem2.default, {
            className: clItem,
            caption: 'StackOverflow: Tagged Questions',
            onClick: onStackTagged,
            onClose: onClose
          }),
          _react2.default.createElement(_MenuItem2.default, {
            className: clItem,
            caption: 'StackOverflow: Search Questions',
            onClick: onStackSearch,
            onClose: onClose
          })
        )
      );
    }
  }]);
  return PanelQuery;
}(_react.Component);

exports.default = PanelQuery;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\PanelQuery.js.map