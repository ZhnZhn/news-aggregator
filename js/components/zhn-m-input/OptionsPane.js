'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ThemeContext = require('../hoc/ThemeContext');

var _ThemeContext2 = _interopRequireDefault(_ThemeContext);

var _ScrollStyle = require('../styles/ScrollStyle');

var _ScrollStyle2 = _interopRequireDefault(_ScrollStyle);

var _ModalPane = require('../zhn-moleculs/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "with-scroll";

var S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: '20',
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: 'greenyellow'
  }
};

var _renderOptions = function _renderOptions(options, currentItem, clItem, onSelect, isShow) {
  return options.map(function (item) {
    var value = item.value,
        caption = item.caption,
        _style = value === currentItem.value ? S.ITEM : void 0;

    return _react2.default.createElement(
      'div',
      {
        key: value,
        style: _style,
        className: clItem,
        onClick: onSelect.bind(null, item)
      },
      caption
    );
  });
};

var OptionsPane = function OptionsPane(_ref) {
  var isShow = _ref.isShow,
      options = _ref.options,
      item = _ref.item,
      rootStyle = _ref.rootStyle,
      clItem = _ref.clItem,
      onSelect = _ref.onSelect,
      onClose = _ref.onClose;

  var _theme = (0, _react.useContext)(_ThemeContext2.default),
      TS = _theme.createStyle(_ScrollStyle2.default);
  return _react2.default.createElement(
    _ModalPane2.default,
    {
      style: rootStyle,
      isShow: isShow,
      onClose: onClose
    },
    _react2.default.createElement(
      _ShowHide2.default,
      {
        isShow: isShow,
        className: CL + ' ' + TS.CL_SCROLL,
        style: (0, _extends3.default)({}, S.PANE, rootStyle)
      },
      _renderOptions(options, item, clItem, onSelect, isShow)
    )
  );
};

exports.default = OptionsPane;
//# sourceMappingURL=OptionsPane.js.map