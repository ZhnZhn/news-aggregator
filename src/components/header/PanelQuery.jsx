import { useRef } from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

import useFocusRefElementIf from '../hooks/useFocusRefElementIf';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';
import useToggleAccordion from '../hooks/useToggleAccordion';

import ModalPopup from '../zhn-moleculs/ModalPopup';
import FocusTrap from '../zhn-moleculs/FocusTrap';
import Menu from './Menu';

const PanelQuery = ({
  menuModel,
  refFocusItem,
  className,
  isShow,
  onClose
}) => {
  const _refFirstItem = useFocusRefElementIf(
    isShow && HAS_KEYBOARD_FOCUS,
    refFocusItem
  )
  , _refLastItem = useRef()
  , _getFocusRef = useItemsFocusTrap(
    menuModel,
    _refFirstItem,
    _refLastItem
  )[0]
  , _onToggleTopic = useToggleAccordion();

  return (
    <ModalPopup
      isShow={isShow}
      className={className}
      onClose={onClose}
    >
       <FocusTrap
         refFirst={_refFirstItem}
         refLast={_refLastItem}
       >
         <Menu
           menuModel={menuModel}
           getFocusRef={_getFocusRef}
           onToggle={_onToggleTopic}
         />
       </FocusTrap>
     </ModalPopup>
  );
};

export default PanelQuery
