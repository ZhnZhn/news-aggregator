import { forwardRef } from '../uiApi';

import ArrowCell from './ArrowCell';
import { CL_SELECT_DIV_BT } from './Input.Style';

const ButtonArrow = forwardRef(({
  style,
  onKeyDown,
  onClick
}, ref) => (
  <button
    ref={ref}
    type="button"
    className={CL_SELECT_DIV_BT}
    style={style}
    onKeyDown={onKeyDown}
    onClick={onClick}
  >
     <ArrowCell />
  </button>
))

export default ButtonArrow
