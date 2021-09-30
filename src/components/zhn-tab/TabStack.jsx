import { cloneElement, useCallback } from 'react';

import ItemStack from '../zhn-atoms/ItemStack';

const _isFn = fn => typeof fn === 'function';

const _crItemTab = (
  tabEl, index,
  { selectedTabIndex, selectedStyle, hClick }
) => cloneElement(tabEl, {
   key: index,
   id: index,
   onClick: hClick.bind(null, index, tabEl),
   isSelected: index === selectedTabIndex,
   selectedStyle
});

const TabStack = ({
  style,
  selectedStyle,
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
    <div style={style}>
      <ItemStack
        items={children}
        crItem={_crItemTab}
        selectedTabIndex={selectedTabIndex}
        selectedStyle={selectedStyle}
        hClick={_hClick}
      />
    </div>
 );
};

export default TabStack
