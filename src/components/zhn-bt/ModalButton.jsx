import useButton from './useButton';
import BtCaption from './BtCaption';

const CL_BT_FLAT = 'bt-flat'
, CL_BT_FLAT_DIV = `${CL_BT_FLAT}__div`
, CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;

const ModalButton = (props) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useButton(
    props.ariaLabel,
    props.dataPos,
    props.hotKey,
    props.onClick
  );

  return (
    <button
      type="button"
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      className={CL_BT_FLAT}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={CL_BT_FLAT_DIV}>
        <BtCaption
          className={CL_BT_FLAT_SPAN}
          caption={props.caption}
          hotKey={props.hotKey}
        >
           {props.children}
        </BtCaption>
      </div>
    </button>
  );
}

export default ModalButton
