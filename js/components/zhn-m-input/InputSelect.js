"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _ArrowCell = _interopRequireDefault(require("./ArrowCell"));

var _OptionsPane = _interopRequireDefault(require("./OptionsPane"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  SELECT: 'm-select',
  LABEL: 'm-select__label',
  DIV: 'm-select__div',
  DIV_VALUE: 'm-select__div__value',
  DIV_BT: 'm-select__div__bt',
  INPUT_LINE: 'm-select__line'
};

var InputSelect = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(InputSelect, _Component);

  function InputSelect(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleOpen = function () {
      _this.setState({
        isShow: true
      });
    };

    _this._handleClose = function () {
      _this.setState({
        isShow: false
      });
    };

    _this._handleSelect = function (item, event) {
      event.stopPropagation();

      _this.props.onSelect(item);

      _this.setState({
        isShow: false,
        item: item
      });
    };

    _this.state = {
      isShow: false,
      item: props.initItem
    };
    return _this;
  }

  var _proto = InputSelect.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        caption = _this$props.caption,
        options = _this$props.options,
        TS = _this$props.styleConfig,
        _this$state = this.state,
        isShow = _this$state.isShow,
        item = _this$state.item;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: CL.SELECT,
      style: TS.ROOT,
      onClick: this._handleOpen,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionsPane["default"], {
        rootStyle: TS.MODAL_PANE,
        isShow: isShow,
        item: item,
        options: options,
        clItem: TS.CL_ITEM,
        onSelect: this._handleSelect,
        onClose: this._handleClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
        className: CL.LABEL,
        children: caption
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: CL.DIV,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.DIV_VALUE,
          children: item.caption
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: CL.DIV_BT,
          tabIndex: "0",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ArrowCell["default"], {})
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: CL.INPUT_LINE
        })]
      })]
    });
  };

  return InputSelect;
}(_react.Component);

InputSelect.defaultProps = {
  initItem: {
    caption: '',
    value: ''
  }
};
var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map