import {
  useRef,
  useEffect,
  getRefValue,
  setRefValue,
  focusRefElement
} from '../uiApi';

const useFocusRefElementIf = (
  isShow,
  refFocusItem
) => {
   const _refElement = useRef()
   , _refPrevElement = useRef();

   /*eslint-disable react-hooks/exhaustive-deps */
   useEffect(()=>{
     if (isShow && !getRefValue(_refPrevElement)) {
       setRefValue(_refPrevElement, document.activeElement)
       focusRefElement(refFocusItem, _refElement)
     } else if (!isShow) {
       focusRefElement(_refPrevElement)
       setRefValue(_refPrevElement, null)
     }
   }, [isShow])
   // refFocusItem
   /*eslint-enable react-hooks/exhaustive-deps */

   return _refElement;
};

export default useFocusRefElementIf
