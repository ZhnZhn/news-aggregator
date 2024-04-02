import {
  useRef,
  useEffect,
  isFn
} from '../uiApi';

const useRegRef = (onReg) => {
  const ref = useRef(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    const _node = ref.current;
    if (isFn(onReg) && _node){
      onReg(_node)
    }
    return () => { ref.current = null };
  }, [])
  //onReg, ref
  /*eslint-enable react-hooks/exhaustive-deps */
  return ref;
};

export default useRegRef
