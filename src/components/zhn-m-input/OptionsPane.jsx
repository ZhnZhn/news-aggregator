import {
  useRef,
  useEffect,
  useImperativeHandle,

  KEY_ENTER,

  focusRefElement,
  setRefValue
} from '../uiApi';

import ItemStack from '../zhn/ItemStack';
import ModalPane from '../zhn-moleculs/ModalPane';
import {
  getItemCaption,
  getItemValue
} from './OptionFn';

import useKeyDownArrow from './useKeyDownArrow';
import {
  crAriaListboxProps,
  crAriaOptionProps
} from './crAriaProps';

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

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
      {...crAriaOptionProps(_ariaSelected, _tabIndex)}
      key={value}
      ref={_refOptionFn}
      className={clItem}
      onClick={evt => onSelect(item, evt)}
      onKeyDown={_hKeyDown}
    >
      {caption}
    </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

const OptionsPane = ({
  refOp,
  id,
  isShow,
  isFocusItem=!0,
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
    _refItemFocused,
    _hKeyDownArrow
  ] = useKeyDownArrow(onClose)

  /*eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(refOp, () => ({
    hKeyDown: _hKeyDownArrow
  }), [])
  // _hKeyDownArrow
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    if (isShow && isFocusItem) {
      setRefValue(
        _refItemFocused,
        focusRefElement(_refItem, _refFirstItem)
      )
    }
  }, [isShow, isFocusItem])
  // _refFocus
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
   <ModalPane
     {...crAriaListboxProps(id)}
     data-scrollable="true"
     isShow={isShow}
     className={className}
     style={style}
     onClose={onClose}
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
   </ModalPane>
 );
};

export default OptionsPane
