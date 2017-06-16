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

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputDate = require('../zhn-atoms/InputDate');

var _InputDate2 = _interopRequireDefault(_InputDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ROW_DIV: {
    margin: '5px'
  },
  LABEL_SPAN: {
    color: 'black',
    display: 'inline-block',
    textAlign: 'right',
    width: '110px',
    paddingRight: '5px',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};

var ERROR_FORMAT = "YYYY-MM-DD format must be",
    FROM_DATE = "From Date",
    TO_DATE = "To Date",
    ERROR_FROM_NEAR_TO = "From Date is near that To Date";

var DatesFragment = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(DatesFragment, _Component);

  function DatesFragment() {
    (0, _classCallCheck3.default)(this, DatesFragment);
    return (0, _possibleConstructorReturn3.default)(this, (DatesFragment.__proto__ || Object.getPrototypeOf(DatesFragment)).apply(this, arguments));
  }

  (0, _createClass3.default)(DatesFragment, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          initFromDate = _props.initFromDate,
          initToDate = _props.initToDate,
          onTestDate = _props.onTestDate;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: STYLE.ROW_DIV },
          _react2.default.createElement(
            'span',
            { style: STYLE.LABEL_SPAN },
            'From Date:'
          ),
          _react2.default.createElement(_InputDate2.default, {
            ref: function ref(c) {
              return _this2.fromDate = c;
            },
            initValue: initFromDate,
            errorMsg: ERROR_FORMAT,
            onTest: onTestDate
          })
        ),
        _react2.default.createElement(
          'div',
          { style: STYLE.ROW_DIV },
          _react2.default.createElement(
            'span',
            { style: STYLE.LABEL_SPAN },
            'To Date:'
          ),
          _react2.default.createElement(_InputDate2.default, {
            ref: function ref(c) {
              return _this2.toDate = c;
            },
            initValue: initToDate,
            errorMsg: ERROR_FORMAT,
            onTest: onTestDate
          })
        )
      );
    }
  }, {
    key: 'getValues',
    value: function getValues() {
      return {
        fromDate: this.fromDate.getValue(),
        toDate: this.toDate.getValue()
      };
    }
  }, {
    key: 'setValues',
    value: function setValues(fromDate, toDate) {
      this.fromDate.setValue(fromDate);
      this.toDate.setValue(toDate);
    }
  }, {
    key: 'getValidation',
    value: function getValidation() {
      var msgOnNotValidFormat = this.props.msgOnNotValidFormat,
          datesMsg = [];

      if (!this.fromDate.isValid()) {
        datesMsg.push(msgOnNotValidFormat(FROM_DATE));
      }
      if (!this.toDate.isValid()) {
        datesMsg.push(msgOnNotValidFormat(TO_DATE));
      }

      if (this.fromDate.getValue().trim() > this.toDate.getValue().trim()) {
        datesMsg.push(ERROR_FROM_NEAR_TO);
      }

      if (datesMsg.length > 0) {
        return { isValid: false, datesMsg: datesMsg };
      }
      return { isValid: true };
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.fromDate.focusInput();
    }
  }, {
    key: 'focusNotValidInput',
    value: function focusNotValidInput() {
      if (!this.fromDate.isValid()) {
        this.fromDate.focusInput();
        return true;
      }
      if (!this.toDate.isValid()) {
        this.toDate.focusInput();
        return true;
      }
      return false;
    }
  }]);
  return DatesFragment;
}(_react.Component), _class.defaultProps = {
  msgOnNotValidFormat: function msgOnNotValidFormat(item) {
    return item + ' is not in valid format';
  }
}, _temp);
DatesFragment.propTypes = process.env.NODE_ENV !== "production" ? {
  initFromDate: _propTypes2.default.string,
  initToDate: _propTypes2.default.string,
  onTestDate: _propTypes2.default.func,
  msgOnNotValidFormat: _propTypes2.default.func
} : {};
exports.default = DatesFragment;
//# sourceMappingURL=D:\_Dev\_React\_News\js\components\dialogs\DatesFragment.js.map