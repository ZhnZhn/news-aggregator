import {
  forwardRef,
  useState,
  useImperativeHandle
} from '../uiApi';

import TabStack from './TabStack';
import PaneStack from './PaneStack';

const TabPane = forwardRef(({
  id,
  isShow,
  width,
  height,
  tabsStyle,
  children
}, ref) => {
  const [
    selectedTabIndex,
    setTabIndex
  ] = useState(0);

  useImperativeHandle(ref, () => ({
    getSelectedTabIndex: () => selectedTabIndex
  }), [selectedTabIndex])

  return (
    <div style={{ width, height }}>
      <TabStack
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
})

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
