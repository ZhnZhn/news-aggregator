import useTooltip from '../hooks/useTooltip';
import { crCn } from '../crStyle';

const CL_BT = 'bt-circle select-none';

const CircleButton = (props) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip(
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
