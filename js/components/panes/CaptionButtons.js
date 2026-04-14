"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useMqlOnChange = _interopRequireDefault(require("../hooks/useMqlOnChange"));
var _FlexToken = require("../zhn/FlexToken");
var _FlatButton = _interopRequireDefault(require("../zhn-bt/FlatButton"));
var _SvgCloseAll = _interopRequireDefault(require("../zhn/svg/SvgCloseAll"));
var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));
var _DP = require("../DP");
var _ResizeWidth = require("./ResizeWidth");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BT_REMOVE = {
    width: 36,
    marginLeft: 10
  },
  S_SVG_RESIZE = {
    position: 'relative'
  };

//is width >= 450px
const MEDIA_QUERY = '(min-width: 450px)',
  _crMatchMedia = mediaQuery => window.matchMedia ? window.matchMedia(mediaQuery) : void 0,
  MQL = _crMatchMedia(MEDIA_QUERY),
  _crInitialState = () => _crMatchMedia(MEDIA_QUERY)?.matches;
const CaptionButtons = props => {
  const [is, setIs] = (0, _uiApi.useState)(_crInitialState);
  (0, _useMqlOnChange.default)(MQL, evt => {
    setIs(evt.matches);
  });
  return is ? (0, _jsxRuntime.jsxs)(_FlexToken.InlineFlexStart, {
    children: [(0, _jsxRuntime.jsx)(_FlatButton.default, {
      ariaLabel: "Remove items [r]",
      dataPos: _DP.DP_BT_REMOVE_ITEMS,
      className: "bt-hf",
      style: S_BT_REMOVE,
      onClick: props.onRemoveItems,
      children: (0, _jsxRuntime.jsx)(_SvgCloseAll.default, {
        className: "svg-close-all"
      })
    }), (0, _jsxRuntime.jsx)(_SvgHrzResize.default, {
      elementRef: props.refRootDiv,
      style: S_SVG_RESIZE,
      initWidth: _ResizeWidth.RESIZE_INIT_WIDTH,
      minWidth: _ResizeWidth.RESIZE_MIN_WIDTH,
      maxWidth: _ResizeWidth.RESIZE_MAX_WIDTH,
      onPlusWidth: props.onPlusWidth,
      onMinusWidth: props.onMinusWidth
    })]
  }) : null;
};
var _default = exports.default = CaptionButtons;
//# sourceMappingURL=CaptionButtons.js.map