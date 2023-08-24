//import PropTypes from 'prop-types'
import { bindTo } from '../uiApi';
import { crCn } from '../crStyle';

import OpenClose from '../zhn-atoms/OpenClose';
import { CL_SELECT_NONE } from '../styles/CL';

const _fOnKeyDownEnter = (
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
    items,
    hmItems,
    onClick,
    ...restItemProps
  } = option;
  return (items || []).map((item, index) => {
    const _className = crCn(TS.CL_ROW, CL_SELECT_NONE)
    , _itemConf = {
      ...(hmItems || {})[item.id],
      ...restItemProps
    }
    , { menuTitle } = _itemConf
    , _onClick = bindTo(onClick, _itemConf);

    return (
       <div
          role="menuitem"
          tabIndex="0"
          key={index}
          className={_className}
          onClick={_onClick}
          onKeyDown={_fOnKeyDownEnter(_onClick)}
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
