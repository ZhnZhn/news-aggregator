const S = {
  STEP : {
    color: '#80c040',
    display: 'inline-block',
    width: 26,
    height: 26,
    lineHeight: '24px',
    textAlign: 'center',
    textTransform: 'uppercase',
    border: '2px solid #80c040',
    borderRadius: '50%',
    fontSize: '1.125rem'
  },
  DESCR: {
    color: 'black'
  }
}

const Step = ({ styleRoot, step='0', description }) => (
  <p style={styleRoot}>
    <span style={S.STEP}>
        {step}
    </span>
    <span style={S.DESCR}>
      &nbsp;{description}
    </span>
 </p>
);

export default Step
