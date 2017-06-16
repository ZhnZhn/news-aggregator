'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ModalPane = require('../zhn-moleculs/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PanelQuery = function PanelQuery(_ref) {
  var className = _ref.className,
      isShow = _ref.isShow,
      onClose = _ref.onClose,
      onWebhose = _ref.onWebhose,
      onStackTagged = _ref.onStackTagged;
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
        isShow: isShow
      },
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic',
          onClick: onWebhose
        },
        'Webhose'
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'row__topic',
          onClick: onStackTagged
        },
        'StackOverflow: Tagged Questions'
      )
    )
  );
};

exports.default = PanelQuery;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\header\PanelQuery.js.map