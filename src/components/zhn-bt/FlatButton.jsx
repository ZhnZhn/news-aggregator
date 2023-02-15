import crCn from '../zhn-utils/crCn';

import useButton from './useButton';
import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;

const FlatButton = ({
  ariaLabel,
  dataPos,
  className,
  style,
  clDiv,
  caption,
  hotKey,
  children,
  onClick
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useButton(
    ariaLabel,
    dataPos,
    hotKey,
    onClick
  );

  return (
    <button
      type="button"
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      className={crCn(CL_BT_FLAT, className)}
      style={style}
      onClick={onClick}
    >
      <div className={clDiv}>
        { caption
           ? <BtCaption
               className={CL_BT_FLAT_SPAN}
               caption={caption}
               hotKey={hotKey}
             />
           : null
        }
        {children}
      </div>
    </button>
  );
}

export default FlatButton
