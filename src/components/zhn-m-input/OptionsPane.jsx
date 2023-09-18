import {
  useRef,
  useCallback,
  useEffect,
  useImperativeHandle,

  KEY_ARROW_DOWN,
  KEY_ARROW_UP,
  KEY_ENTER,
  KEY_ESCAPE,
  KEY_TAB,

  focusRefElement,
  getRefValue,
  setRefValue,
  stopDefaultFor
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

const _fFocusItem = propName => ref => {
  const _elItem = (getRefValue(ref) || {})[propName];
  if (_elItem) {
    _elItem.scrollIntoView(SCROLL_OPTIONS)
    _elItem.focus()
    setRefValue(ref, _elItem)
  }
};

const _focusNextItem = _fFocusItem('nextSibling');
const _focusPrevItem = _fFocusItem('previousSibling');

const _crItem = (
  item,
  index, {
  refFirstItem,
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
    if (evt.key === KEY_ENTER) {
      onSelect(item, evt)
    }
  };

  return (
    <div
      key={value}
      role="option"
      ref={_ref}
      ref={index === 0 ? _ref || refFirstItem : _ref}
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
  refOp,
  id,
  isShow,
  isFocusItem=true,
  className,
  style,
  options,
  item,
  clItem,
  onSelect,
  onClose
}) => {
  const _refFirstItem = useRef(null)
  , _refItem = useRef(null)
  , _refFocus = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback(evt => {
    if (evt.key === KEY_ARROW_DOWN) {
      stopDefaultFor(evt)
      _focusNextItem(_refFocus)
    } else if (evt.key === KEY_ARROW_UP) {
      stopDefaultFor(evt)
      _focusPrevItem(_refFocus)
    } else if (evt.key === KEY_ESCAPE || evt.key === KEY_TAB) {
      onClose()
    }
  }, []);
  //onClose
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(refOp, () => ({
    hKeyDown: _hKeyDown
  }), [])
  // _hKeyDown
  /*eslint-enable react-hooks/exhaustive-deps */

  useEffect(()=>{
    if (isShow && isFocusItem) {
      setRefValue(
        _refFocus,
        focusRefElement(_refItem, _refFirstItem)
      )
    }
  }, [isShow, isFocusItem])
  return (
   <ModalPane
     id={id}
     isShow={isShow}
     onClose={onClose}
   >
      <ShowHide
         isShow={isShow}
         isScrollable={true}
         className={className}
         style={style}
         role="presentation"
         onKeyDown={_hKeyDown}
      >
         <ItemStack
           items={options}
           crItem={_crItem}
           refFirstItem={_refFirstItem}
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
