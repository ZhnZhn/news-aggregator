import React from 'react'

const CL_BT = 'bt-flat';
const CL_BT_SPAN = 'bt-flat__span';

const FlatButton = ({ rootStyle, clDiv, title='', caption, children, onClick }) =>
  <button
    className={CL_BT}
    style={rootStyle}
    type="button"
    tabIndex={0}
    title={title}
    onClick={onClick}
  >
    <div className={clDiv}>
      <span className={CL_BT_SPAN}>
        {caption}
      </span>
      {children}
    </div>
  </button>


export default FlatButton
