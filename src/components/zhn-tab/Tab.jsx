import crCn from '../zhn-utils/crCn';

const CL_TAB = "tab"
, CL_ACTIVE = "active"
, CL_TAB_TITLE = "tab_t";

const Tab = ({
  isSelected,
  id,
  title,
  onClick
}) => (
  <button
     type="button"
     className={crCn(CL_TAB, [isSelected, CL_ACTIVE])}
     id={`tab-${id}`}
     role="tab"
     aria-selected={isSelected}
     aria-controls={`tabpanel-${id}`}
     onClick={onClick}
  >
     <span className={CL_TAB_TITLE}>
        {title}
     </span>
  </button>
);

export default Tab
