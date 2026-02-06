import { useRef } from '../uiApi';
import { HAS_KEYBOARD_FOCUS } from '../has';

import useFocusRefElementIf from '../hooks/useFocusRefElementIf';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';

import ModalPane from '../zhn-moleculs/ModalPane';
import FocusTrap from '../zhn-moleculs/FocusTrap';
import MenuAccordion from './MenuAccordion';

const PanelQuery = (props) => {
  const _refFirstItem = useFocusRefElementIf(
    props.isShow && HAS_KEYBOARD_FOCUS,
    props.refFocusItem
  )
  , _refLastItem = useRef()
  , _getFocusRef = useItemsFocusTrap(
    props.menuModel,
    _refFirstItem,
    _refLastItem
  )[0];

  return (
    <ModalPane
      isShow={props.isShow}
      className={props.className}
      onClose={props.onClose}
    >
      <FocusTrap
        refFirst={_refFirstItem}
        refLast={_refLastItem}
      >
        <MenuAccordion
          menuModel={props.menuModel}
          getFocusRef={_getFocusRef}
        />
      </FocusTrap>
    </ModalPane>
  );
};

export default PanelQuery
