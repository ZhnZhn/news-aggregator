import crCn from '../zhn-utils/crCn';

const CL_TAB = "tab"
, CL_ACTIVE = "active"
, CL_TAB_TITLE = "tab_t";

const Tab = ({
  isSelected,
  id,
  title,
  onClick,
  onKeyDown
}) => (
  <button
     type="button"
     className={crCn(CL_TAB, [isSelected, CL_ACTIVE])}
     id={`tab-${id}`}
     role="tab"
     tabIndex={isSelected ? '0' : '-1'}
     aria-selected={isSelected}
     aria-controls={`tabpanel-${id}`}
     onClick={onClick}
     onKeyDown={onKeyDown}
  >
     <span className={CL_TAB_TITLE}>
        {title}
     </span>
  </button>
);


export default Tab
