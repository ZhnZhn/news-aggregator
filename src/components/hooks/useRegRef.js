import { useEffect } from 'react';

const useRegRef = (onReg, ref) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    const _node = ref.current;
    if (typeof onReg == 'function' && _node){
      onReg(_node)
    }
    return () => { ref.current = null };
  }, [])
  //onReg, ref
  /*eslint-enable react-hooks/exhaustive-deps */
};

export default useRegRef
