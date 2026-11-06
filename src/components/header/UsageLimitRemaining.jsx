import { useLimitRemaining } from '../../flux/storeAtoms';

const S_LIMIT_VALUE = {
  display: 'inline-block',
  color: 'var(--bt-fc,#6ca1dc)',
  padding: '5px 10px 0',
  fontSize: '1rem',
  fontWeight: 'bold'
};

const UsageLimitRemaining = () => {
  const value = useLimitRemaining();
  return (
    <span style={S_LIMIT_VALUE}>
      {value}
    </span>
  );
};

export default UsageLimitRemaining
