import {
  S_NONE,
  crCn,
  crContainerBgCn,
  crStyle2
} from '../crStyle'

import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';

const CL_MODAL_PANE = crContainerBgCn();

const ModalPane = ({
  isShow,
  className,
  style,
  children,
  onClose,
  onKeyDown,
  ...restProps
}) => {
  const _refElement = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose);

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
    <div
       {...restProps}
       ref={_refElement}
       className={crCn(CL_MODAL_PANE, className)}
       style={crStyle2(style, isShow ? void 0 : S_NONE)}
       onKeyDown={isShow ? onKeyDown || _hKeyEscape : void 0}
    >
      {children}
    </div>
    /*eslint-enable jsx-a11y/no-static-element-interactions*/
  );
}

export default ModalPane
