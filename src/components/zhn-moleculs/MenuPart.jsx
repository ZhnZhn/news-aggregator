import React from 'react'
import PropTypes from 'prop-types'

import OpenClose from '../zhn-atoms/OpenClose'
import MenuItemBadge from './MenuItemBadge'

const _renderMenuItems = function(option){
  const { rowClass, items=[], hmItems={}, itemData, onClick, onClickBadge, ...rest } = option
  return items.map((item, index) => {
    const _className = (rowClass)
             ? rowClass + ' not-selected'
             : (index % 2)
                 ? 'row__topic__even not-selected'
                 : 'row__topic__odd not-selected'
          , _itemConf = hmItems[item.id]
          , { menuTitle} = _itemConf
          , badgeEl = itemData[item.id]
               ? <MenuItemBadge
                    data={itemData[item.id]}
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
  caption, isInitClose, ...restProps
}) => (
  <OpenClose
     caption={caption}
     isClose={isInitClose}
     styleNotSelected={{ borderBottom: "1px solid #9e9e9e" }}
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
