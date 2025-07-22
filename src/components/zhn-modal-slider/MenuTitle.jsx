import MenuItem from '../zhn/MenuItem';

const S_ITEM = {
  position: 'relative'
}
, S_PREV_PAGE = {
  position: 'absolute',
  top: 0,
  left: 16
}
, S_TITLE = {
  paddingLeft: 16
};

const MenuTitle = ({
  refEl,
  titleCl,
  title,
  onClick
}) => title ? (
  <MenuItem
    refEl={refEl}
    className={titleCl}
    style={S_ITEM}
    onClick={onClick}
  >
    <span style={S_PREV_PAGE}>
      {"<"}
    </span>
    <span style={S_TITLE}>
      {title}
    </span>
  </MenuItem>
) : null;

export default MenuTitle
