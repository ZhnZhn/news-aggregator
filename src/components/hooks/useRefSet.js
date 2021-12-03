import { useRef, useCallback } from 'react';

const useRefSet = initialValue => {
  const ref = useRef(initialValue)
  , setValue = useCallback(value => {
    ref.current = value
  }, []);
  return [ref, setValue];
};

export default useRefSet
