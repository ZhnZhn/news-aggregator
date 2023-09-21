import { bindTo } from '../uiApi';

import { CL_ROW_NEWS_SOURCE } from '../crStyle';

import OpenClose from '../zhn-atoms/OpenClose';
import MenuItem from '../zhn-atoms/MenuItem';


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
        className={CL_ROW_NEWS_SOURCE}
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
