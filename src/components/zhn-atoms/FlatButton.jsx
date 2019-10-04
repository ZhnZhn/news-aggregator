import React from 'react'

import CaptionInput from './CaptionInput'

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

const FlatButton = ({
  className='',
  rootStyle, clDiv,
  title='', caption,
  accessKey,
  children,
  onClick
}) => (
  <button
    className={`${CL_BT} ${className}`}
    style={rootStyle}
    type="button"
    tabIndex={0}
    title={title}
    accessKey={accessKey}
    onClick={onClick}
  >
    <div className={clDiv}>
      { caption
         ? <CaptionInput
             className={CL_BT_SPAN}
             caption={caption}
             accessKey={accessKey}
           />
         : null
      }
      {children}
    </div>
  </button>
);

export default FlatButton
