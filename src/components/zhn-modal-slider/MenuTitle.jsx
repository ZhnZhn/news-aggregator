import MenuItem from '../zhn-atoms/MenuItem';

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
  refTitle,
  titleCl,
  title,
  onClick
}) => title ? (
  <MenuItem
    ref={refTitle}
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

/*
MenuTitle.propTypes = {
  titleCl: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/

export default MenuTitle
