import { isFn } from '../../utils/isTypeFn';
import { joinByBlank } from '../../utils/joinBy';

import { crTooltip } from '../a11yFn';
import Svg from './svg/Svg';
import { DP_MIDDLE_LEFT } from '../DP';

const S_SVG = {
  fill: 'inherit',
  stroke: 'inherit'
};

const Circle = ({
  cy
}) => (
  <circle cx="3" cy={cy} r="2.5" />
);

const BtSvgOption = (props) => {
  if (!isFn(props.onClick)) {
    return null;
  }

  const [
    _ariaLabel,
    _dataPos
  ] = crTooltip(
    joinByBlank('Open', props.ariaLabelToken, 'menu'),
    DP_MIDDLE_LEFT
  );
  return (
    <button
      ref={props.btRef}
      type="button"
      aria-label={_ariaLabel}
      data-pos={_dataPos}
      className={props.className}
      onClick={props.onClick}
    >
      <Svg
        w="6"
        h="24"
        style={S_SVG}
      >
        <Circle cy="4" />
        <Circle cy="12" />
        <Circle cy="19" />
      </Svg>
    </button>
  );
};

export default BtSvgOption
