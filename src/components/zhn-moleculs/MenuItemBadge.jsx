import {
  S_COLOR_BLACK,
  crStyle2
} from '../crStyle';

const S_BADGE = {
  display: 'inline-block',
  color: 'grey',
  backgroundColor: '#3f5178',
  width: 32,
  height: 32,
  paddingRight: 5,
  paddingLeft: 5,
  borderRadius: '30%',
  textAlign: 'center',
  float: 'right',
  cursor: 'pointer'
};

const MenuItemBadge = (props) => {
  const _hClick = (evt) => {
    evt.stopPropagation()
    props.onClick(props.itemConf)
  }
  , { isOpen } = props.itemBadge || {}
  , _badgeStyle = crStyle2(
      S_BADGE,
      !isOpen && S_COLOR_BLACK
  );

  return (
    <button
      type="button"
      tabIndex="-1"
      style={{..._badgeStyle, ...props.style}}
      onClick={_hClick}
    >
      V
    </button>
  );
};

export default MenuItemBadge
