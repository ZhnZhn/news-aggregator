import useCheckBox from '../hooks/useCheckBox';
import SvgCheckBox from '../zhn-atoms/svg/SvgCheckBox';

const S_ROW_CHECKBOX = {
  margin: '24px 0 0 16px'
}
, S_CHECKBOX_CAPTION = {
  fontWeight: 'bold',
  marginLeft: 8,
  userSelect: 'none'
};

const RowCheckBox = ({
  refChb,
  style=S_ROW_CHECKBOX,
  initialValue,
  caption,
  onCheck,
  onUnCheck,
  onToggle
}) => {
  const [
    isChecked,
    hClick,
    hKeyDown
  ] = useCheckBox(
    initialValue,
    onCheck || onToggle,
    onUnCheck || onToggle
  );
  return (
    <div style={style}>
      <SvgCheckBox
        refChb={refChb}
        isChecked={isChecked}        
        onClick={hClick}
        onKeyDown={hKeyDown}
      />
      <button
        type="button"
        tabIndex="-1"
        style={S_CHECKBOX_CAPTION}
        onClick={hClick}
      >
        {caption}
      </button>
    </div>
  );
};

export default RowCheckBox
