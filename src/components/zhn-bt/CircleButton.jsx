import useTooltip from '../hooks/useTooltip';
import { crCn } from '../crStyle';

const CL_BT = 'bt-circle select-none';

const CircleButton = ({
  ariaLabel,
  dataPos,
  caption,
  className,
  style,
  onClick
}) => {
  const [
    _ariaLabel,
    _dataPos
  ] = useTooltip(ariaLabel, dataPos);
  return (
    <button
       type="button"
       aria-label={_ariaLabel}
       data-pos={_dataPos}
       className={crCn(CL_BT, className)}
       style={style}
       onClick={onClick}
    >
       {caption || ''}
    </button>
  );
}

export default CircleButton
