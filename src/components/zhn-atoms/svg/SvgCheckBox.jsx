import useToggle from '../../hooks/useToggle';
import isKeyEnter from '../../hooks/isKeyEnter';

import Svg100 from './Svg100';

const COLOR_BLANK = "rgba(0,0,0,0)"
, COLOR_GREY = "#777777"
, DF_COLOR_IS = "#2f7ed8"
, CHECKBOX_WIDTH = 16
, S_DIV = {
  display: 'inline-block',
  width: CHECKBOX_WIDTH,
  height: CHECKBOX_WIDTH,
  cursor: 'pointer'
}
, S_SVG = { display: 'inline-block' };


const SvgChecked = ({ stroke }) => (
  <path
     d="M 2,5 L 8,14 14,1"
     strokeWidth="2"
     strokeLinecap="round"
     stroke={stroke}
     fill={COLOR_BLANK}
  />
);

const _isFn = fn => typeof fn === 'function'
, _crRestStyle = (
  stroke,
  fill=stroke
) => ({
  stroke,
  fill
});

const SvgCheckBox = ({
  initialValue,
  style,
  stroke,
  onCheck,
  onUnCheck
}) => {
  const [
    isChecked,
    toggleIsChecked
  ] = useToggle(initialValue)
  , _hClick = () => {
      if (!isChecked && _isFn(onCheck)){
        onCheck();
      } else if (_isFn(onUnCheck)){
        onUnCheck();
      }
      toggleIsChecked()
    }
  , _hKeyDown = (evt) => {
      if (isKeyEnter(evt)){
        evt.preventDefault()
        _hClick()
      }
  }
  , _restStyle = isChecked
      ? _crRestStyle(DF_COLOR_IS)
      : _crRestStyle(COLOR_GREY, COLOR_BLANK);

  return (
    <div
       role="checkbox"
       tabIndex="0"
       aria-checked={isChecked}
       style={{...S_DIV, ...style}}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <Svg100
        w={CHECKBOX_WIDTH}
        style={S_SVG}
      >
        <rect
           x="1" y="1"
           height="14" width="14"
           strokeWidth="2" rx="3"
           strokeLinecap="round"
           {..._restStyle}
        />
        { isChecked
            ? <SvgChecked stroke={stroke} />
            : null
        }
      </Svg100>
    </div>
  );
};

export default SvgCheckBox
