import { focusRefElement } from '../uiApi';

/*eslint-disable jsx-a11y/no-noninteractive-tabindex*/
const TrapDiv = ({
  onFocus
}) => (
  <div
    tabIndex="0"
    aria-hidden="true"
    onFocus={onFocus}
  />
);
/*eslint-enable jsx-a11y/no-noninteractive-tabindex*/

const FocusTrap = ({
  refEl,
  isShow,
  children
}) => {
  const _onFocusTrapDiv = () => {
    if (isShow) {
      focusRefElement(refEl)
    }
  };
  return (
    <>
      <TrapDiv onFocus={_onFocusTrapDiv} />
      {children}
      <TrapDiv onFocus={_onFocusTrapDiv} />
    </>
  )
}

export default FocusTrap
