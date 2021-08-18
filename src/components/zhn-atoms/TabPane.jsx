import {
  forwardRef, cloneElement,
  useState, useCallback,
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

const _crItemTab = (
  tabEl, index,
  { selectedTabIndex, selectedStyle, hClick }
) => cloneElement(tabEl, {
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
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <div style={style}>
      <ItemStack
        items={children}
        crItem={_crItemTab}
        selectedTabIndex={selectedTabIndex}
        selectedStyle={selectedStyle}
        hClick={_hClick}
      />
    </div>
 );
}

const _crItemPane = (
  tab, index,
  { isShow, selectedTabIndex }
) => {
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
}) => (
   <div style={style}>
    <ItemStack
       items={children}
       crItem={_crItemPane}
       isShow={isShow}
       selectedTabIndex={selectedTabIndex}
     />
   </div>
);

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
