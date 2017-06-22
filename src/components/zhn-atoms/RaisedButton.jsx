import React from 'react'

const CL_BT = 'bt-raised';
const CL_BT_SPAN = 'bt-raised__span';

const S = {
  PRIMARY_SPAN: {
    color: 'greenyellow'
  }
}

const RaisedButton = ({ rootStyle, clDiv, caption, isPrimary, onClick }) =>
  <button
    className={CL_BT}
    style={rootStyle}
    type="button"
    tabIndex={0}
    onClick={onClick}
  >
    <div className={clDiv}>
      <span
         className={CL_BT_SPAN}
         style={isPrimary && S.PRIMARY_SPAN}
      >
        {caption}
      </span>
    </div>
  </button>

export default RaisedButton
