import React from 'react';

const S = {
  STEP : {
    display : 'inline-block',
    color: '#80c040',
    border : '2px solid #80c040',
    borderRadius : '50%',
    textTransform: 'uppercase',
    fontSize: '18px',
    lineHeight: '24px',
    width : '26px',
    height : '26px',
    textAlign: 'center'
  },
  DESCR: {
    color: 'black'
  }
}

const Step = ({ styleRoot, step='0', description }) =>
  <p style={styleRoot}>
    <span style={S.STEP}>
        {step}
    </span>
    <span style={S.DESCR}>
      &nbsp;{description}
    </span>
 </p>

export default Step
