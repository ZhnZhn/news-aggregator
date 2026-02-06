import useModalFocus from '../hooks/useModalFocus';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';

import ModalPane from './ModalPane';
import FocusTrap from './FocusTrap';
import InputSwitch from '../zhn/InputSwitch';

const S_MODAL_POPUP = {
  color: 'var(--black)',
  left: 0,
  zIndex: 100,
  padding: '4px 12px 12px',
  lineHeight: 2.2,
  fontSize: '1rem',
  fontWeight: '700'
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

const ModalToggle = (props) => {
  const _refFirst = useModalFocus(props.isShow)
  , [
    _getFocusRef,
    _refLast
  ] = useItemsFocusTrap(
    props.configs,
    _refFirst
  );

  return _getFocusRef ? (
  <ModalPane
    isShow={props.isShow}
    className={props.className}
    style={{...S_MODAL_POPUP, ...props.style}}
    onClose={props.onClose}
  >
    <FocusTrap
      refFirst={_refFirst}
      refLast={_refLast}
    >
      {props.configs.map((item, index) => (
         <InputSwitch
           key={item.id}
           refChb={_getFocusRef(index)}
           initialValue={item.df}
           style={S_CHB_TOGGLE}
           caption={_crCaption(item.caption)}
           onToggle={() => props.onToggle(item.id)}
         />
      ))}
    </FocusTrap>
  </ModalPane>
) : null;
}

export default ModalToggle
