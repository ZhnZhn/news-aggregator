import {
  useRef,
  getFocusRef
} from '../uiApi';

import useModalFocus from '../hooks/useModalFocus';

import ModalPopup from './ModalPopup';
import FocusTrap from './FocusTrap';
import RowCheckBox from '../dialogs/RowCheckBox';

const _isArr = Array.isArray;

const S_MODAL_POPUP = {
  left: 8,
  zIndex: 100,
  padding: '4px 12px 12px'
}
, S_CAPTION = {
  maxWidth: 150,
  paddingBottom: 2,
  textAlign: 'left',
  verticalAlign: 'middle'
}
, S_CHB_TOGGLE = {
  padding: '6px 0 6px',
  lineHeight: 'normal'
};

const _crCaption = (
  caption
) => {
  const _index = caption.indexOf('(');
  return _index === -1
    ? caption
    : caption.slice(0, _index-1);
};

const ModalToggle = ({
  isShow,
  className,
  style,
  chbStroke,
  configs,
  onToggle,
  onClose
}) => {
  const _refFirst = useModalFocus(isShow)
  , _refLast = useRef();

  if (!_isArr(configs)) {
    return null;
  }
  const _lastIndex = configs.length - 1;
  return (
  <ModalPopup
    isShow={isShow}
    style={{...S_MODAL_POPUP, ...style}}
    className={className}
    onClose={onClose}
  >
    <FocusTrap
      refFirst={_refFirst}
      refLast={_refLast}
    >
      {configs.map((item, index) => (
         <RowCheckBox
           refChb={getFocusRef(
             _refFirst,
             _refLast,
             _lastIndex,
             index
           )}
           key={item.id}
           initialValue={item.df}
           style={S_CHB_TOGGLE}
           stroke={chbStroke}
           caption={_crCaption(item.caption)}
           captionStyle={S_CAPTION}
           onToggle={() => onToggle(item.id)}
         />
      ))}
    </FocusTrap>
  </ModalPopup>
);
}

export default ModalToggle
