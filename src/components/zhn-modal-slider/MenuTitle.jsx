import { useCallback } from 'react';

import MenuAriaItem from './MenuAriaItem';

const S = {
  ITEM: {
    position: 'relative'
  },
  PREV_PAGE: {
    position: 'absolute',
    top: 0,
    left: 16
  },
  TITLE: {
    paddingLeft: 16
  }
};

const MenuTitle = ({
  baseTitleCl,
  title, pageNumber,
  onPrevPage,
  onReg
}) => {
  const _hClick = useCallback(
    () => onPrevPage(pageNumber),
    [onPrevPage, pageNumber]
  );
  if (!title) { return null; }
  return (
    <MenuAriaItem
      className={baseTitleCl}
      style={S.ITEM}
      onClick={_hClick}
      onReg={onReg}
    >
      <span style={S.PREV_PAGE}>
        {'<'}
      </span>
      <span style={S.TITLE}>
        {title}
      </span>
    </MenuAriaItem>
  );
}

export default MenuTitle
