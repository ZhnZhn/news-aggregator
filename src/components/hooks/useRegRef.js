import { useLayoutEffect } from 'react';

const useRegRef = (onReg, ref) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  useLayoutEffect(()=>{
    const _node = ref.current;
    if (typeof onReg == 'function' && _node){
      onReg(_node)
    }
  }, [])
  //onReg, ref
  /*eslint-enable react-hooks/exhaustive-deps */
};

export default useRegRef
