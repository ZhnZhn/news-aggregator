const S_P = { marginTop: 3 }
, S_STEP = {
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
  }
  , S_DESCR = { color: 'black' };

const Step = ({
  step,
  description
}) => (
  <p style={S_P}>
    <span style={S_STEP}>
      {step}
    </span>
    <span style={S_DESCR}>
      &nbsp;{description}
    </span>
 </p>
);

export default Step
