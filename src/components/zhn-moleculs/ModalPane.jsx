import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';
import useTheme from '../hooks/useTheme';

import styleConfig from './ModalPane.Style';

const ModalPane = ({
  isShow,
  style,
  children,
  onClose
}) => {
  const _refElement = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose)
  , _hKeyDown = isShow ? _hKeyEscape : void 0
  , TS = useTheme(styleConfig);

  return (
    <div
       role="presentation"
       ref={_refElement}
       style={{...style, ...TS.ROOT}}
       onKeyDown={_hKeyDown}
    >
      {children}
    </div>
  );
}

export default ModalPane
