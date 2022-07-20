import {
  cloneElement,
  useCallback
} from '../uiApi';

import ItemStack from '../zhn-atoms/ItemStack';

const CL_TABS = "tabs";

const _isFn = fn => typeof fn === 'function';

const _crItemTab = (
  tabEl,
  index,
  { selectedTabIndex, hClick }
) => cloneElement(tabEl, {
   key: index,
   id: index,
   onClick: hClick.bind(null, index, tabEl),
   isSelected: index === selectedTabIndex
});

const TabStack = ({
  style,
  selectedTabIndex,
  setTabIndex,
  children
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hClick = useCallback((index, tabEl) => {
    setTabIndex(index);
    if ( _isFn(tabEl.props.onClick)){
      tabEl.props.onClick();
    }
  }, [])
  //setTabIndex
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      className={CL_TABS}
      style={style}
    >
      <ItemStack
        items={children}
        crItem={_crItemTab}
        selectedTabIndex={selectedTabIndex}
        hClick={_hClick}
      />
    </div>
 );
};

export default TabStack
