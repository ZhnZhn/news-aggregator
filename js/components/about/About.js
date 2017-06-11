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

var _ScrollPane = require('../zhn-atoms/ScrollPane');

var _ScrollPane2 = _interopRequireDefault(_ScrollPane);

var _BrowserCaption = require('../zhn-atoms/BrowserCaption');

var _BrowserCaption2 = _interopRequireDefault(_BrowserCaption);

var _LinkNewsApi = require('../links/LinkNewsApi');

var _LinkNewsApi2 = _interopRequireDefault(_LinkNewsApi);

var _LinkWebhoseIo = require('../links/LinkWebhoseIo');

var _LinkWebhoseIo2 = _interopRequireDefault(_LinkWebhoseIo);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _IconLogoBar = require('./IconLogoBar');

var _IconLogoBar2 = _interopRequireDefault(_IconLogoBar);

var _ContainerStyle = require('../styles/ContainerStyle');

var _ContainerStyle2 = _interopRequireDefault(_ContainerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_SHOW = "show-popup";

var S = {
  SCROLL_DIV: {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  DIV_WRAPPER: {
    paddingLeft: '12px',
    paddingRight: '5px',
    lineHeight: 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: '3px'
  },
  BLACK: {
    color: 'black'
  },
  MARGIN_TOP: {
    marginTop: '8px'
  },
  PROVIDER: {
    color: '#009AE5'
  }
};

var About = function (_Component) {
  (0, _inherits3.default)(About, _Component);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this));

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
          return undefined;
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
      var isShow = this.state.isShow,
          _rootClass = isShow ? CL_SHOW : null,
          _rootStyle = isShow ? S.BLOCK : S.NONE;

      return _react2.default.createElement(
        'div',
        {
          className: _rootClass,
          style: (0, _extends3.default)({}, _ContainerStyle2.default.aboutRootDiv, _rootStyle)
        },
        _react2.default.createElement(_BrowserCaption2.default, {
          caption: 'About',
          onClose: this._handleClose
        }),
        _react2.default.createElement(
          _ScrollPane2.default,
          { style: S.SCROLL_DIV },
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
                ' is RESTFul client for reading news.'
              ),
              _react2.default.createElement(
                'p',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  'News headline provider:\xA0'
                ),
                _react2.default.createElement(_LinkNewsApi2.default, null),
                _react2.default.createElement(
                  'span',
                  null,
                  ',\xA0'
                ),
                _react2.default.createElement(_LinkWebhoseIo2.default, null),
                _react2.default.createElement(
                  'span',
                  null,
                  '.'
                )
              ),
              _react2.default.createElement(
                'p',
                { style: S.MARGIN_TOP },
                'Provider\'s API Key is required for using app, can be set in Settings Dialog.'
              )
            ),
            _react2.default.createElement(
              'p',
              { style: S.MARGIN_TOP },
              _react2.default.createElement(
                'span',
                { style: S.BLACK },
                'For\xA0'
              ),
              _react2.default.createElement(
                'span',
                { style: S.PROVIDER },
                'NewsApi:'
              )
            ),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '1',
              description: 'Choose a news source in News Providers.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '2',
              description: 'Select sortBy in draggable Dialog.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '3',
              description: 'Click a button Load in Dialog.'
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
                'For\xA0'
              ),
              _react2.default.createElement(
                'span',
                { style: S.PROVIDER },
                'Webhose:'
              )
            ),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '1',
              description: 'Click button Query.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '2',
              description: 'Enter and choose parameters in Dialog.'
            }),
            _react2.default.createElement(_Step2.default, {
              styleRoot: S.STEP,
              step: '3',
              description: 'Click a button Load in Dialog.'
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

exports.default = About;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\about\About.js.map