'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _About = require('./About.Style');

var _About2 = _interopRequireDefault(_About);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyle = require('../styles/ContainerStyle');

var _ContainerStyle2 = _interopRequireDefault(_ContainerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SHOW = "show-popup";

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));

    _this._onStore = function (actionType, data) {
      var _this$props = _this.props,
          showAction = _this$props.showAction,
          hideAction = _this$props.hideAction;

      switch (actionType) {
        case showAction:
          _this.setState({ isShow: true });
          break;
        case hideAction:
          _this.setState({ isShow: false });
          break;
        default:
          return void 0;
      }
    };

    _this._handleClose = function () {
      _this.setState({ isShow: false });
    };

    _this.state = {
      isShow: props.isInitShow
    };
    return _this;
  }

  (0, _createClass3.default)(About, [{
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
      var theme = this.props.theme,
          S = theme.createStyle(_About2.default),
          isShow = this.state.isShow,
          _rootClass = isShow ? CL_SHOW : null,
          _rootStyle = isShow ? S.BLOCK : S.NONE;

      return _react2.default.createElement(
        'div',
        {
          className: _rootClass,
          style: (0, _extends3.default)({}, _ContainerStyle2.default.aboutRootDiv, _rootStyle, S.ROOT)
        },
        _react2.default.createElement(_Comp2.default.BrowserCaption, {
          rootStyle: S.BROWSER_CAPTION,
          caption: 'About News Aggregator',
          onClose: this._handleClose
        }),
        _react2.default.createElement(
          _Comp2.default.ScrollPane,
          {
            className: S.CL_SCROLL_PANE,
            style: S.SCROLL_DIV
          },
          _react2.default.createElement(
            'div',
            { style: S.DIV_WRAPPER },
            _react2.default.createElement(
              'div',
              { style: S.DIV_TEXT },
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  { style: S.APP_TITLE },
                  'News Agreggator'
                ),
                ' is web app for browsing news.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'News headlines providers:\xA0'
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Comp2.default.Link.CryptoCompare, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Comp2.default.Link.IexApi, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Comp2.default.Link.NewsApi, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Comp2.default.Link.StackOverflow, null)
              ),
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Comp2.default.Link.WebhoseIo, null)
              ),
              _react2.default.createElement(
                'p',
                { style: S.MARGIN_TOP },
                'Personal API Keys from providers are required.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'API Keys can be set by means off Settings Dialog.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(
                'span',
                { style: S.BLACK },
                'Browsing by new source:'
              )
            ),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '1',
              description: 'Please, click button News in header.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '2',
              description: 'Choose a topic and news source.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '3',
              description: 'Click a button Load in dialog.'
            }),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              'Not all news source support all sortBy values.'
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(
                'span',
                { style: S.BLACK },
                'Browsing by search terms:'
              )
            ),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '1',
              description: 'Please, click button Query in header.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '2',
              description: 'Choose news source in modal pane.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '3',
              description: 'Click a button Load in dialog.'
            }),
            _react2.default.createElement(_IconLogoBar2.default, null),
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'span',
                { style: S.BLACK },
                '*Logos Fair Use.'
              )
            )
          )
        )
      );
    }
  }]);
  return About;
}(_react.Component);

exports.default = (0, _withTheme2.default)(About);
//# sourceMappingURL=About.js.map