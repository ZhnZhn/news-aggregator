const CL_TAB = "tab"
, DF_COLOR = '#2f7ed8'
, S_BT = {
  borderBottom : `3px solid ${DF_COLOR}`
}
, S_TITLE = {
  color: DF_COLOR
};

const Tab = ({
  isSelected,
  id, title,
  onClick
}) => {
  const [_btStyle, _titleStyle] = isSelected
    ? [S_BT, S_TITLE] : [];
  return (
    <button
       className={CL_TAB}
       style={_btStyle}
       id={`tab-${id}`}
       role="tab"
       aria-selected={isSelected}
       aria-controls={`tabpanel-${id}`}
       onClick={onClick}
    >
       <span style={_titleStyle}>{title}</span>
    </button>
  );
};

export default Tab
