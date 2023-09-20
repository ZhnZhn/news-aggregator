import {
  useRef,
  useEffect,
  useImperativeHandle,

  KEY_ENTER,

  focusRefElement,
  setRefValue
} from '../uiApi';

import ShowHide from '../zhn-atoms/ShowHide';
import ItemStack from '../zhn-atoms/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';
import {
  getItemCaption,
  getItemValue
} from './OptionFn';

import useKeyDownArrow from './useKeyDownArrow';

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
  ] = value === (currentItem && getItemValue(currentItem))
    ? ["0", refItem, "true"]
    : ["-1"]
  , _refOption = index === 0
      ? _ref || refFirstItem
      : _ref
  , _refOptionFn = el => {
       if (_refOption) {
         setRefValue(_refOption, el);
       }
    }
  , _hKeyDown = evt => {
    if (evt.key === KEY_ENTER) {
      onSelect(item, evt)
    }
  };

  return (
    <div
      key={value}
      ref={_refOptionFn}
      role="option"
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
  , [
    _refFocus,
    _hKeyDownArrow
  ] = useKeyDownArrow(onClose)

  /*eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(refOp, () => ({
    hKeyDown: _hKeyDownArrow
  }), [])
  // _hKeyDown
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    if (isShow && isFocusItem) {
      setRefValue(
        _refFocus,
        focusRefElement(_refItem, _refFirstItem)
      )
    }
  }, [isShow, isFocusItem])
  // _refFocus
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
   <ModalPane
     isShow={isShow}
     onClose={onClose}
   >
     <ShowHide
       isScrollable={true}
       isShow={isShow}
       role="listbox"
       id={id}
       className={className}
       style={style}
       onKeyDown={_hKeyDownArrow}
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
