import {
  forwardRef,
  useRef,
  useState,
  useMemo,
  getRefValue,
  focusRefNextSiblingFirstChildElement,
  toLink
} from '../uiApi';

import { toTimeDate } from '../../utils/dt';
import useRefSet from '../hooks/useRefSet';

import useItemGestureSwipeX from './useItemGestureSwipeX';
import useItemType1 from './useItemType1';
import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import ItemType1 from './ItemType1';
import ArticleDescr from './ArticleDescr';

import {
  S_ITEM,
  S_NONE
} from './Item.Style';

const FN_NOOP = () => {};

const Article = forwardRef(({
  refScrollPane,
  item,
  onCloseItem,
  onRemoveUnder=FN_NOOP,
  onRemoveItem=FN_NOOP
}, ref) => {
  const _refArticle = useRef(null)
 , [
   refTimeStamp,
   setTimeStamp
 ] = useRefSet(null)
 , [
   isClosed,
   setIsClosed
 ] = useState(false)

 /*eslint-disable react-hooks/exhaustive-deps */
 , _hClose = useMemo(() => () => {
    focusRefNextSiblingFirstChildElement(_refArticle)
    onCloseItem(item)
    setIsClosed(true)
 }, [])
 //item, onCloseItem
 /*eslint-enable react-hooks/exhaustive-deps */

 , _onGestureSwipeX = useItemGestureSwipeX(
    item,
    onRemoveUnder,
    _hClose
  )
 , [
   isShowDescr,
   hToggle,
   hHide
 ] = useItemType1(ref)

 /*eslint-disable react-hooks/exhaustive-deps */
 , _hToggle = useMemo(() => evt => {
    const { timeStamp } = evt || {}
    , _timeStamp = getRefValue(refTimeStamp)
    if (timeStamp && _timeStamp
        && timeStamp - _timeStamp < 200) {
       return;
    }
    setTimeStamp(timeStamp)
    hToggle()
  }, [])
  // refTimeStamp, setTimeStamp, hToggle
  , _hItemKeyDown = useMemo(() => evt => {
    const { keyCode } = evt;
    if (keyCode === 27) {
      hHide()
    } else if (keyCode === 46) {
      _hClose()
    }
  }, []);
  // hHide, _hClose
  /*eslint-enable react-hooks/exhaustive-deps */

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
  , _style = isClosed ? S_NONE : void 0
  , _publishedAt = publishedDate || toTimeDate(publishedAt)
  , _href = toLink(url);

  return url && !_href ? null : (
    <GestureSwipeX
      ref={_refArticle}
      refScrollPane={refScrollPane}
      style={{...S_ITEM, ..._style}}
      setTimeStamp={setTimeStamp}
      onGesture={_onGestureSwipeX}
    >
      <ItemType1
        ref={ref}
        isShowDescr={isShowDescr}
        title={title}
        onKeyDown={_hItemKeyDown}
        onClick={_hToggle}
        onToggle={hToggle}
        onClose={_hClose}
      >
        <ArticleDescr
           href={_href}
           description={description}
           related={related}
           publishedAt={_publishedAt}
           author={author}
           timeAgo={timeAgo}
           onKeyDown={_hItemKeyDown}
           onClose={_hClose}
        />
      </ItemType1>
    </GestureSwipeX>
  );
});

export default Article
