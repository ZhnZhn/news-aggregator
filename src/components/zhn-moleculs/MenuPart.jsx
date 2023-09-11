import { bindTo } from '../uiApi';
import { crCn } from '../crStyle';

import OpenClose from '../zhn-atoms/OpenClose';
import MenuItem from '../zhn-atoms/MenuItem';
import { CL_SELECT_NONE } from '../styles/CL';

const _renderMenuItems = (
  TS,
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
        className={crCn(TS.CL_ROW, CL_SELECT_NONE)}
        caption={_itemConf.menuTitle}
        onClick={bindTo(onClick, _itemConf)}
      />
    );
  })
}

const MenuPart = ({
  styleConfig:TS,
  caption,
  isInitClose,
  ...restProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
  >
     {_renderMenuItems(TS, restProps)}
  </OpenClose>
)

export default MenuPart
