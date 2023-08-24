import {
  cloneElement,
  useCallback,
  isFn,
  bindTo,
  focusElementById,
  stopDefaultFor
} from '../uiApi';

import ItemStack from '../zhn-atoms/ItemStack';
import {
  CL_TABS,
  crTabId
} from './tabPaneFn';

const _crItemTab = (
  tabEl,
  index, {
  id,
  selectedTabIndex,
  hClick,
  hKeyDown
}) => cloneElement(tabEl, {
   key: index,
   id,
   index: index,
   isSelected: index === selectedTabIndex,
   onClick: bindTo(hClick, index, tabEl),
   onKeyDown: bindTo(hKeyDown, index, tabEl)
});

const _crNextId = (
  id,
  childrenLength
) => id === -1
  ? childrenLength - 1
  : id === childrenLength
      ? 0
      : id;

const TabStack = ({
  id,
  style,
  selectedTabIndex,
  setTabIndex,
  children
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hClick = useCallback((index, tabEl) => {
     setTabIndex(index);
     if (isFn(tabEl.props.onClick)){
       tabEl.props.onClick();
     }
  }, [])
  //setTabIndex
  /*eslint-enable react-hooks/exhaustive-deps */
  , _childrenLength = children.length
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hKeyDown = useCallback((index, tabEl, evt) => {
    const _focusTabByIndex = (tabIndex) => {
      const _nextIndex = _crNextId(tabIndex, _childrenLength);
      focusElementById(crTabId(id, _nextIndex))
      _hClick(_nextIndex, tabEl)
    }

    const { keyCode } = evt;
    if (keyCode === 39) {
      stopDefaultFor(evt)
      _focusTabByIndex(index + 1)
    }
    if (keyCode === 37) {
      stopDefaultFor(evt)
      _focusTabByIndex(index - 1)
    }
  }, [_childrenLength]);
  //_hClick
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      className={CL_TABS}
      style={style}
    >
      <ItemStack
        items={children}
        crItem={_crItemTab}
        id={id}
        selectedTabIndex={selectedTabIndex}
        hClick={_hClick}
        hKeyDown={_hKeyDown}
      />
    </div>
 );
};

export default TabStack
