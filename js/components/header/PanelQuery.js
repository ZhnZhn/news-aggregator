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

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_ITEM = 'row__topic';

var PanelQuery = function (_Component) {
  (0, _inherits3.default)(PanelQuery, _Component);

  function PanelQuery() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PanelQuery);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PanelQuery.__proto__ || Object.getPrototypeOf(PanelQuery)).call.apply(_ref, [this].concat(args))), _this), _this._refFirstItem = function (comp) {
      return _this.firstItem = comp;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
      var _props = this.props,
          className = _props.className,
          paneStyle = _props.paneStyle,
          isShow = _props.isShow,
          onIex = _props.onIex,
          onNewsApi = _props.onNewsApi,
          onStackTagged = _props.onStackTagged,
          onStackSearch = _props.onStackSearch,
          onWebhose = _props.onWebhose,
          onWebhoseBrodcast = _props.onWebhoseBrodcast,
          onClose = _props.onClose;


      return _react2.default.createElement(
        _Comp2.default.ModalPane,
        {
          isShow: isShow,
          onClose: onClose
        },
        _react2.default.createElement(
          _Comp2.default.ShowHide,
          {
            className: className,
            style: paneStyle,
            isShow: isShow
          },
          _react2.default.createElement(_Comp2.default.MenuItem, {
            ref: this._refFirstItem,
            className: CL_ITEM,
            caption: 'IEX Cloud: Stock News',
            onClick: onIex,
            onClose: onClose
          }),
          _react2.default.createElement(_Comp2.default.MenuItem, {
            className: CL_ITEM,
            caption: 'NewsApi: Search',
            onClick: onNewsApi,
            onClose: onClose
          }),
          _react2.default.createElement(_Comp2.default.MenuItem, {
            className: CL_ITEM,
            caption: 'StackOverflow: Tagged Questions',
            onClick: onStackTagged,
            onClose: onClose
          }),
          _react2.default.createElement(_Comp2.default.MenuItem, {
            className: CL_ITEM,
            caption: 'StackOverflow: Search Questions',
            onClick: onStackSearch,
            onClose: onClose
          }),
          _react2.default.createElement(_Comp2.default.MenuItem, {
            className: CL_ITEM,
            caption: 'Webhose: Broadcast',
            onClick: onWebhoseBrodcast,
            onClose: onClose
          }),
          _react2.default.createElement(_Comp2.default.MenuItem, {
            className: CL_ITEM,
            caption: 'Webhose: News, Blogs',
            onClick: onWebhose,
            onClose: onClose
          })
        )
      );
    }
  }]);
  return PanelQuery;
}(_react.Component);

exports.default = PanelQuery;
//# sourceMappingURL=PanelQuery.js.map