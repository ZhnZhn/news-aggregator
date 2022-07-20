import {
  useState,
  useMemo
} from '../uiApi';

const useBool = (
  initialValue
) => {
  const [
    is,
    setIs
  ] = useState(() => !!initialValue);
  return [
    is,
    ...useMemo(() => [
      //setTrue
      () => setIs(true),
      //setFalse
      () => setIs(false)
    ], [])
  ];
};

export default useBool
