import React, { useState, useImperativeHandle } from 'react';

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

const _Tabs = ({
  style,
  selectedStyle,
  selectedTabIndex,
  setTabIndex,
  children
}) => {
  const _hClick = (index, tabEl) => {
    setTabIndex(index);
    if ( _isFn(tabEl.props.onClick)){
      tabEl.props.onClick();
    }
  };
  return (
    <div style={style}>
      {children.map((tabEl, index) => {
        return React.cloneElement(tabEl, {
          key: index,
          id: index,
          onClick: _hClick.bind(null, index, tabEl),
          isSelected: (index === selectedTabIndex),
          selectedStyle
        });
       })
      }
    </div>
 );
}

const _Panes = ({
  style,
  isShow,
  selectedTabIndex,
  children
}) => (
 <div style={style}>
    {children.map((tab, index) => {
     const _isSelected = index === selectedTabIndex
     return (
       <div
         style={_isSelected ? S.TAB_SELECTED : S.NONE}
         key={'a'+index}
         role="tabpanel"
         id={`tabpanel-${index}`}
         aria-labelledby={`tab-${index}`}
       >
         {React.cloneElement(tab.props.children, {
           key: 'comp' + index,
           isShow: isShow,
           isSelected: _isSelected
         })}
       </div>
    );
    })}
  </div>
);


const TabPane = React.forwardRef(({
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
      <_Tabs
        style={{...S.TABS, ...tabsStyle}}
        selectedStyle={selectedStyle}
        selectedTabIndex={selectedTabIndex}
        setTabIndex={setTabIndex}
        children={children}
      />
      <_Panes
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
