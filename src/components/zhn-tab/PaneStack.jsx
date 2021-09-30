import { cloneElement } from 'react';

import ItemStack from '../zhn-atoms/ItemStack';

const S_TAB_SELECTED = {
  display: 'block',
  width: "100%",
  height: "100%"
}, S_NONE = { display: 'none' };

const _crItemPane = (
  tab, index,
  { isShow, selectedTabIndex }
) => {
  const isSelected = index === selectedTabIndex;
  return (
    <div
      style={isSelected ? S_TAB_SELECTED : S_NONE}
      key={'a'+index}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {cloneElement(tab.props.children, {
        key: 'comp' + index,
        isShow, isSelected
      })}
    </div>
  );
};

const PaneStack = ({
  style,
  isShow,
  selectedTabIndex,
  children
}) => (
   <div style={style}>
    <ItemStack
       items={children}
       crItem={_crItemPane}
       isShow={isShow}
       selectedTabIndex={selectedTabIndex}
     />
   </div>
);

export default PaneStack
