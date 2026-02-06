import { isArr } from '../uiApi';
import { COLOR_BLACK } from '../crStyle';

import OpenClose from '../zhn/OpenClose';
import MenuItem from '../zhn/MenuItem';

const CL_ITEM = 'row__topic';

const S_HORIZONTAL_LINE = {
  margin: '0 16px',
  borderBottom: `1px solid ${COLOR_BLACK}`
};

const MenuTopic = (props) => isArr(props.items) ? (
  <OpenClose
     refBt={props.refBt}
     caption={props.caption}
     onToggle={props.onToggle}
  >
    {props.items.map(config => isArr(config)
      ? <MenuItem
          key={config[0]}
          className={CL_ITEM}
          caption={config[0]}
          onClick={config[1]}
          style={config[2]}
        />
      : <div
          key={config}
          style={S_HORIZONTAL_LINE}
        />
    )}
  </OpenClose>
) : <MenuItem
   key={props.caption}
   className={CL_ITEM}
   caption={props.caption}
   onClick={props.onItem}
/>;

export default MenuTopic
