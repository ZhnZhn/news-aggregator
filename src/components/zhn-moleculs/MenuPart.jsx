import { bindTo } from '../uiApi';

import OpenClose from '../zhn-atoms/OpenClose';
import MenuItem from '../zhn-atoms/MenuItem';
import {
  CL_ROW_NEWS_SOURCE,
  CL_SELECT_NONE
} from '../styles/CL';

const CL_MENU_ITEM = `${CL_ROW_NEWS_SOURCE} ${CL_SELECT_NONE}`;

const _renderMenuItems = (
  option
) => {
  const {
    items,
    hmItems,
    onClick,
    ...restItemProps
  } = option;
  return (items || []).map((item, index) => {
    const _itemConf = {
      ...(hmItems || {})[item.id],
      ...restItemProps
    };

    return (
      <MenuItem
        key={index}
        className={CL_MENU_ITEM}        
        caption={_itemConf.menuTitle}
        onClick={bindTo(onClick, _itemConf)}
      />
    );
  })
}

const MenuPart = ({
  caption,
  isInitClose,
  ...restProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(restProps)}
  </OpenClose>
)

export default MenuPart
