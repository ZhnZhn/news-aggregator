import {
  useState,
  useEffect
} from '../uiApi';

const AsyncShowComponent = ({
  is,
  mls,
  children
}) => {
  const [
    isShow,
    setIsShow
  ] = useState(is)

  useEffect(() => {
    let _idTimeout;
    if (is) {
      _idTimeout = setTimeout(() => setIsShow(true), mls)
    } else {
      setIsShow(false)
    }
    return () => clearTimeout(_idTimeout);
  }, [is, mls])

  return is && isShow
    ? children
    : null;
}

export default AsyncShowComponent
