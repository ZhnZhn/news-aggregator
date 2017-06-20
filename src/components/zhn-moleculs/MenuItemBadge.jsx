import React, { Component } from 'react'

const S = {
  BADGE: {
    display: 'inline-block',
    color: 'grey',
    //backgroundColor: 'rgb(63, 81, 181)',
    backgroundColor: '#3f5178',
    float: 'right',
    width: '32px',
    paddingRight: '5px',
    paddingLeft: '5px',
    borderRadius: '30%',
    textAlign: 'center'
  },
  CLOSE: {
    color: 'black'
  }
}


class MenuItemBadge extends Component {

  _handleClick = (event) => {
     event.stopPropagation()
     const { itemConf, onClick } = this.props;
     onClick(itemConf)
  }

  render(){
    const { style, itemBadge={} } = this.props
        , { isOpen } = itemBadge
        , _badgeStyle = isOpen
             ? S.BADGE
             : { ...S.BADGE, ...S.CLOSE }
    return (
      <span style={{ ..._badgeStyle, ...style }} onClick={this._handleClick}>
        V
      </span>
    );
  }
}

export default MenuItemBadge
