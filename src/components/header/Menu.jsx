import { memo } from '../uiApi';
import MenuTopic from './MenuTopic';

const _isArr = Array.isArray;

const Menu = ({
  refFirstItem,
  refLastItem,
  style,
  itemStyle,
  menuModel
}) => {
  if (!_isArr(menuModel)) {
    return null;
  }
  const _lastIndex = menuModel.length - 1;
  return menuModel.map((topic, index) => (
    <MenuTopic
      key={topic.t}
      refBt={index === 0
       ? refFirstItem
       : index === _lastIndex
          ? refLastItem
          : void 0
      }
      caption={topic.t}
      items={topic.items}
      style={style}
      itemStyle={itemStyle}
    />
  ))
}

export default memo(Menu)
