import { crCn } from '../crStyle';

import useButton from './useButton';
import BtCaption from './BtCaption';

const CL_BT_FLAT = "bt-flat"
, CL_BT_FLAT_DIV = `${CL_BT_FLAT}__div`
, CL_BT_FLAT_SPAN = `${CL_BT_FLAT}__span`;

const FlatButton = (props) => {
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
      className={crCn(CL_BT_FLAT, props.className)}
      style={props.style}
      onClick={props.onClick}
    >
      <div className={CL_BT_FLAT_DIV}>
        { props.caption
           ? <BtCaption
               className={CL_BT_FLAT_SPAN}
               caption={props.caption}
               hotKey={props.hotKey}
             />
           : null
        }
        {props.children}
      </div>
    </button>
  );
}

export default FlatButton
