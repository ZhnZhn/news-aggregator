import {
  focusRefElement
} from '../uiApi';

/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
const TrapDiv = ({
  style,
  onFocus
}) => (
  <div
    style={style}
    tabIndex="0"
    aria-hidden="true"
    onFocus={onFocus}
  />
);
/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/

const FocusTrap = ({
  refEl,
  refFirst,
  refLast,
  style,
  children
}) => (
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
);


export default FocusTrap
