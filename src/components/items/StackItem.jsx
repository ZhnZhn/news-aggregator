import { forwardRef, useCallback, useMemo } from 'react';

import useBool from '../hooks/useBool';
import useKeyDelete from '../hooks/useKeyDelete';
import useTheme from '../hooks/useTheme';
import styleConfig from './Article.Style';

import has from '../has';
import crStyle from '../zhn-utils/crStyle';

import useItemGestureSwipeX from './useItemGestureSwipeX';
import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import SvgX from '../zhn-atoms/SvgX';
import ItemStack from '../zhn-atoms/ItemStack';

const { HAS_TOUCH } = has
, CL_WRAPPER = "link-wrapper"
, _S_BADGE = {
  display: 'inline-block',
  paddingRight: 8,
  fontSize: '1.125rem',
}
, S_NONE = { display: 'none' }
, S_ROOT = {
  position: 'relative',
  backgroundColor: '#404040',
  fontWeight: 'bold',
  width: '100%',
  padding: '8px 0 16px 16px',
  marginBottom: 5,
  lineHeight: 1.5,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderTopRightRadius: 2,
  borderBottomRightRadius: 2
},
S_SVG_CLOSE = {
  float: 'none',
  position: 'absolute',
  top: 8,
  right: 0
},
S_ITEM_CAPTION = {
  paddingBottom: 8
},
S_LINK = {
  display: 'block',
  paddingBottom: 8
},
S_SPAN_TAG = {
  display: 'inline-block',
  color: 'black',
  backgroundColor: 'gray',
  padding: '4px 8px',
  margin: '6px 8px 2px 8px',
  borderRadius: 16
},
S_FISH_BADGE = {
  ..._S_BADGE,
  color: '#d7bb52'
},
S_GREEN_BADGE = {
  ..._S_BADGE,
  color: '#80c040',
},
S_BLACK_BADGE = {
  ..._S_BADGE,
  color: 'black'
};


const TOKEN_ANSWER = HAS_TOUCH ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = HAS_TOUCH ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = HAS_TOUCH ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = HAS_TOUCH ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);

const _fTagItem = TS  => (tag, index) => (
  <span key={index} style={{...S_SPAN_TAG, ...TS.DESCR}}>
     {tag}
  </span>
);

const _fnNoop = () => {};

const StackItem = forwardRef(({
  item,
  onCloseItem,
  onRemoveUnder=_fnNoop,
  onRemoveItem=_fnNoop
}, ref) => {
  const [isClosed, setClosed] = useBool(false)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
    onCloseItem(item)
    setClosed()
  }, [])
  //item, onCloseIte, setClosed
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hKeyDown = useKeyDelete(_hClose)
  , _onGestureSwipeX = useItemGestureSwipeX(item, onRemoveUnder, _hClose)
  , TS = useTheme(styleConfig)
  , _crItem = useMemo(() => _fTagItem(TS), [TS]);

  const {
    is_answered,
    answer_count, score, view_count,
    title,
    link, owner, tags
  } = item || {}
  , { reputation, display_name } = owner || {}
  , _rootStyle = crStyle([isClosed, S_NONE]);

  return (
    <GestureSwipeX
      style={{...S_ROOT, ..._rootStyle, ...TS.HEADER}}
      onGesture={_onGestureSwipeX}
    >
      <div style={S_ITEM_CAPTION}>
          <span style={is_answered ? S_GREEN_BADGE : S_FISH_BADGE}>
            {TOKEN_ANSWER}&nbsp;{answer_count}
          </span>
          <span style={S_FISH_BADGE}>
            {TOKEN_SCORE}&nbsp;{score}
          </span>
          <span style={S_BLACK_BADGE}>
            {TOKEN_VIEW}&nbsp;{view_count}
          </span>
          <span style={S_GREEN_BADGE}>
            {TOKEN_REPUTATION}&nbsp;{reputation}
          </span>
          <span style={S_BLACK_BADGE}>
            {display_name}
          </span>
         <SvgX
            style={S_SVG_CLOSE}
            onClick={_hClose}
         />
      </div>
      <div>
        {title}
      </div>
      <a
        className={CL_WRAPPER}
        style={S_LINK}
        href={link}
        onKeyDown={_hKeyDown}
      >
        <ItemStack items={tags} crItem={_crItem} />
      </a>
    </GestureSwipeX>
  );
});

export default StackItem
