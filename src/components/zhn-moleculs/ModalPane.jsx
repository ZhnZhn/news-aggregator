import { crPresentationRole } from '../a11yFn';

import {
  crCn,
  crContainerBgCn
} from '../crStyle'

import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';

const CL_MODAL_PANE = crContainerBgCn();

const ModalPane = ({
  isShow,
  className,
  style,
  children,
  onClose
}) => {
  const _refElement = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
       {...crPresentationRole(isShow)}
       ref={_refElement}
       className={crCn(CL_MODAL_PANE, className)}
       style={style}
       onKeyDown={isShow ? _hKeyEscape : void 0}
    >
      {children}
    </div>
    /*eslint-enable jsx-a11y/no-static-element-interactions*/
  );
}

export default ModalPane
