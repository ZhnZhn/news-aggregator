import ArrowCell from './ArrowCell';
import { CL_SELECT_DIV_BT } from './Input.Style';

const ButtonArrow = ({
  refEl,
  style,
  onKeyDown,
  onClick
}) => (
  <button
    ref={refEl}
    type="button"
    className={CL_SELECT_DIV_BT}
    style={style}
    onKeyDown={onKeyDown}
    onClick={onClick}
  >
     <ArrowCell />
  </button>
)

export default ButtonArrow
