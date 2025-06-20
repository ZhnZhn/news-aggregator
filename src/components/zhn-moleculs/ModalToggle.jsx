import useModalFocus from '../hooks/useModalFocus';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';

import ModalPopup from './ModalPopup';
import FocusTrap from './FocusTrap';
import InputSwitch from '../zhn/InputSwitch';

const S_MODAL_POPUP = {
  color: 'var(--black)',
  left: 8,
  zIndex: 100,
  padding: '4px 12px 12px',
  lineHeight: 2.2,
  fontSize: '1rem',
  fontWeight: '700'
}
, S_CHB_TOGGLE = {
  width: '110%',
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
  ] = useItemsFocusTrap(
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
         <InputSwitch
           key={item.id}
           refChb={_getFocusRef(index)}
           initialValue={item.df}
           style={S_CHB_TOGGLE}
           caption={_crCaption(item.caption)}
           onToggle={() => onToggle(item.id)}
         />
      ))}
    </FocusTrap>
  </ModalPopup>
) : null;
}

export default ModalToggle
