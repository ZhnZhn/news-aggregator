import { forwardRef, useRef, useState, useCallback } from 'react';

import useTheme from '../hooks/useTheme'
import styleConfig from './Article.Style';

import dt from '../../utils/dt';

import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import ItemHeader from './ItemHeader';
import ArticleDescr from './ArticleDescr';

const CL_ITEM_HEADER = "article-header";

const S = {
  ROOT: {
    position: 'relative',
    marginBottom: 5,
    lineHeight: 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    width: '100%',
    backgroundColor: '#404040',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    lineHeight: 1.5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display : 'inline-block',
    paddingRight: 32,
    color: 'black',
    fontSize: '1.125rem',
    fontWeight : 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b',
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  NONE: {
    display: 'none'
  }
}


const DX_REMOVE_UNDER = 90
, DX_REMOVE_ITEM = 40;

const _focusNextArticle = (nodeArticle) => {
  const { nextElementSibling } = nodeArticle || {}
  , { firstElementChild } = nextElementSibling || {};
  if (firstElementChild) {
    firstElementChild.focus()
  }
};

const _fnNoop = () => {};

const Article = forwardRef(({
  item,
  onCloseItem,
  onRemoveUnder=_fnNoop,
  onRemoveItem=_fnNoop
}, ref) => {
  const _refArticle = useRef(null)
  , _refTimeStamp = useRef(null)
 , [isClosed, setIsClosed] = useState(false)
 , [isShow, setIsShow] = useState(false)
 , _hToggle = useCallback(evt => {
   const { timeStamp } = evt || {}
   , _timeStamp = _refTimeStamp.current
   if (timeStamp && _timeStamp
       && timeStamp - _timeStamp < 200) {
      return;
   }
   _refTimeStamp.current = timeStamp
   setIsShow(is => !is)
 }, [])
 , _hClose = useCallback(() => {
   _focusNextArticle(_refArticle.current)
   onCloseItem(item)
   setIsClosed(true)
 }, [])
 //item, onCloseItem
 , _hHide = useCallback(()=>{
   const _node = (ref || {}).current;
   if (_node) {
     _node.focus()
   }
   setIsShow(false)
 }, [])
 // ref
 , _setTimeStamp = useCallback(timeStamp => {
   _refTimeStamp.current = timeStamp
 }, [])
 , _onGestureSwipeX = useCallback(dX => {
   if (dX > DX_REMOVE_UNDER) {
     onRemoveUnder(item)
     return false;
   } else if (dX > DX_REMOVE_ITEM){
     _hClose()
     return false;
   }
   return true;
 }, [])
 // _hClose, item, omRemoveUnder
 , TS = useTheme(styleConfig)

  const { title, author,
      publishedDate, publishedAt,
      url, related
      //, urlToImage
    } = item
  , description = item.description || 'More...'
  , _headerStyle = isShow
       ? {...S.HEADER, ...S.HEADER_OPEN}
       : S.HEADER
  , _captionStyle = isShow
       ? {...S.CAPTION, ...S.CAPTION_OPEN}
       : S.CAPTION
  , _publishedAt = publishedDate
       || dt.toTimeDate(publishedAt)
  , _rootStyle = isClosed
       ? S.NONE
       : void 0;


  return (
    <GestureSwipeX
      divRef={_refArticle}
      style={{...S.ROOT, ..._rootStyle}}
      setTimeStamp={_setTimeStamp}
      onGesture={_onGestureSwipeX}
    >
      <ItemHeader
         ref={ref}
         className={CL_ITEM_HEADER}
         style={{ ..._headerStyle, ...TS.HEADER }}
         captionStyle={_captionStyle}
         btCloseStyle={S.SVG_CLOSE}
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
         url={url}
         description={description}
         related={related}
         publishedAt={_publishedAt}
         author={author}
         onHide={_hHide}
      />
    </GestureSwipeX>
  );
});

export default Article
