import {
  forwardRef,
  useRef,
  useState,
  useCallback,
  getRefValue
} from '../uiApi';

import useRefSet from '../hooks/useRefSet';
import useTheme from '../hooks/useTheme';
import styleConfig from './Article.Style';

import { toTimeDate } from '../../utils/dt';

import crStyle from '../zhn-utils/crStyle';
import toLink from '../zhn-utils/toLink';

import useItemGestureSwipeX from './useItemGestureSwipeX';
import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import ItemHeader from './ItemHeader';
import ArticleDescr from './ArticleDescr';

import {
  CL_ITEM_HEADER,
  S_ITEM,
  S_CAPTION,
  S_CAPTION_OPEN,
  S_SVG_CLOSE,
  S_NONE
} from './Item.Style';

const _focusNextArticle = (
  nodeArticle
) => {
  const { nextElementSibling } = nodeArticle || {}
  , { firstElementChild } = nextElementSibling || {};
  if (firstElementChild) {
    firstElementChild.focus()
  }
};

const FN_NOOP = () => {};

const Article = forwardRef(({
  item,
  onCloseItem,
  onRemoveUnder=FN_NOOP,
  onRemoveItem=FN_NOOP
}, ref) => {
  const _refArticle = useRef(null)
 , [refTimeStamp, setTimeStamp] = useRefSet(null)
 , [isClosed, setIsClosed] = useState(false)
 , [isShow, setIsShow] = useState(false)
 /*eslint-disable react-hooks/exhaustive-deps */
 , _hToggle = useCallback(evt => {
   const { timeStamp } = evt || {}
   , _timeStamp = getRefValue(refTimeStamp)
   if (timeStamp && _timeStamp
       && timeStamp - _timeStamp < 200) {
      return;
   }
   setTimeStamp(timeStamp)
   setIsShow(is => !is)
 }, [])
 // refTimeStamp, setTimeStamp
 , _hClose = useCallback(() => {
   _focusNextArticle(getRefValue(_refArticle))
   onCloseItem(item)
   setIsClosed(true)
 }, [])
 //item, onCloseItem
 , _hHide = useCallback(()=>{
   const _node = getRefValue(ref);
   if (_node) {_node.focus()}
   setIsShow(false)
 }, [])
 // ref
 /*eslint-enable react-hooks/exhaustive-deps */
 , _onGestureSwipeX = useItemGestureSwipeX(item, onRemoveUnder, _hClose)
 , TS = useTheme(styleConfig);

  const {
    title,
    author,
    timeAgo,
    publishedDate,
    publishedAt,
    url,
    related
    //, urlToImage
  } = item
  , description = item.description || 'More...'
  , _style = crStyle([isClosed, S_NONE])
  , _captionStyle = crStyle(S_CAPTION, [isShow, S_CAPTION_OPEN])
  , _publishedAt = publishedDate || toTimeDate(publishedAt)
  , _href = toLink(url);

  if (url && !_href) {
    return null;
  }

  return (
    <GestureSwipeX
      ref={_refArticle}
      style={{...S_ITEM, ..._style}}
      setTimeStamp={setTimeStamp}
      onGesture={_onGestureSwipeX}
    >
      <ItemHeader
         ref={ref}
         className={CL_ITEM_HEADER}
         style={TS.HEADER}
         captionStyle={_captionStyle}
         btCloseStyle={S_SVG_CLOSE}
         title={title}
         url={url}
         isShow={isShow}
         onClick={_hToggle}
         onClose={_hClose}
         onHide={_hHide}
      />
      <ArticleDescr
         style={TS.DESCR}
         isShow={isShow}
         href={_href}
         description={description}
         related={related}
         publishedAt={_publishedAt}
         author={author}
         timeAgo={timeAgo}
         onClose={_hClose}
         onHide={_hHide}
      />
    </GestureSwipeX>
  );
});

export default Article
