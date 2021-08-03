import { useRef, useEffect } from 'react';

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

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(()=>{
    if (typeof onReg == 'function'){
      onReg(_refBtNode.current)
    }
    return () => { _refBtNode.current = null };
  }, [])
  //onReg
  /*eslint-enable react-hooks/exhaustive-deps */

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
