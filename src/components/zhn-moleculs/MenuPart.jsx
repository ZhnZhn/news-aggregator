//import PropTypes from 'prop-types'

import OpenClose from '../zhn-atoms/OpenClose'
import MenuItemBadge from './MenuItemBadge'

const CL_NOT_S = 'not-selected';

const _createOnKeyDown = (onClick) => (event) => {
  if (event.keyCode === 13){
    onClick()
  }
}

const _renderMenuItems = function(TS, option){
  const { items=[], hmItems={}, itemData, onClick, onClickBadge, ...rest } = option
  return items.map((item, index) => {
    const _className = (TS.CL_ROW)
             ? `${TS.CL_ROW} ${CL_NOT_S}`
             :  CL_NOT_S
          , _itemConf = hmItems[item.id]
          , { menuTitle} = _itemConf
          , badgeEl = itemData[item.id]
               ? (<MenuItemBadge
                    style={TS.BADGE}
                    itemBadge={itemData[item.id]}
                    itemConf={_itemConf}
                    onClick={onClickBadge}
                 />)
               : null;

    Object.assign(_itemConf, rest)
    const _onClick = onClick.bind(null, _itemConf);
    return (
       <div
           role="menuitem"
           tabIndex="0"
           key={index}
           className={_className}
           onClick={_onClick}
           onKeyDown={_createOnKeyDown(_onClick)}
        >
          {menuTitle}
          {badgeEl}
       </div>
    )
  })
}

const MenuPart = ({
  styleConfig:TS,
  caption, isInitClose, ...restProps
}) => (
  <OpenClose
     style={TS.OPEN_CLOSE}
     caption={caption}
     isClose={isInitClose}
     itemStyle={TS.ITEM}
  >
     {_renderMenuItems(TS, restProps)}
  </OpenClose>
)

/*
MenuPart.propTypes = {
  caption: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  isInitClose: PropTypes.bool
}
*/

export default MenuPart
