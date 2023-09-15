import {
  useRef,
  useState,
  useCallback,
  useMemo,
  bindTo,
  toFirstUpperCase,
  getRefElementStyle,
  focusAsyncRefElement
} from '../uiApi';

import { initWidthStyle } from '../has';
import {
  crPaneCn,
  crInlineBlockShowHide
} from '../crStyle';

import useToggle from '../hooks/useToggle';
import useBool from '../hooks/useBool';
import useRefHotKey from '../hotkeys/useRefHotKey';

import crModelMore from './crModelMore';
import crRelatedBars from './crRelatedBars';

import A from '../Comp';
import ItemBarChart from '../items/ItemBarChart';
import CaptionButtons from './CaptionButtons';
import LoadNextPage from './LoadNextPage';
import {
  RESIZE_INIT_WIDTH,
  RESIZE_MIN_WIDTH,
  RESIZE_MAX_WIDTH,
  RESIZE_DELTA
} from './ResizeWidth';
import {
  HK_REMOVE_ITEMS,
  HK_PLUS_WIDTH,
  HK_MINUS_WIDTH
} from './hotKeys';

const WIDTH_STYLE = initWidthStyle()
, CL_NEWS_PANE = crPaneCn("news-pane")
, CL_MENU_MORE = "popup-menu items__menu-more"
, S_BROWSER_CAPTION = {
  paddingLeft: 30,
  textAlign: 'left'
}
, S_SCROLL_DIV = {
  overflow: 'hidden auto',
  height: '92%',
  paddingRight: 10
};

const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

const _crPaneCaption = (
  caption,
  sortBy
) => [caption, sortBy]
  .filter(Boolean)
  .map(toFirstUpperCase)
  .join(': ');

const _crArticleItem = (
  article,
  index, {
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
    onMinWidth: bindTo(_resizeTo, RESIZE_MIN_WIDTH),
    onInitWidth: bindTo(_resizeTo, RESIZE_INIT_WIDTH),
    onPlusWidth: _plusToWidth,
    onMinusWidth: _minusToWidth,
    onRemoveItems: onRemoveItems
  };
};

const NewsPane = ({
  id,
  paneCaption,
  Item,
  useMsPane,
  useMsItem,
  onRemoveItems,
  onRemoveUnder,
  onCloseItem
}) => {
  const _refRootDiv = useRef()
  , _refFirstItem = useRef()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _MORE_HANDLERS = useMemo(
      () => _crModelMoreHandlers(_refRootDiv, onRemoveItems),
      []
    )
  , _MODEL_MORE = useMemo(
      () => crModelMore(_MORE_HANDLERS),
      []
   )
   // onRemoveItems
   /*eslint-enable react-hooks/exhaustive-deps */
  , {
    onPlusWidth,
    onMinusWidth
  } = _MORE_HANDLERS
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
  ] = useState({
    articles: [],
    sortBy: '',
    caption: ''
  })
  , {
    articles,
    sortBy,
    caption,
    page,
    isRelatedBars
  } = state
  , [
    _categoryBars,
    _maxValue,
    _numberOfArticles
   ] = useMemo(() => {
    if (isRelatedBars) {
      const _relatedBars = crRelatedBars(articles);
      return [
        _relatedBars,
        (_relatedBars[0] || [])[1],
        articles.length
      ];
    }
    return [];
  }, [isRelatedBars, articles])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hHide = useCallback(() => {
     toggleIsShow(false)
  }, []);
  // onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  useMsPane(msPane => {
    if (msPane && msPane.id === id) {
      toggleIsShow(true)
    }
  })

  useMsItem(msItem => {
    if (msItem && msItem.id === id) {
      if (msItem.isAdd === true) {
        toggleIsShow(true)
        setState({
          articles: msItem.data,
          sortBy: msItem.sortBy,
          caption: msItem.caption,
          page: msItem.page,
          isRelatedBars: msItem.isRelatedBars
        })
        focusAsyncRefElement(_refFirstItem)
      } else if (msItem.isUpdate === true) {
        setState(prevState => ({
          ...prevState,
          articles: msItem.data
        }))
      }
    }
  })

  useRefHotKey(_refRootDiv, HK_REMOVE_ITEMS, onRemoveItems)
  useRefHotKey(_refRootDiv, HK_PLUS_WIDTH, onPlusWidth)
  useRefHotKey(_refRootDiv, HK_MINUS_WIDTH, onMinusWidth)

  const _paneCaption = caption
    || _crPaneCaption(paneCaption, sortBy)
  , [
    _className,
    _showHideStyle
  ] = crInlineBlockShowHide(
    isShow,
    CL_NEWS_PANE
  );

  return (
    <div
       ref={_refRootDiv}
       className={_className}
       style={{
         ...WIDTH_STYLE,
         ..._showHideStyle
       }}
    >
      <A.ModalSlider
        isShow={isMore}
        className={CL_MENU_MORE}
        model={_MODEL_MORE}
        onClose={_hideMore}
      />
      <A.BrowserCaption
         style={S_BROWSER_CAPTION}
         caption={_paneCaption}
         onMore={_showMore}
         onClose={_hHide}
      >
        <CaptionButtons
           refRootDiv={_refRootDiv}
           onRemoveItems={onRemoveItems}
           onPlusWidth={onPlusWidth}
           onMinusWidth={onMinusWidth}
        />
      </A.BrowserCaption>
      <A.ScrollPane
         style={S_SCROLL_DIV}
      >
         {isRelatedBars && _maxValue && <ItemBarChart
            categoryBars={_categoryBars}
            maxValue={_maxValue}
            numberOfItems={_numberOfArticles}
          />
         }
         <A.ItemStack
           items={articles}
           crItem={_crArticleItem}
           Item={Item}
           refFirstItem={_refFirstItem}
           onCloseItem={onCloseItem}
           onRemoveUnder={onRemoveUnder}
         />
         <LoadNextPage
           page={page}
         />
      </A.ScrollPane>
    </div>
  );
};

export default NewsPane
