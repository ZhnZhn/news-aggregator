import { forwardRef } from '../uiApi';

import MenuAriaItem from './MenuAriaItem';

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

const MenuTitle = forwardRef(({
  titleCl,
  title,
  onClick
}, ref) => {
  if (!title) { return null; }
  return (
    <MenuAriaItem
      ref={ref}
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
    </MenuAriaItem>
  )
});

/*
MenuTitle.propTypes = {
  titleCl: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
}
*/

export default MenuTitle
