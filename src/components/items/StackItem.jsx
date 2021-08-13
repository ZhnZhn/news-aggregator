import { forwardRef, useState, useCallback, useMemo } from 'react';

import useTheme from '../hooks/useTheme'
import styleConfig from './Article.Style';

import has from '../has';
import crStyle from '../zhn-utils/crStyle';

import useItemGestureSwipeX from './useItemGestureSwipeX';
import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import SvgX from '../zhn-atoms/SvgX';
import ItemStack from '../zhn-atoms/ItemStack';

const CL_WRAPPER = "link-wrapper";

const { HAS_TOUCH } = has;

const _S = {
  BADGE: {
    display: 'inline-block',
    paddingRight: 8,
    fontSize: '1.125rem',
  }
};
const S = {
  NONE: {
    display: 'none'
  },
  ROOT: {
    position: 'relative',
    backgroundColor: '#404040',
    fontWeight: 'bold',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 16,
    lineHeight: 1.5,
    width: '100%',
    marginBottom: 5,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  ITEM_CAPTION: {
    paddingBottom: 8
  },
  LINK: {
    display: 'block',
    paddingBottom: 8
  },
  SPAN_VERSION : {
    color: '#80c040',
    paddingLeft : 10,
    paddingRight : 10
  },
  BTN_CIRCLE : {
    marginLeft: 10
  },
  SPAN_TAG : {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  },
  FISH_BADGE: {
    ..._S.BADGE,
    color: '#d7bb52'
  },
  GREEN_BADGE : {
    ..._S.BADGE,
    color: '#80c040',
  },
  BLACK_BADGE : {
    ..._S.BADGE,
    color: 'black'
  }
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
  <span key={index} style={{ ...S.SPAN_TAG, ...TS.DESCR }}>
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
  const [isClosed, setIsClosed] = useState(false)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
    onCloseItem(item)
    setIsClosed(true)
  }, [])
  //item, onCloseItem
  , _hKeyDown = useCallback(evt => {
     if (evt.keyCode === 46) {
       _hClose()
     }
  }, [])
  // _hClose
  /*eslint-enable react-hooks/exhaustive-deps */
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
  , _rootStyle = crStyle([isClosed, S.NONE]);

  return (
    <GestureSwipeX
      style={{...S.ROOT, ..._rootStyle, ...TS.HEADER}}
      onGesture={_onGestureSwipeX}
    >
      <div style={S.ITEM_CAPTION}>
          <span style={is_answered ? S.GREEN_BADGE : S.FISH_BADGE}>
            {TOKEN_ANSWER}&nbsp;{answer_count}
          </span>
          <span style={S.FISH_BADGE}>
            {TOKEN_SCORE}&nbsp;{score}
          </span>
          <span style={S.BLACK_BADGE}>
            {TOKEN_VIEW}&nbsp;{view_count}
          </span>
          <span style={S.GREEN_BADGE}>
            {TOKEN_REPUTATION}&nbsp;{reputation}
          </span>
          <span style={S.BLACK_BADGE}>
            {display_name}
          </span>
         <SvgX
            style={S.SVG_CLOSE}
            onClick={_hClose}
         />
      </div>
      <div>
        {title}
      </div>
      <a
        className={CL_WRAPPER}
        style={S.LINK}
        href={link}
        onKeyDown={_hKeyDown}
      >
        <ItemStack items={tags} crItem={_crItem} />
      </a>
    </GestureSwipeX>
  );
});

export default StackItem
