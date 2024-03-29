"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useMqlOnChange = _interopRequireDefault(require("../hooks/useMqlOnChange"));
var _FlexToken = require("../zhn-atoms/FlexToken");
var _CircleButton = _interopRequireDefault(require("../zhn-bt/CircleButton"));
var _SvgHrzResize = _interopRequireDefault(require("../zhn-resize/SvgHrzResize"));
var _DP = require("../DP");
var _ResizeWidth = require("./ResizeWidth");
var _hotKeys = require("./hotKeys");
var _jsxRuntime = require("preact/jsx-runtime");
const S_BT_REMOVE = {
    position: 'relative',
    margin: '0 3px 0 12px'
    //top: -1
  },
  S_SVG_RESIZE = {
    position: 'relative'
    //top: -3
  };

//is width >= 450px
const MEDIA_QUERY = '(min-width: 450px)',
  _crMatchMedia = mediaQuery => window.matchMedia ? window.matchMedia(mediaQuery) : void 0,
  MQL = _crMatchMedia(MEDIA_QUERY),
  _crInitialState = () => {
    const _mql = _crMatchMedia(MEDIA_QUERY);
    return _mql && _mql.matches;
  };
const CaptionButtons = _ref => {
  let {
    refRootDiv,
    onRemoveItems,
    onPlusWidth,
    onMinusWidth
  } = _ref;
  const [is, setIs] = (0, _uiApi.useState)(_crInitialState);
  (0, _useMqlOnChange.default)(MQL, evt => {
    setIs(evt.matches);
  });
  return is ? (0, _jsxRuntime.jsxs)(_FlexToken.InlineFlexStart, {
    children: [(0, _jsxRuntime.jsx)(_CircleButton.default, {
      ariaLabel: "Remove Items [r]",
      dataPos: _DP.DP_BT_REMOVE_ITEMS,
      caption: _hotKeys.HK_REMOVE_ITEMS,
      style: S_BT_REMOVE,
      onClick: onRemoveItems
    }), (0, _jsxRuntime.jsx)(_SvgHrzResize.default, {
      elementRef: refRootDiv,
      style: S_SVG_RESIZE,
      initWidth: _ResizeWidth.RESIZE_INIT_WIDTH,
      minWidth: _ResizeWidth.RESIZE_MIN_WIDTH,
      maxWidth: _ResizeWidth.RESIZE_MAX_WIDTH,
      onPlusWidth: onPlusWidth,
      onMinusWidth: onMinusWidth
    })]
  }) : null;
};
var _default = exports.default = CaptionButtons;
//# sourceMappingURL=CaptionButtons.js.map