import useButton from './useButton';
import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;

const ModalButton = ({
  ariaLabel,
  dataPos,
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
      className={CL_BT_FLAT}
      style={style}
      onClick={onClick}
    >
      <div className={clDiv}>
        <BtCaption
          className={CL_BT_FLAT_SPAN}
          caption={caption}
          hotKey={hotKey}
        >
           {children}
        </BtCaption>
      </div>
    </button>
  );
}

export default ModalButton
