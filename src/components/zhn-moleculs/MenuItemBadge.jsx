import React, { Component} from 'react'

const S = {
  BADGE: {
    display: 'inline-block',
    color: 'grey',
    backgroundColor: 'rgb(63, 81, 181)',
    float: 'right',
    width: '32px',
    paddingRight: '5px',
    paddingLeft: '5px',
    borderRadius: '30%',
    textAlign: 'center'
  }
}


class MenuItemBadge extends Component {
  _handleClick = (event) => {
     event.stopPropagation();
     const { itemConf, onClick } = this.props
     onClick(itemConf)
  }

  render(){
    return (
      <span style={S.BADGE} onClick={this._handleClick}>
        V
      </span>
    );
  }
}

export default MenuItemBadge
