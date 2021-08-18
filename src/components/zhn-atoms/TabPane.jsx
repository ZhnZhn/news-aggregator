import {
  forwardRef, cloneElement,
  useState, useCallback, useMemo,
  useImperativeHandle
} from 'react';

import ItemStack from './ItemStack';

const S = {
  TABS: {
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    marginLeft: 10,
    textAlign: 'center'
  },
  PANES: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none',
  }
};

const _isFn = fn => typeof fn === 'function';

const _fCrItemTab = (selectedTabIndex, selectedStyle, hClick) =>
  (tabEl, index) => cloneElement(tabEl, {
     key: index,
     id: index,
     onClick: hClick.bind(null, index, tabEl),
     isSelected: index === selectedTabIndex,
     selectedStyle
  });

const TabStack = ({
  style,
  selectedStyle,
  selectedTabIndex,
  setTabIndex,
  children
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hClick = useCallback((index, tabEl) => {
    setTabIndex(index);
    if ( _isFn(tabEl.props.onClick)){
      tabEl.props.onClick();
    }
  }, [])
  //setTabIndex
  , _crItemTab = useMemo(() => _fCrItemTab(selectedTabIndex, selectedStyle, _hClick), [selectedTabIndex])
  //selectedStyle, _hClick
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div style={style}>
      <ItemStack items={children} crItem={_crItemTab} />
    </div>
 );
}

const _fCrItemPane = (isShow, selectedTabIndex) =>
 (tab, index) => {
  const isSelected = index === selectedTabIndex;
  return (
    <div
      style={isSelected ? S.TAB_SELECTED : S.NONE}
      key={'a'+index}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {cloneElement(tab.props.children, {
        key: 'comp' + index,
        isShow, isSelected
      })}
    </div>
  );
};

const PaneStack = ({
  style,
  isShow,
  selectedTabIndex,
  children
}) => {
  const _crItem = useMemo(
    () => _fCrItemPane(isShow, selectedTabIndex),
    [isShow, selectedTabIndex]
  );
  return (
   <div style={style}>
     <ItemStack items={children} crItem={_crItem} />
   </div>
  );
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
        style={{...S.TABS, ...tabsStyle}}
        selectedStyle={selectedStyle}
        selectedTabIndex={selectedTabIndex}
        setTabIndex={setTabIndex}
        children={children}
      />
      <PaneStack
        style={S.PANES}
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
