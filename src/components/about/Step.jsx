import { S_COLOR_BLACK } from '../crStyle';

const S_MT_3 = {
  marginTop: 3
}
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
};

const Step = ({
  step,
  description
}) => (
  <p style={S_MT_3}>
    <span style={S_STEP}>
      {step}
    </span>
    <span style={S_COLOR_BLACK}>
      &nbsp;{description}
    </span>
 </p>
);

export default Step
