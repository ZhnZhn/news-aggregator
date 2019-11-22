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

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = "tabpane__tabs";

var S = {
  UL: {
    listStyle: 'outside none none',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5,
    textAlign: 'center'
  },
  TABS: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var TabPane = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TabPane, _Component);

  function TabPane(props) {
    (0, _classCallCheck3.default)(this, TabPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));

    _initialiseProps.call(_this);

    var components = props.children.map(function (tab, index) {
      return _react2.default.cloneElement(tab.props.children, {
        key: 'comp' + index
      });
    });
    _this.state = {
      selectedTabIndex: 0,
      components: components
    };
    return _this;
  }

  (0, _createClass3.default)(TabPane, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          tabsStyle = _props.tabsStyle,
          children = _props.children;

      return _react2.default.createElement(
        'div',
        { style: { width: width, height: height } },
        _react2.default.createElement(
          'ul',
          {
            className: CL,
            style: (0, _extends3.default)({}, S.UL, tabsStyle)
          },
          this._renderTabs(children)
        ),
        _react2.default.createElement(
          'div',
          { style: S.TABS },
          this._renderComponents()
        )
      );
    }
  }, {
    key: 'getSelectedTabIndex',
    value: function getSelectedTabIndex() {
      return this.state.selectedTabIndex;
    }
  }]);
  return TabPane;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._hClickTab = function (index, tabEl) {
    _this2.setState({ selectedTabIndex: index });
    if (_isFn(tabEl.props.onClick)) {
      tabEl.props.onClick();
    }
  };

  this._renderTabs = function (children) {
    var selectedStyle = _this2.props.selectedStyle;
    var selectedTabIndex = _this2.state.selectedTabIndex;

    return children.map(function (tab, index) {
      return _react2.default.cloneElement(tab, {
        key: index,
        onClick: _this2._hClickTab.bind(_this2, index, tab),
        isSelected: index === selectedTabIndex,
        selectedStyle: selectedStyle
      });
    });
  };

  this._renderComponents = function () {
    var _state = _this2.state,
        selectedTabIndex = _state.selectedTabIndex,
        components = _state.components;

    return components.map(function (comp, index) {
      var divStyle = index === selectedTabIndex ? S.TAB_SELECTED : S.NONE;
      return _react2.default.createElement(
        'div',
        { style: divStyle, key: 'a' + index },
        comp
      );
    });
  };
}, _temp);
exports.default = TabPane;
//# sourceMappingURL=TabPane.js.map