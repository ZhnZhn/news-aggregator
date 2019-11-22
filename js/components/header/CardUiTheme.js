'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Comp = require('../Comp');

var _Comp2 = _interopRequireDefault(_Comp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT_DIV: {
    paddingTop: 16
  }
};

var THEME_OPTIONS = [{ caption: 'Grey', value: 'GREY' }, { caption: 'White', value: 'WHITE' }, { caption: 'Sand', value: 'SAND' }],
    DF_THEME = THEME_OPTIONS[0];

var CardUiTheme = function CardUiTheme(_ref) {
  var style = _ref.style,
      buttonsStyle = _ref.buttonsStyle,
      styleConfig = _ref.styleConfig,
      TS = _ref.TS,
      onSetTheme = _ref.onSetTheme,
      onClose = _ref.onClose;
  return _react2.default.createElement(
    'div',
    { style: (0, _extends3.default)({}, S.ROOT_DIV, style) },
    _react2.default.createElement(_Comp2.default.InputSelect, {
      styleConfig: styleConfig,
      caption: 'Theme (Default: Grey)',
      initItem: DF_THEME,
      options: THEME_OPTIONS,
      onSelect: onSetTheme
    }),
    _react2.default.createElement(
      'div',
      { style: buttonsStyle },
      _react2.default.createElement(_Comp2.default.RaisedButton, {
        rootStyle: TS.BT.RAISED_ROOT,
        clDiv: TS.BT.CL_RAISED_DIV,
        isPrimary: true,
        caption: 'Close',
        onClick: onClose
      })
    )
  );
};

exports.default = CardUiTheme;
//# sourceMappingURL=CardUiTheme.js.map