import { memo } from '../uiApi';

import MenuTopic from './MenuTopic';

const Menu = ({
  menuModel,
  getFocusRef,
  onToggle
}) => getFocusRef
 ? menuModel.map((topic, index) => (<MenuTopic
      key={topic.t}
      refBt={getFocusRef(index)}
      caption={topic.t}
      items={topic.items}
      onItem={topic.onItem}
      onToggle={onToggle}
    />
 )) : null;

export default memo(Menu)
