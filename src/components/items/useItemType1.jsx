import {
  useState,
  useMemo,
  focusRefElement
} from '../uiApi';

// [isShowDescr, hToggle, hHide]
const useItemType1 = (
  ref
) => {
  const [
    isShowDescr,
    setIsShowDescr
  ] = useState(false);

  return [
    isShowDescr,
    /*eslint-disable react-hooks/exhaustive-deps */
    ...useMemo(() => [
      () => setIsShowDescr(is => !is),
      () => {
        focusRefElement(ref)
        setIsShowDescr(false)
      }
    ], [])
    //ref
    /*eslint-enable react-hooks/exhaustive-deps */
  ];
};

export default useItemType1
