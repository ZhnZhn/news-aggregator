import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat';
const CL_BT_FLAT_SPAN = 'bt-flat__span';

const ModalButton = ({
  ariaLabel,
  dataPos,
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

export default ModalButton
