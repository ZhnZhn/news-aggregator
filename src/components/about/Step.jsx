const S = {
  P: {
    marginTop: 3,
  },
  STEP: {
    display: 'inline-block',
    color: '#80c040',
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
};

const Step = ({
  step,
  description
}) => (
  <p style={S.P}>
    <span style={S.STEP}>
      {step}
    </span>
    <span style={S.DESCR}>
      &nbsp;{description}
    </span>
 </p>
);

export default Step
