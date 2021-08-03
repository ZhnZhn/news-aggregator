import { useRef } from 'react';
import useRegRef from '../hooks/useRegRef';

import CaptionInput from './CaptionInput';

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

const ModalButton = ({
  style, clDiv,
  title, caption,
  accessKey,
  children,
  onReg,
  onClick
}) => {
  const _refBtNode = useRef(null);
  useRegRef(onReg, _refBtNode)

  return (
    <button
      ref={_refBtNode}
      className={CL_BT}
      style={style}
      title={title}
      accessKey={accessKey}
      onClick={onClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={CL_BT_SPAN}
          caption={caption}
          accessKey={accessKey}
        >
           {children}
        </CaptionInput>
      </div>
    </button>
  );
};

export default ModalButton
