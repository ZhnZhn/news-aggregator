import {
  CL_TAB_TITLE,
  crTabCn,
  crTabId,
  crTabPanelId
} from './tabPaneFn';

const Tab = ({
  isSelected,
  id,
  index,
  title,
  onClick,
  onKeyDown
}) => (
  <button
     type="button"
     role="tab"
     className={crTabCn(isSelected)}
     id={crTabId(id, index)}
     tabIndex={isSelected ? '0' : '-1'}
     aria-selected={isSelected}
     aria-controls={crTabPanelId(id, index)}
     onClick={onClick}
     onKeyDown={onKeyDown}
  >
     <span className={CL_TAB_TITLE}>
        {title}
     </span>
  </button>
);


export default Tab
