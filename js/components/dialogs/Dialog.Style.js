'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BROWSER_CAPTION: {
    //padding: '5px',
    paddingTop: '5px',
    color: '#9e9e9e',
    backgroundColor: '#3f5178',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '0px'
  },
  BT_RAISED_ROOT: {
    marginRight: '2px',
    marginLeft: '2px'
  },
  INPUT_ROOT: {
    width: '280px',
    display: 'block'
  }
};

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE, themeName) {
    return {
      R_DIALOG: (0, _extends3.default)({}, CSS_RULE.R_DIALOG),
      BROWSER_CAPTION: (0, _extends3.default)({}, S.BROWSER_CAPTION, CSS_RULE.BG_HEADER),
      INPUT_ROOT: (0, _extends3.default)({}, S.INPUT_ROOT),
      BT: {
        CL_RAISED_DIV: CSS_RULE.CL_BT_RAISED_DIV,
        RAISED_ROOT: (0, _extends3.default)({}, S.BT_RAISED_ROOT, CSS_RULE.BG_HEADER)
      },
      SELECT: {
        CL_ITEM: CSS_RULE.CL_SELECT_ITEM,
        ROOT: {
          width: '280px'
        },
        MODAL_PANE: (0, _extends3.default)({}, CSS_RULE.BG)
      }
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Dialog.Style.js.map