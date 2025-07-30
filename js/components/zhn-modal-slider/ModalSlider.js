"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useThrottleCallback = _interopRequireDefault(require("../hooks/useThrottleCallback"));
var _useHasMounted = _interopRequireDefault(require("../hooks/useHasMounted"));
var _ModalPane = _interopRequireDefault(require("../zhn-moleculs/ModalPane"));
var _MenuPages = _interopRequireDefault(require("./MenuPages"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_SLIDER_PAGES = 'slider-pages',
  S_MODAL_PANE = {
    position: 'absolute',
    overflow: 'hidden'
  };

/*
static propTypes = {
  rootStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,

  pageWidth: PropTypes.number,
  maxPages: PropTypes.number,
  model: PropTypes.object,

  onClose: PropTypes.func
}
*/

const DF_INIT_ID = 'p0';
const DF_MODEL = {
  pageWidth: 100,
  maxPages: 2,
  initId: DF_INIT_ID,
  p0: []
};
const _initState = model => {
  const _pW = model.pageWidth,
    _maxP = model.maxPages,
    _initId = model.initId || DF_INIT_ID;
  return {
    pageWidth: _pW,
    pagesStyle: {
      width: `${_maxP * _pW}px`
    },
    pageStyle: {
      width: `${_pW}px`
    },
    pageCurrent: 1,
    pages: [{
      key: _initId,
      items: model[_initId],
      titleCl: model.titleCl,
      itemCl: model.itemCl
    }]
  };
};
const _addPage = (pages, id, title, model) => {
  pages.push({
    key: id,
    title: title,
    items: model[id],
    titleCl: model.titleCl,
    itemCl: model.itemCl
  });
};
const _crTransform = (pageWidth, pageCurrent) => {
  const _dX = -1 * pageWidth * (pageCurrent - 1) + 0;
  return {
    transform: `translateX(${_dX}px)`
  };
};
const ModalSlider = _ref => {
  let {
    ariaLabel,
    model = DF_MODEL,
    isShow,
    className,
    onClose
  } = _ref;
  const [state, setState] = (0, _uiApi.useState)(() => _initState(model)),
    {
      pageWidth,
      pagesStyle,
      pageStyle,
      pageCurrent,
      pages
    } = state,
    hPrevPage = (0, _useThrottleCallback.default)(pageNumber => {
      setState(prevState => {
        prevState.pageCurrent = pageNumber - 1;
        return {
          ...prevState
        };
      });
    }),
    hNextPage = (0, _useThrottleCallback.default)((id, title, pageNumber) => {
      setState(prevState => {
        const {
            pages
          } = prevState,
          _max = pages.length - 1;
        if (_max + 1 > pageNumber) {
          if (pages[pageNumber] && pages[pageNumber].key !== id) {
            if (pageNumber > 0) {
              prevState.pages.splice(pageNumber);
            } else {
              prevState.pages = [];
            }
            _addPage(prevState.pages, id, title, model);
          }
        } else {
          _addPage(pages, id, title, model);
        }
        prevState.pageCurrent = pageNumber + 1;
        return {
          ...prevState
        };
      });
    }, [model]),
    _hasMounted = (0, _useHasMounted.default)();

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (!_hasMounted) {
      setState(_initState(model));
    }
  }, [model]);
  // _hasMounted
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsx)(_ModalPane.default, {
    isShow: isShow,
    className: className,
    style: {
      ...S_MODAL_PANE,
      ...pageStyle
    },
    onClose: onClose,
    role: "menu",
    "aria-label": ariaLabel,
    tabIndex: "-1",
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_SLIDER_PAGES,
      style: {
        ...pagesStyle,
        ..._crTransform(pageWidth, pageCurrent)
      },
      children: (0, _jsxRuntime.jsx)(_MenuPages.default, {
        isShow: isShow,
        style: pageStyle,
        pages: pages,
        pageCurrent: pageCurrent,
        onNextPage: hNextPage,
        onPrevPage: hPrevPage,
        onClose: onClose
      })
    })
  });
};
var _default = exports.default = ModalSlider;
//# sourceMappingURL=ModalSlider.js.map