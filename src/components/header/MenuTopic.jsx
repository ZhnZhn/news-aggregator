import OpenClose from '../zhn-atoms/OpenClose';
import MenuItem from '../zhn-atoms/MenuItem';

const _isArr = Array.isArray;
const CL_ITEM = 'row__topic';

const S_HORIZONTAL_LINE = {
  margin: '0 16px',
  borderBottom: '1px solid black'
};

const MenuTopic = ({
  refBt,
  caption,
  items,
  style,
  itemStyle,
  onItem
}) => _isArr(items) ? (
  <OpenClose
     refBt={refBt}
     style={style}
     itemStyle={itemStyle}
     caption={caption}
  >
    {items.map(config => _isArr(config)
      ? <MenuItem
          key={config[0]}
          className={CL_ITEM}
          caption={config[0]}
          onClick={config[1]}
        />
      : <div
          key={config}
          style={S_HORIZONTAL_LINE}
        />
    )}
  </OpenClose>
) : <MenuItem
   key={caption}
   className={CL_ITEM}
   caption={caption}
   onClick={onItem}
/>;

export default MenuTopic
