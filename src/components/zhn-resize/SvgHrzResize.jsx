import { forwardRef } from '../uiApi';
import { DP_MIDDLE_RIGHT } from '../DP';
import useResizeElement from './useResizeElement';

import BtResize from './BtResize';

const S_ROOT_DIV = {
  display: 'inline-block'
}
, S_ML_10 = {
  marginLeft: 10
};


const SvgHrzResize = forwardRef((
  props,
  ref
) => {
  const [
    hStartResizeLeft,
    hStartResizeRight,
    hStopResize,
    hKdLeft,
    hKdRight
  ] = useResizeElement(props, ref);
  return (
    <div style={{...S_ROOT_DIV, ...props.style}}>
      <BtResize
        ariaLabel="Resize to Left"
        dataPos={DP_MIDDLE_RIGHT}
        style={S_ML_10}
        startResize={hStartResizeLeft}
        stopResize={hStopResize}
        onKeyDown={hKdLeft}
      />
      <BtResize
        to="r"
        ariaLabel="Resize to Right"
        dataPos={DP_MIDDLE_RIGHT}
        style={S_ML_10}
        startResize={hStartResizeRight}
        stopResize={hStopResize}
        onKeyDown={hKdRight}
      />
   </div>
  );
});

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
