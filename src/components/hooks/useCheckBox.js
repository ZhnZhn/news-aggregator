import isKeyEnter from './isKeyEnter';
import useToggle from './useToggle';

const FN_NOOP = () => {};

const useCheckBox = (
  initialValue,
  onCheck=FN_NOOP,
  onUnCheck=FN_NOOP
) => {
  const [
    isChecked,
    toggleIsChecked
  ] = useToggle(initialValue)
  , hClick = () => {
     (isChecked ? onUnCheck : onCheck)();
     toggleIsChecked()
    }
  , hKeyDown = (evt) => {
      if (isKeyEnter(evt)){
        evt.preventDefault()
        hClick()
      }
  };

  return [
    isChecked,
    hClick,
    hKeyDown
  ];
}

export default useCheckBox
