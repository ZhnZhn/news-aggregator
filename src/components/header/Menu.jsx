import { memo } from '../uiApi';
import MenuTopic from './MenuTopic';

const Menu = ({
  refFirstItem,
  style,
  itemStyle,
  menuModel
}) => menuModel.map((topic, index) => (
  <MenuTopic
    key={topic.t}
    refBt={index === 0 ? refFirstItem : void 0}
    caption={topic.t}
    items={topic.items}
    style={style}
    itemStyle={itemStyle}
  />
))

export default memo(Menu)
