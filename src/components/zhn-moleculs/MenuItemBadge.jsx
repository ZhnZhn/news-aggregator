import { crStyle2 } from '../crStyle';

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
}
, S_CLOSE = {
  color: 'black'
};

const MenuItemBadge = ({
  style,
  itemBadge,
  itemConf,
  onClick
}) => {
  const _hClick = (evt) => {
    evt.stopPropagation()
    onClick(itemConf)
  }
  , { isOpen } = itemBadge || {}
  , _badgeStyle = crStyle2(
      S_BADGE,
      !isOpen && S_CLOSE
  );

  return (
    <button
      type="button"
      tabIndex="-1"
      style={{..._badgeStyle, ...style}}
      onClick={_hClick}
    >
      V
    </button>
  );
};

export default MenuItemBadge
