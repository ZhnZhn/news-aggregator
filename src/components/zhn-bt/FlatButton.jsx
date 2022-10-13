import useTooltip from '../hooks/useTooltip';
import crCn from '../zhn-utils/crCn';
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
  accessKey,
  children,
  onClick
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip(ariaLabel, dataPos);
  return (
    <button
      aria-label={_ariaLabel}
      data-pos={_dataPos}
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
}

export default FlatButton
