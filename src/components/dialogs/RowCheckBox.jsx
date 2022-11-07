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
  style=S_ROW_CHECKBOX,
  initialValue,
  stroke,
  caption,
  onCheck,
  onUnCheck
}) => {
  const [
    isChecked,
    hClick,
    hKeyDown
  ] = useCheckBox(
    initialValue,
    onCheck,
    onUnCheck
  );
  return (
    <div style={style}>
      <SvgCheckBox
        isChecked={isChecked}
        stroke={stroke}
        onClick={hClick}
        onKeyDown={hKeyDown}
      />
      <button
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
