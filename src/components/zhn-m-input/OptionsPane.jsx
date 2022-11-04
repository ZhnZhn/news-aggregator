import {
  useRef,
  useCallback,
  useEffect,
  getRefValue,
  setRefValue
} from '../uiApi';

import ShowHide from '../zhn-atoms/ShowHide';
import ItemStack from '../zhn-atoms/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';
import {
  getItemCaption,
  getItemValue
} from './OptionFn';

const SCROLL_OPTIONS = {
  block: 'center',
  behavior: 'smooth'
};

const _preventStopEvent = evt => {
  evt.preventDefault()
  evt.stopPropagation()
};

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    ref.current = _elItem
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _crItem = (
  item,
  index, {
  refItem,
  currentItem,
  clItem,
  onSelect
}) => {
  const caption = getItemCaption(item)
  , value = getItemValue(item)
  , [
    _tabIndex,
    _ref,
    _ariaSelected,
  ] = value === getItemValue(currentItem)
    ? ["0", refItem, "true"]
    : ["-1"]
  , _hKeyDown = evt => {
    if (evt.key === 'Enter') {
      onSelect(item, evt)
    }
  };

  return (
    <div
      key={value}
      role="option"
      ref={_ref}
      aria-selected={_ariaSelected}
      tabIndex={_tabIndex}
      className={clItem}
      onClick={evt => onSelect(item, evt)}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
};

const OptionsPane = ({
  isShow,
  className,
  options,
  item,
  clItem,
  onSelect,
  onClose
}) => {
  const _refItem = useRef(null)
  , _refFocus = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback((evt) => {
    if (evt.key === 'ArrowDown') {
      _preventStopEvent(evt)
      _focusNextItem(_refFocus)
    } else if (evt.key === 'ArrowUp') {
      _preventStopEvent(evt)
      _focusPrevItem(_refFocus)
    } else if (evt.key === 'Escape') {
      _preventStopEvent(evt)
      onClose()
    }
  }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(()=>{
    if (isShow) {
      const _elItem = getRefValue(_refItem);
      if (_elItem) {
        _elItem.focus()
        setRefValue(_refFocus, _elItem)
      }
    }
  }, [isShow])
return (
  <ModalPane
     isShow={isShow}
     onClose={onClose}
  >
     <ShowHide
        isShow={isShow}
        isScrollable={true}
        className={className}
        role="presentation"
        onKeyDown={_hKeyDown}
     >
        <ItemStack
          items={options}
          crItem={_crItem}
          refItem={_refItem}
          currentItem={item}
          clItem={clItem}
          onSelect={onSelect}
        />
    </ShowHide>
  </ModalPane>
 );
};

export default OptionsPane
