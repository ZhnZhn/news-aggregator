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

var _ComponentActions = require('../../flux/actions/ComponentActions');

var _ComponentActions2 = _interopRequireDefault(_ComponentActions);

var _NewsBrowser = require('../source-browsers/NewsBrowser');

var _NewsBrowser2 = _interopRequireDefault(_NewsBrowser);

var _DialogContainer = require('./DialogContainer');

var _DialogContainer2 = _interopRequireDefault(_DialogContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL_MENU_ITEM = "row__news-source";

var onClick = _ComponentActions2.default.showNewsDialog;
var onError = _ComponentActions2.default.showModalDialog.bind(null, 'ALERT_DIALOG');
var onClickBadge = _ComponentActions2.default.toggleNewsPane;

var BrowserContainer = function (_Component) {
  (0, _inherits3.default)(BrowserContainer, _Component);

  function BrowserContainer() {
    (0, _classCallCheck3.default)(this, BrowserContainer);
    return (0, _possibleConstructorReturn3.default)(this, (BrowserContainer.__proto__ || Object.getPrototypeOf(BrowserContainer)).apply(this, arguments));
  }

  (0, _createClass3.default)(BrowserContainer, [{
    key: 'render',
    value: function render() {
      var store = this.props.store;

      return _react2.default.createElement(
        'div',
        { className: 'hrz-container' },
        _react2.default.createElement(_NewsBrowser2.default, {
          store: store,
          showAction: _ComponentActions.TYPES.SHOW_BROWSER,
          updateAction: _ComponentActions.TYPES.UPDATE_BROWSER,
          browserId: 'NEWS_API_ORG',
          rowClass: CL_MENU_ITEM,
          onClick: onClick,
          onError: onError,
          onClickBadge: onClickBadge
        }),
        _react2.default.createElement(_DialogContainer2.default, {
          maxDialog: 3,
          store: store,
          showAction: _ComponentActions.TYPES.SHOW_NEWS_DIALOG
        })
      );
    }
  }]);
  return BrowserContainer;
}(_react.Component);

exports.default = BrowserContainer;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\zhn-containers\BrowserContainer.js.map