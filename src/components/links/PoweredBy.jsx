import React from 'react'

const S = {
  ROOT: {
    marginTop: 16,
    marginLeft: 8
  },
  SPAN: {
    color: 'black'
  }
};

const PoweredBy = ({ rootStyle, spanStyle, children }) => (
  <div style={{...S.ROOT, ...rootStyle}}>
    <span style={{...S.SPAN, ...spanStyle}}>
        Powered by
    </span>
      {children}
  </div>
);

export default PoweredBy
