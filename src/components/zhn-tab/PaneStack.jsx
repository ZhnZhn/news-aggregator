import { cloneElement } from '../uiApi';

import ItemStack from '../zhn-atoms/ItemStack';

const CL_PANES = "panes"
, S_BLOCK = { display: 'block'}
, S_NONE = { display: 'none' };

const _crItemPane = (
  tab,
  index,
  { isShow, selectedTabIndex }
) => {
  const isSelected = index === selectedTabIndex;
  return (
    <div
      style={isSelected ? S_BLOCK : S_NONE}
      key={index}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {cloneElement(tab.props.children, {
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
   <div className={CL_PANES}>
    <ItemStack
       items={children}
       crItem={_crItemPane}
       isShow={isShow}
       selectedTabIndex={selectedTabIndex}
     />
   </div>
);

export default PaneStack
