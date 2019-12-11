"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _utils = _interopRequireDefault(require("./utils"));

var S = {
  ROOT: {
    zIndex: 1030,
    position: 'absolute',
    top: 70,
    left: 10,
    width: '99%'
  }
};
var isInCont = _utils["default"].isInCont;

var _doVisible = function _doVisible(arr, keyValue) {
  var index,
      max = arr.length,
      i;

  for (i = 0; i < max; i++) {
    if (arr[i].key === keyValue) {
      index = i;
      break;
    }
  }

  return [].concat(arr.slice(0, index), arr.slice(index + 1), [arr[index]]);
};

var _updateVisible = function _updateVisible(state, key, maxDialog) {
  var hmIs = state.hmIs;

  if (!hmIs[key]) {
    var visibleDialogs = state.visibleDialogs;
    hmIs[key] = true;
    visibleDialogs.push(key);

    if (visibleDialogs.length > maxDialog) {
      hmIs[visibleDialogs[0]] = false;
      visibleDialogs = visibleDialogs.slice(1);
    }
  }
};

var DialogContainer =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(DialogContainer, _Component);

  function DialogContainer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.elHtml = document.getElementsByTagName('html')[0];
    _this.state = {
      hmIs: {},
      compDialogs: [],
      visibleDialogs: []
    };

    _this._onStore = function (actionType, option) {
      var showAction = _this.props.showAction;

      if (actionType === showAction) {
        _this.setState(function (prevState) {
          var key = option.key,
              Comp = option.Comp,
              maxDialog = _this.props.maxDialog;

          _updateVisible(prevState, key, maxDialog);

          if (!Comp) {
            prevState.compDialogs = _doVisible(prevState.compDialogs, key);
          } else if (!isInCont(prevState.compDialogs, Comp)) {
            prevState.compDialogs.push(Comp);
          }

          return prevState;
        });
      }
    };

    _this._hCloseDialog = function (key) {
      _this.setState(function (prevState) {
        var hmIs = prevState.hmIs,
            visibleDialogs = prevState.visibleDialogs;
        hmIs[key] = false;
        prevState.visibleDialogs = visibleDialogs.filter(function (value) {
          return value !== key;
        });
        _this.elHtml.style.cursor = '';
        return prevState;
      });
    };

    _this._renderDialogs = function () {
      var _this$state = _this.state,
          hmIs = _this$state.hmIs,
          compDialogs = _this$state.compDialogs;
      return compDialogs.map(function (Comp) {
        var key = Comp.key;
        return _react["default"].cloneElement(Comp, {
          key: key,
          isShow: hmIs[key],
          onClose: _this._hCloseDialog.bind((0, _assertThisInitialized2["default"])(_this), key)
        });
      });
    };

    return _this;
  }

  var _proto = DialogContainer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.unsubscribe = this.props.store.listen(this._onStore);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unsubscribe();
  };

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      style: S.ROOT
    }, this._renderDialogs());
  };

  return DialogContainer;
}(_react.Component);

var _default = DialogContainer;
exports["default"] = _default;
//# sourceMappingURL=DialogContainer.js.map