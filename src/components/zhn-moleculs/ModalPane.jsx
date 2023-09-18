import { crContainerBgCn } from '../crStyle'

import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';

const CL_MODAL_PANE = crContainerBgCn();

const ModalPane = ({
  id,
  isShow,
  style,
  children,
  onClose
}) => {
  const _refElement = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);

  return (
    <div
       id={id}
       role="presentation"
       aria-hidden={!isShow}
       ref={_refElement}
       className={CL_MODAL_PANE}
       style={style}
       onKeyDown={isShow ? _hKeyEscape : void 0}
    >
      {children}
    </div>
  );
}

export default ModalPane
