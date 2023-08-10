import { HAS_TOUCH_EVENTS } from '../has';
import useTheme from '../hooks/useTheme';
import useFocusRefElementIf from '../hooks/useFocusRefElementIf';

import styleConfig from '../source-browsers/NewsBrowser.Style';

import ModalPopup from '../zhn-moleculs/ModalPopup';
import Menu from './Menu';

const HAS_NOT_TOUCH_EVENTS = !HAS_TOUCH_EVENTS;

const PanelQuery = ({
  menuModel,
  refFocusItem,
  className,
  paneStyle,
  isShow,
  onClose
}) => {
  const TS = useTheme(styleConfig)
  , _refFirstItem = useFocusRefElementIf(
      isShow && HAS_NOT_TOUCH_EVENTS,
      refFocusItem
  );

  return (
    <ModalPopup
      isShow={isShow}
      className={className}
      style={paneStyle}
      onClose={onClose}
    >
       <Menu
         refFirstItem={_refFirstItem}
         menuModel={menuModel}
         style={TS.OPEN_CLOSE}
         itemStyle={TS.ITEM}
       />
     </ModalPopup>
  );
};

export default PanelQuery
