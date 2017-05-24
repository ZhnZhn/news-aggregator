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

var _DynamicMenuBrowser = require('../zhn-moleculs/DynamicMenuBrowser');

var _DynamicMenuBrowser2 = _interopRequireDefault(_DynamicMenuBrowser);

var _LinkNewsApi = require('../links/LinkNewsApi');

var _LinkNewsApi2 = _interopRequireDefault(_LinkNewsApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BOTTOM: {
    marginTop: '16px',
    marginLeft: '8px'
  },
  TEXT: {
    color: 'black'
  }
};

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
          rowClass = _props.rowClass,
          store = _props.store,
          showAction = _props.showAction,
          browserId = _props.browserId,
          onClick = _props.onClick,
          onError = _props.onError,
          onClickBadge = _props.onClickBadge;
      var itemData = this.state.itemData;

      return _react2.default.createElement(
        _DynamicMenuBrowser2.default,
        {
          caption: 'News Sources',
          url: 'data/news-source-menu.json',
          rowClass: rowClass,
          store: store,
          browserId: browserId,
          itemData: itemData,
          showAction: showAction,
          onClick: onClick,
          onError: onError,
          onClickBadge: onClickBadge
        },
        _react2.default.createElement(
          'div',
          { style: S.BOTTOM },
          _react2.default.createElement(
            'span',
            { style: S.TEXT },
            'Powered by\xA0\xA0'
          ),
          _react2.default.createElement(_LinkNewsApi2.default, null)
        )
      );
    }
  }]);
  return NewsBrowser;
}(_react.Component);

/*
const NewsBrowser = ({
  menuModel, rowClass, store, showAction, onClick, onError
}) => {
  return (
    <DynamicMenuBrowser
       caption="News Sources"
       url="data/news-source-menu.json"
       rowClass={rowClass}
       store={store}
       browserId="NEWS-API-ORG"
       showAction={showAction}
       onClick={onClick}
       onError={onError}
    >
       <div style={S.BOTTOM}>
         <span style={S.TEXT}>Powered by&nbsp;&nbsp;</span>
         <LinkNewsApi />
       </div>
    </DynamicMenuBrowser>
  );
}
*/

exports.default = NewsBrowser;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\source-browsers\NewsBrowser.js.map