import React from 'react'

const S = {
  ROOT: {
    marginTop: '16px',
    marginLeft: '8px'
  },
  SPAN: {
    color: 'black'
  }
}

const PoweredBy = ({ rootStyle, spanStyle, children }) =>
  <div style={{...S.ROOT, ...rootStyle}}>
    <span style={{...S.SPAN, ...spanStyle}}>Powered by&nbsp;&nbsp;</span>
      {children}
  </div>

export default PoweredBy
