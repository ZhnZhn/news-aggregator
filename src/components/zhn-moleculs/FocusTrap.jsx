import { focusRefElement } from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
const TrapDiv = (props) => (
  <div
    tabIndex="0"
    aria-hidden="true"
    style={props.style}
    onFocus={props.onFocus}
  />
);
/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/

const FocusTrap = ({
  refEl,
  refFirst,
  refLast,
  style,
  children
}) => HAS_KEYBOARD_FOCUS ? (
  <>
    <TrapDiv
      style={style}
      onFocus={() => {
        focusRefElement(refLast, refEl)
      }}
    />
    {children}
    <TrapDiv
      style={style}
      onFocus={() => {
        focusRefElement(refFirst, refEl)
      }}
    />
  </>
) : children;


export default FocusTrap
