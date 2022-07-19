import {
  useRef,
  useState,
  useCallback,
  useMemo,
  getRefElementStyle,
  focusRefElement
} from '../uiApi';

import useToggle from '../hooks/useToggle';
import useBool from '../hooks/useBool';
import useTheme from '../hooks/useTheme';
import useListen from '../hooks/useListen';
import toFirstUpperCase from '../../utils/toFirstUpperCase'

import crCn from '../zhn-utils/crCn';
import styleConfig from './NewsPane.Style';
import has from '../has';

import crModelMore from './crModelMore';
import SvgHrzResize from '../zhn-resize/SvgHrzResize';
import A from '../Comp';

const WIDTH_STYLE = has.initWidthStyle()
, RESIZE_INIT_WIDTH = 635
, RESIZE_MIN_WIDTH = 395
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10

, CL_NEWS_PANE = "news-pane"
, CL_SHOW_POPUP = "show-popup"
, CL_MENU_MORE = "popup-menu items__menu-more"

, S_BT_REMOVE = {
  position: 'relative',
  top: -3,
  margin: '0 6px 0 16px'
}
, S_SVG_RESIZE = {
  position: 'relative',
  top: 2
}
, S_SCROLL_DIV = {
  overflow: 'hidden auto',
  height: '92%',
  paddingRight: 10
}
, S_INLINE_BLOCK = { display: 'inline-block' }
, S_NONE = { display: 'none' };


const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

const _focusFirstItem = ref => {
  setTimeout(() => {
    focusRefElement(ref)
  }, 1000)
};

const _crPaneCaption = (caption, sortBy) =>
 [caption, sortBy]
   .filter(Boolean)
   .map(toFirstUpperCase)
   .join(': ');

const _crArticleItem = (article, index, {
  Item,
  refFirstItem,
  onCloseItem,
  onRemoveUnder
}) => (
  <Item
    ref={index === 0 ? refFirstItem : void 0}
    key={article.articleId}
    item={article}
    onCloseItem={onCloseItem}
    onRemoveUnder={onRemoveUnder}
  />
);

const _crModelMoreHandlers = (
  ref,
  onRemoveItems
) => {
  const _resizeTo = (
    width
  ) => {
    (getRefElementStyle(ref) || {}).width = _toStyleWidth(width);
  }
  , _plusToWidth = () => {
    const style = getRefElementStyle(ref) || {}
    , w = _getWidth(style) + RESIZE_DELTA;
    if (w < RESIZE_MAX_WIDTH) {
       style.width = _toStyleWidth(w)
    }
  }
  , _minusToWidth = () => {
    const style = getRefElementStyle(ref) || {}
    , w = _getWidth(style) - RESIZE_DELTA;
    if (w > RESIZE_MIN_WIDTH) {
      style.width = _toStyleWidth(w)
    }
  };

  return {
    onMinWidth: _resizeTo.bind(null, RESIZE_MIN_WIDTH),
    onInitWidth: _resizeTo.bind(null, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};

const NewsPane = ({
  store,

  addAction,
  showAction,
  toggleAction,
  id,

  paneCaption,
  Item,
  onRemoveItems,
  onRemoveUnder,
  onCloseItem,

  onClose
}) => {
  const _refRootDiv = useRef()
  , _refFirstItem = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _MODEL_MORE = useMemo(
      () => crModelMore(_crModelMoreHandlers(_refRootDiv, onRemoveItems)),
      []
   )
   // onRemoveItems
   /*eslint-enable react-hooks/exhaustive-deps */
  , [
    isShow,
    toggleIsShow
  ] = useToggle(true)
  , [
    isMore,
    _showMore,
    _hideMore
  ] = useBool(false)
  , [
    state,
    setState
  ] = useState({articles: [], sortBy: ''})
  , {
    articles,
    sortBy
  } = state
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hHide = useCallback(() => {
     onClose()
     toggleIsShow(false)
  }, [])
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */
  , TS = useTheme(styleConfig);

  useListen(store, (actionType, option={}) => {
    if (option.id === id){
      if (actionType === addAction) {
        toggleIsShow(true)
        setState(prevState => ({
          articles: option.data,
          sortBy: option.sortBy
        }))
        _focusFirstItem(_refFirstItem)
      } else if (actionType === showAction) {
        toggleIsShow(true)
      } else if (actionType === toggleAction) {
        toggleIsShow()
      }
    }
  })

  const _paneCaption = _crPaneCaption(paneCaption, sortBy)
  , _className = crCn(CL_NEWS_PANE, [isShow,  CL_SHOW_POPUP])
  , _styleIsShow = isShow ? S_INLINE_BLOCK : S_NONE;

  return (
    <div
       ref={_refRootDiv}
       className={_className}
       style={{
         ...WIDTH_STYLE,
         ...TS.PANE_ROOT,
         ..._styleIsShow
       }}
    >
      <A.ModalSlider
        isShow={isMore}
        className={CL_MENU_MORE}
        style={TS.EL_BORDER}
        model={_MODEL_MORE}
        onClose={_hideMore}
      />
      <A.BrowserCaption
         style={TS.PANE_CAPTION}
         caption={_paneCaption}
         onMore={_showMore}
         onClose={_hHide}
      >
        <A.CircleButton
          caption="R"
          title="Remove All Items"
          style={S_BT_REMOVE}
          onClick={onRemoveItems}
        />
        <SvgHrzResize
           elementRef={_refRootDiv}
           style={S_SVG_RESIZE}
           initWidth={RESIZE_INIT_WIDTH}
           minWidth={RESIZE_MIN_WIDTH}
           maxWidth={RESIZE_MAX_WIDTH}
        />
      </A.BrowserCaption>
      <A.ScrollPane className={TS.CL_SCROLL_PANE} style={S_SCROLL_DIV}>
         <A.ItemStack
           items={articles}
           crItem={_crArticleItem}
           Item={Item}
           refFirstItem={_refFirstItem}
           onCloseItem={onCloseItem}
           onRemoveUnder={onRemoveUnder}
         />
      </A.ScrollPane>
    </div>
  );
};

export default NewsPane
