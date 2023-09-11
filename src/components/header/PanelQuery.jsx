import { useRef } from '../uiApi';
import { HAS_TOUCH_EVENTS } from '../has';

import useTheme from '../hooks/useTheme';
import useFocusRefElementIf from '../hooks/useFocusRefElementIf';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';

import styleConfig from '../source-browsers/NewsBrowser.Style';

import ModalPopup from '../zhn-moleculs/ModalPopup';
import FocusTrap from '../zhn-moleculs/FocusTrap';
import Menu from './Menu';

const HAS_NOT_TOUCH_EVENTS = !HAS_TOUCH_EVENTS;

const PanelQuery = ({
  menuModel,
  refFocusItem,
  className,
  isShow,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _refFirstItem = useFocusRefElementIf(
      isShow && HAS_NOT_TOUCH_EVENTS,
      refFocusItem
  )
  , _refLastItem = useRef()
  , _getFocusRef = useItemsFocusTrap(
    menuModel,
    _refFirstItem,
    _refLastItem
  )[0];

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
           style={TS.OPEN_CLOSE}
           itemStyle={TS.ITEM}
           getFocusRef={_getFocusRef}
         />
       </FocusTrap>
     </ModalPopup>
  );
};

export default PanelQuery
