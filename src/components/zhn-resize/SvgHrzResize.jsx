import { DP_MIDDLE_RIGHT } from '../DP';
import useResizeElement from './useResizeElement';

import BtResize from './BtResize';

const RESIZE_PANE_TO = "Resize pane to"
, RESIZE_PANE_TO_LEFT = `${RESIZE_PANE_TO} left`
, RESIZE_PANE_TO_RIGHT = `${RESIZE_PANE_TO} right`
, S_ROOT_DIV = {
  display: 'inline-block'
}
, S_ML_10 = {
  marginLeft: 10
};

const SvgHrzResize = (
  props
) => {
  const [
    hStartResizeLeft,
    hStartResizeRight,
    hStopResize,
    hKdLeft,
    hKdRight
  ] = useResizeElement(props);
  return (
    <div style={{...S_ROOT_DIV, ...props.style}}>
      <BtResize
        ariaLabel={RESIZE_PANE_TO_LEFT}
        dataPos={DP_MIDDLE_RIGHT}
        style={S_ML_10}
        startResize={hStartResizeLeft}
        stopResize={hStopResize}
        onKeyDown={hKdLeft}
      />
      <BtResize
        to="r"
        ariaLabel={RESIZE_PANE_TO_RIGHT}
        dataPos={DP_MIDDLE_RIGHT}
        style={S_ML_10}
        startResize={hStartResizeRight}
        stopResize={hStopResize}
        onKeyDown={hKdRight}
      />
   </div>
  );
};

/*
SvgHrzResize.propTypes = {
  elementRef: PropTypes.ref,
  style: PropTypes.object,
  initWidth: PropTypes.number,
  minWidth: PropTypes.number,
  maxWidth: PropTypes.number,
  step: PropTypes.number,
  onResizeAfter: PropTypes.func
}
*/

export default SvgHrzResize
