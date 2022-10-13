import useTooltip from '../hooks/useTooltip';
import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;

const ModalButton = ({
  ariaLabel,
  dataPos,
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
      className={CL_BT_FLAT}
      style={style}
      accessKey={accessKey}
      onClick={onClick}
    >
      <div className={clDiv}>
        <BtCaption
          className={CL_BT_FLAT_SPAN}
          caption={caption}
          accessKey={accessKey}
        >
           {children}
        </BtCaption>
      </div>
    </button>
  );
}

export default ModalButton
