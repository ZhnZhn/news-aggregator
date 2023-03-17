import {
  useRef,
  useEffect,
  focusRefElement
} from '../uiApi';

const useFocusRefElementIf = (
  isShow
) => {
   const _refElement = useRef()
   , _refPrevElement = useRef();

   useEffect(()=>{
     if (isShow && !_refPrevElement.current) {
       _refPrevElement.current = document.activeElement
       focusRefElement(_refElement)
     } else if (!isShow) {
       focusRefElement(_refPrevElement)
       _refPrevElement.current = null
     }
   }, [isShow])

   return _refElement;
};

export default useFocusRefElementIf
