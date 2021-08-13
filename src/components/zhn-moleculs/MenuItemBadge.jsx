import crStyle from '../zhn-utils/crStyle';

const S = {
  BADGE: {
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
  },
  CLOSE: {
    color: 'black'
  }
};

const MenuItemBadge = ({
  style,
  itemBadge,
  itemConf,
  onClick
}) => {
  const _hClick = (event) => {
    event.stopPropagation()
    onClick(itemConf)
  }
  , { isOpen } = itemBadge || {}
  , _badgeStyle = crStyle(S.BADGE, [!isOpen, S.CLOSE]);

  return (
    <button
      tabIndex="-1"
      style={{..._badgeStyle, ...style}}
      onClick={_hClick}
    >
      V
    </button>
  );
};

export default MenuItemBadge
