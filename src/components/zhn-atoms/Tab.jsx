import React, { Component } from 'react';

const S = {
  LI : {
    display : 'inline-block',
    color : '#9e9e9e',
    paddingLeft : 10,
    paddingRight : 10,
    paddingTop : 6,
    paddingBottom : 6,
    fontWeight : 'bold',
    borderBottom : '3px solid #9e9e9e',
    cursor : 'pointer'
  },
  SELECTED : {
    color : '#434348',
    borderBottom : '3px solid #2f7ed8'
  }
};

class Tab extends Component {
    render(){
    const {
            title,
            isSelected, selectedStyle,
            onClick
          } = this.props;
    const _selectedStyle = isSelected
             ? { ...S.SELECTED, ...selectedStyle }
             : null;
    return (
       <li
          style={{ ...S.LI, ..._selectedStyle }}
          onClick={onClick}
       >
          <span>{title}</span>
       </li>
    );
  }
}

export default Tab
