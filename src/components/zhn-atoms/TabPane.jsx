import React, { Component } from 'react';

const CL = "tabpane__tabs";

const S = {
  UL: {
    listStyle: 'outside none none',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5,
    textAlign: 'center'
  },
  TABS: {
    width: "100%",
    height : "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height : "100%"
  },
  NONE: {
    display: 'none',
  }
};


const _isFn = fn => typeof fn === 'function';

class TabPane extends Component {

  constructor(props){
    super(props);

    const components = props.children.map((tab, index) => {
       return  React.cloneElement(tab.props.children, {
          key: 'comp' + index
        });
    })
    this.state = {
      selectedTabIndex : 0,
      components
    }
  }

  _hClickTab = (index, tabEl) => {
    this.setState({ selectedTabIndex: index });
    if ( _isFn(tabEl.props.onClick)){
      tabEl.props.onClick();
    }
  }

  _renderTabs = (children) => {
       const { selectedStyle } = this.props;
       const { selectedTabIndex } = this.state;
       return children.map((tab, index) => {
          return React.cloneElement(tab, {
             key: index,
             id: index,
             onClick: this._hClickTab.bind(this, index, tab),
             isSelected: (index === selectedTabIndex),
             selectedStyle
           }
         );
       });
  }


  _renderComponents = () => {
      const { selectedTabIndex, components } = this.state;
      return components.map((comp, index) => {
         const divStyle = index === selectedTabIndex
            ? S.TAB_SELECTED
            : S.NONE;
          return (
             <div
               style={divStyle}
               key={'a'+index}
               role="tabpanel"
               id={`tabpanel-${index}`}
               aria-labelledby={`tab-${index}`}
             >
                {comp}
             </div>
           );
      });
  }

  render(){
    const {
            width, height,
            tabsStyle,
            children
          } = this.props;
    return (
      <div style={{ width, height }}>
        <ul
          className={CL}
          style={{...S.UL, ...tabsStyle }}
        >
           {this._renderTabs(children)}
        </ul>
        <div style={S.TABS}>
           {this._renderComponents()}
        </div>
      </div>
    )
  }

  getSelectedTabIndex() {
    return this.state.selectedTabIndex;
  }
}

export default TabPane
