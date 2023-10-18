import { memo } from '../uiApi';

import MenuTopic from './MenuTopic';

const Menu = ({
  style,
  itemStyle,
  menuModel,
  getFocusRef
}) => getFocusRef
 ? menuModel.map((topic, index) => (<MenuTopic
      key={topic.t}
      refBt={getFocusRef(index)}
      caption={topic.t}
      items={topic.items}
      style={style}
      itemStyle={itemStyle}
      onItem={topic.onItem}
    />
 )) : null;

export default memo(Menu)
