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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _NewsBrowser = require('./NewsBrowser.Style');

var _NewsBrowser2 = _interopRequireDefault(_NewsBrowser);

var _DynamicMenuBrowser = require('../zhn-moleculs/DynamicMenuBrowser');

var _DynamicMenuBrowser2 = _interopRequireDefault(_DynamicMenuBrowser);

var _PoweredBy = require('../links/PoweredBy');

var _PoweredBy2 = _interopRequireDefault(_PoweredBy);

var _Links = require('../links/Links');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsBrowser = function (_Component) {
  (0, _inherits3.default)(NewsBrowser, _Component);

  function NewsBrowser() {
    (0, _classCallCheck3.default)(this, NewsBrowser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (NewsBrowser.__proto__ || Object.getPrototypeOf(NewsBrowser)).call(this));

    _this._onStore = function (actionType, option) {
      var _this$props = _this.props,
          updateAction = _this$props.updateAction,
          browserId = _this$props.browserId;

      if (actionType === updateAction && option.id === browserId) {
        _this.setState({ itemData: option.data });
      }
    };

    _this.state = {
      itemData: {}
    };
    return _this;
  }

  (0, _createClass3.default)(NewsBrowser, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.listen(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          store = _props.store,
          showAction = _props.showAction,
          browserId = _props.browserId,
          theme = _props.theme,
          onClick = _props.onClick,
          onError = _props.onError,
          onClickBadge = _props.onClickBadge,
          S = theme.createStyle(_NewsBrowser2.default);
      var itemData = this.state.itemData;

      return _react2.default.createElement(
        _DynamicMenuBrowser2.default,
        {
          styleConfig: S,
          caption: 'News Sources',
          url: 'data/news-source-menu.json',
          store: store,
          browserId: browserId,
          itemData: itemData,
          showAction: showAction,
          onClick: onClick,
          onError: onError,
          onClickBadge: onClickBadge
        },
        _react2.default.createElement(
          _PoweredBy2.default,
          null,
          _react2.default.createElement(_Links.LinkNewsApi, null)
        )
      );
    }
  }]);
  return NewsBrowser;
}(_react.Component);

exports.default = (0, _withTheme2.default)(NewsBrowser);
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\source-browsers\NewsBrowser.js.map