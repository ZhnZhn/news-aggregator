import React from 'react'

import CaptionInput from './CaptionInput'

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

const FlatButton = ({
  rootStyle, clDiv, title='', caption,
  accessKey,
  children,
  onClick
}) =>
  <button
    className={CL_BT}
    style={rootStyle}
    type="button"
    tabIndex={0}
    title={title}
    accessKey={accessKey}
    onClick={onClick}
  >
    <div className={clDiv}>
      <CaptionInput
        className={CL_BT_SPAN}
        caption={caption}
        accessKey={accessKey}
      />
      {children}
    </div>
  </button>


export default FlatButton
