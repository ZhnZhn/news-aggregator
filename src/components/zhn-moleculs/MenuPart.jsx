import React from 'react'
import PropTypes from 'prop-types'

import OpenClose from '../zhn-atoms/OpenClose'
import MenuItemBadge from './MenuItemBadge'

const CL_NOT_S = 'not-selected';

const _renderMenuItems = function(option){
  const { rowClass, badgeStyle, items=[], hmItems={}, itemData, onClick, onClickBadge, ...rest } = option
  return items.map((item, index) => {
    const _className = (rowClass)
             ? `${rowClass} ${CL_NOT_S}`
             :  CL_NOT_S
          , _itemConf = hmItems[item.id]
          , { menuTitle} = _itemConf
          , badgeEl = itemData[item.id]
               ? <MenuItemBadge
                    style={badgeStyle}
                    itemBadge={itemData[item.id]}
                    itemConf={_itemConf}
                    onClick={onClickBadge}
                 />
               : undefined;

    Object.assign(_itemConf, rest)

    return (
       <div
           key={index}
           className={_className}
           onClick={onClick.bind(null, _itemConf)}
        >
          {menuTitle}
          {badgeEl}
       </div>
    )
  })
}

const MenuPart = ({
  openCloseStyle, itemStyle, caption, isInitClose, ...restProps
}) => (
  <OpenClose
     style={openCloseStyle}
     caption={caption}
     isClose={isInitClose}
     itemStyle={itemStyle}
  >
     {_renderMenuItems(restProps)}
  </OpenClose>
)

MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}

export default MenuPart
