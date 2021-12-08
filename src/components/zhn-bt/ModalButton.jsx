import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat';
const CL_BT_FLAT_SPAN = 'bt-flat__span';

const ModalButton = ({
  style,
  clDiv,
  title,
  caption,
  accessKey,
  children,
  onClick
}) => (
  <button
    className={CL_BT_FLAT}
    style={style}
    title={title}
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
