import ModalPopup from './ModalPopup';
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

const ModalToggle = ({
  isShow,
  className,
  style,
  chbStroke,
  configs,
  onToggle,
  onClose
}) => _isArr(configs) ? (
  <ModalPopup
    isShow={isShow}
    style={{...S_MODAL_POPUP, ...style}}
    className={className}
    onClose={onClose}
  >
    {configs.map(item => (
       <RowCheckBox
         key={item.id}
         initialValue={item.df}
         style={S_CHB_TOGGLE}
         stroke={chbStroke}
         caption={item.caption}
         captionStyle={S_CAPTION}
         onToggle={() => onToggle(item.id)}
       />
    ))}
  </ModalPopup>
) : null;

export default ModalToggle
