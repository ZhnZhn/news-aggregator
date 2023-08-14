"use strict";

exports.__esModule = true;
exports.default = void 0;
var _crStyle = require("../zhn-utils/crStyle");
var _jsxRuntime = require("preact/jsx-runtime");
//import PropTypes from 'prop-types'

const CL_SHOW = 'show-popup',
  S_BROWSER = {
    flexShrink: 0,
    zIndex: 20,
    backgroundColor: '#4d4d4d',
    position: 'relative',
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    minWidth: 270,
    maxWidth: 400,
    marginLeft: 10,
    padding: '0px 3px 35px 0px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderRadius: '4px'
  };
const Browser = _ref => {
  let {
    isShow,
    style,
    children
  } = _ref;
  const [_cn, _style] = isShow ? [CL_SHOW, _crStyle.S_BLOCK] : [void 0, _crStyle.S_NONE];
  return (0, _jsxRuntime.jsx)("div", {
    className: _cn,
    style: {
      ...S_BROWSER,
      ...style,
      ..._style
    },
    children: children
  });
};

/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object
}
*/
var _default = Browser;
exports.default = _default;
//# sourceMappingURL=Browser.js.map