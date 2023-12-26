import useBool from './useBool';
import useKeyEscape from './useKeyEscape';

const useShowHideComponent = (
  isShowInitial
) => {
  const [
    isShow,
    showComp,
    hideComp
  ] = useBool(isShowInitial);
  return [
    isShow,
    showComp,
    hideComp,
    useKeyEscape(hideComp)
  ];
};

export default useShowHideComponent
