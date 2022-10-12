import crCn from '../zhn-utils/crCn';

const CL_BT = 'bt-circle not-selected';

const CircleButton = ({
  ariaLabel,
  dataPos,
  caption='',
  className,
  style,
  onClick
}) => (
  <button
     aria-label={ariaLabel}
     data-pos={dataPos}
     className={crCn(CL_BT, className)}
     style={style}
     onClick={onClick}
  >
     {caption}
  </button>
);

export default CircleButton
