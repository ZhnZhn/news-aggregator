import crCn from '../zhn-utils/crCn';
import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat';
const CL_BT_FLAT_SPAN = 'bt-flat__span';

const FlatButton = ({
  ariaLabel,
  dataPos,
  className,
  style,
  clDiv,
  caption,
  accessKey,
  children,
  onClick
}) => (
  <button
    aria-label={ariaLabel}
    data-pos={dataPos}
    className={crCn(CL_BT_FLAT, className)}
    style={style}
    accessKey={accessKey}
    onClick={onClick}
  >
    <div className={clDiv}>
      { caption
         ? <BtCaption
             className={CL_BT_FLAT_SPAN}
             caption={caption}
             accessKey={accessKey}
           />
         : null
      }
      {children}
    </div>
  </button>
);

export default FlatButton
