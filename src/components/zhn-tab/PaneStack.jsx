import { cloneElement } from '../uiApi';

import ItemStack from '../zhn-atoms/ItemStack';
import { crShowHideStyle } from '../zhn-utils/crStyle';

const CL_PANES = "panes";

const _crItemPane = (
  tab,
  index,
  { isShow, selectedTabIndex }
) => {
  const isSelected = index === selectedTabIndex;
  return (
    <div
      style={crShowHideStyle(isSelected)}
      key={index}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {cloneElement(tab.props.children, {
         isShow,
         isSelected,
         isVisible: isShow && isSelected
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
