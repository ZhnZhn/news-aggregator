import { useState } from '../uiApi';

import TabStack from './TabStack';
import PaneStack from './PaneStack';

const TabPane = ({
  ariaLabel,
  id,
  isShow,
  width,
  height,
  tabsStyle,
  children
}) => {
  const [
    selectedTabIndex,
    setTabIndex
  ] = useState(0);

  return (
    <div style={{ width, height }}>
      <TabStack
        ariaLabel={ariaLabel}
        id={id}
        style={tabsStyle}
        selectedTabIndex={selectedTabIndex}
        setTabIndex={setTabIndex}
        children={children}
      />
      <PaneStack
        id={id}
        isShow={isShow}
        selectedTabIndex={selectedTabIndex}
        children={children}
      />
    </div>
  );
};

/*
TabPane.propTypes = {
  isShow: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  tabsStyle: PropTypes.object,
  selectedStyle: PropTypes.object
}
*/

export default TabPane
