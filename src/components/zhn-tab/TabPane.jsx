import { forwardRef, useState, useImperativeHandle } from 'react';

import TabStack from './TabStack';
import PaneStack from './PaneStack'

const S_TABS = {
  margin: '5px 5px 5px 10px',
  textAlign: 'center'
}, S_PANES = {
  width: "100%",
  height: "100%"
};

const TabPane = forwardRef(({
  isShow,
  width, height,
  tabsStyle, selectedStyle,
  children
}, ref) => {
  const [selectedTabIndex, setTabIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    getSelectedTabIndex: () => selectedTabIndex
  }), [selectedTabIndex])

  return (
    <div style={{ width, height }}>
      <TabStack
        style={{...S_TABS, ...tabsStyle}}
        selectedStyle={selectedStyle}
        selectedTabIndex={selectedTabIndex}
        setTabIndex={setTabIndex}
        children={children}
      />
      <PaneStack
        style={S_PANES}
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
