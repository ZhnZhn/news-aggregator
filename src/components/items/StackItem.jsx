import { useCallback } from '../uiApi';
import {
  S_COLOR_BLACK,
  COLOR_BLACK
} from '../crStyle';

import useToggle from '../hooks/useToggle';
import useKeyDelete from '../hooks/useKeyDelete';

import { HAS_TOUCH_EVENTS } from '../has';

import useItemGestureSwipeX from './useItemGestureSwipeX';
import GestureSwipeX from '../zhn-gesture/GestureSwipeX';
import SvgX from '../zhn/SvgX';
import SafeLink from '../zhn/SafeLink';
import ItemStack from '../zhn/ItemStack';
import {
  CL_ITEM_HEADER,
  CL_ITEM_DESCR,
  CL_LINK_WRAPPER,
  S_NONE
} from './Item.Style';

const S_ROOT = {
  position: 'relative',
  fontWeight: 'bold',
  width: '100%',
  padding: '8px 4px 16px 16px',
  marginBottom: 5,
  lineHeight: 1.5,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderTopRightRadius: 2,
  borderBottomRightRadius: 2
}
, S_SVG_CLOSE = {
  position: 'absolute',
  top: 8,
  right: 0
}
, S_ITEM_CAPTION = {
  paddingBottom: 8
}
, S_LINK = {
  display: 'block',
  paddingBottom: 8
}
, S_SPAN_TAG = {
  ...S_COLOR_BLACK,
  display: 'inline-block',
  backgroundColor: 'gray',
  padding: '4px 8px',
  margin: '6px 8px 2px 8px',
  borderRadius: 16
}
, _crItemBadge = (color) => ({
  display: 'inline-block',
  paddingRight: 8,
  fontSize: '1.125rem',
  color
})
, S_FISH_BADGE = _crItemBadge('#d7bb52')
, S_GREEN_BADGE = _crItemBadge('#80c040')
, S_BLACK_BADGE = _crItemBadge(COLOR_BLACK);


const TOKEN_ANSWER = HAS_TOUCH_EVENTS ? 'A' : (
  <span role="img" arial-label="hammer and pick">&#x2692;</span>
);
const TOKEN_SCORE = HAS_TOUCH_EVENTS ? 'S' : (
  <span role="img" aria-label="fish">&#x1F41F;</span>
);
const TOKEN_VIEW = HAS_TOUCH_EVENTS ? 'V' : (
  <span role="img" aria-label="wheel of dharma">&#x2638;</span>
);
const TOKEN_REPUTATION = HAS_TOUCH_EVENTS ? 'R' : (
  <span role="img" arial-label="shamrock">&#x2618;</span>
);

const _crTagItem = (
  tag,
  index
) => (
  <span
    key={index}
    className={CL_ITEM_DESCR}
    style={S_SPAN_TAG}
  >
     {tag}
  </span>
);

const FN_NOOP = () => {};

const StackItem = ({
  item,
  onCloseItem,
  onRemoveUnder=FN_NOOP,
  onRemoveItem=FN_NOOP
}) => {
  const [
    isClosed,
    toggleIsClosed
  ] = useToggle(false)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
    onCloseItem(item)
    toggleIsClosed(true)
  }, [])
  //item, onCloseIte, setClosed
  /*eslint-enable react-hooks/exhaustive-deps */
  , _hKeyDown = useKeyDelete(_hClose)
  , _onGestureSwipeX = useItemGestureSwipeX(item, onRemoveUnder, _hClose)

  const {
    is_answered,
    answer_count,
    score,
    view_count,
    title,
    link,
    owner,
    tags
  } = item || {}
  , {
    reputation,
    display_name
  } = owner || {}
  , _style = isClosed
      ? S_NONE
      : void 0;

  return (
    <GestureSwipeX
      className={CL_ITEM_HEADER}
      style={{...S_ROOT, ..._style}}
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
      <SafeLink
        className={CL_LINK_WRAPPER}
        style={S_LINK}
        href={link}
        onKeyDown={_hKeyDown}
      >
        <ItemStack
          items={tags}
          crItem={_crTagItem}
        />
      </SafeLink>
    </GestureSwipeX>
  );
};

export default StackItem
