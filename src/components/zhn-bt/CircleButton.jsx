import { crTooltip } from '../a11yFn';
import {
  CL_SELECT_NONE,
  crCn
} from '../crStyle';

const CL_BT = `bt-circle ${CL_SELECT_NONE}`;

const CircleButton = (props) => {
  const [
    _ariaLabel,
    _dataPos
  ] = crTooltip(
    props.ariaLabel,
    props.dataPos
  );
  return (
    <button
       type="button"
       aria-label={_ariaLabel}
       data-pos={_dataPos}
       className={crCn(CL_BT, props.className)}
       style={props.style}
       onClick={props.onClick}
    >
       {props.caption || ''}
    </button>
  );
}

export default CircleButton
