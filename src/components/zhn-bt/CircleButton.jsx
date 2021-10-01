import crCn from '../zhn-utils/crCn';

const CL_BT = 'bt-circle not-selected';

const CircleButton = ({
  caption='',
  title,
  className,
  style,
  onClick
}) => (
  <button
     className={crCn(CL_BT, className)}
     style={style}
     title={title}
     onClick={onClick}
  >
     {caption}
  </button>
);

export default CircleButton
