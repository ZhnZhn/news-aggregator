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
    if (is) {
      setTimeout(() => setIsShow(true), mls)
    } else {
      setIsShow(false)
    }
  }, [is, mls])

  return is && isShow
    ? <>{children}</>
    : null;
}

export default AsyncShowComponent
