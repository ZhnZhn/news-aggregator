import {
  useRef,
  useMemo,
  getFocusRef
} from '../uiApi';

const _isArr = Array.isArray;

const useFocusTrap = (
  items,
  ref1,
  ref2
) => {
  const _ref1 = useRef()
  , _ref2 = useRef()
  , _refFirstItem = ref1 || _ref1
  , _refLastItem = ref2 || _ref2
  , _getFocusRef = useMemo(() =>
    _isArr(items) ? (index) => {
    const _lastIndex = items.length - 1;
    return getFocusRef(
      _refFirstItem,
      _refLastItem,
      _lastIndex,
      index
    );
  } : void 0, [items, _refFirstItem, _refLastItem]);
  return [
    _getFocusRef,
    _refLastItem,
    _refFirstItem
  ];
}

export default useFocusTrap
