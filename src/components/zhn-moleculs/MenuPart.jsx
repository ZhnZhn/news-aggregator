//import PropTypes from 'prop-types'
import { CL_SELECT_NONE } from '../styles/CL';

import OpenClose from '../zhn-atoms/OpenClose';

const _assign = Object.assign;

const _createOnKeyDown = (
  onClick
) => (evt) => {
  if (evt.keyCode === 13){
    onClick()
  }
}

const _renderMenuItems = (
  TS,
  option
) => {
  const {
    items=[],
    hmItems={},
    onClick,
    ...rest
  } = option;
  return items.map((item, index) => {
    const _className = TS.CL_ROW
       ? `${TS.CL_ROW} ${CL_SELECT_NONE}`
       :  CL_SELECT_NONE
    , _itemConf = hmItems[item.id]
    , { menuTitle} = _itemConf;

    _assign(_itemConf, rest)
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
       </div>
    )
  })
}

const MenuPart = ({
  styleConfig:TS,
  caption,
  isInitClose,
  ...restProps
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
