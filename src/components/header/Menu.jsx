import { memo } from '../uiApi';

import MenuTopic from './MenuTopic';

const Menu = (props) => props.getFocusRef
 ? props.menuModel.map((topic, index) => (<MenuTopic
      key={topic.t}
      refBt={props.getFocusRef(index)}
      caption={topic.t}
      items={topic.items}
      onItem={topic.onItem}
      onToggle={props.onToggle}
    />
 )) : null;

export default memo(Menu)
