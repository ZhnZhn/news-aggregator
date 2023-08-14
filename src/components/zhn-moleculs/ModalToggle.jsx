import useModalFocus from '../hooks/useModalFocus';
import useFocusTrap from '../hooks/useFocusTrap';

import ModalPopup from './ModalPopup';
import FocusTrap from './FocusTrap';
import RowCheckBox from '../dialogs/RowCheckBox';

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
  , [
    _getFocusRef,
    _refLast
  ] = useFocusTrap(
    configs,
    _refFirst
  );

  return _getFocusRef ? (
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
           refChb={_getFocusRef(index)}
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
) : null;
}

export default ModalToggle
