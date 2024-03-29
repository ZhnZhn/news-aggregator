import {
  bindTo,
  safeMap
} from '../uiApi';

import { CL_ROW_NEWS_SOURCE } from '../crStyle';

import OpenClose from '../zhn/OpenClose';
import MenuItem from '../zhn/MenuItem';

const MenuPart = ({
  caption,
  isInitClose,
  items,
  hmItems,
  onClick,
  ...restItemProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
  >
     {safeMap(items, (item, index) => {
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
     })}
  </OpenClose>
);

export default MenuPart
