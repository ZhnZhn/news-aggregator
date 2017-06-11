'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CaptionInput = require('../zhn-atoms/CaptionInput');

var _CaptionInput2 = _interopRequireDefault(_CaptionInput);

var _InputSelect = require('../zhn-select/InputSelect');

var _InputSelect2 = _interopRequireDefault(_InputSelect);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowInputSelect = function RowInputSelect(_ref) {
   var caption = _ref.caption,
       accessKey = _ref.accessKey,
       rest = (0, _objectWithoutProperties3.default)(_ref, ['caption', 'accessKey']);
   return _react2.default.createElement(
      'div',
      { style: _DialogStyles2.default.rowDiv },
      _react2.default.createElement(
         'label',
         { accessKey: accessKey },
         _react2.default.createElement(_CaptionInput2.default, {
            rootStyle: _DialogStyles2.default.labelSpan,
            caption: caption,
            accessKey: accessKey
         }),
         _react2.default.createElement(_InputSelect2.default, (0, _extends3.default)({
            width: '250'
         }, rest))
      )
   );
};

exports.default = RowInputSelect;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\RowInputSelect.js.map