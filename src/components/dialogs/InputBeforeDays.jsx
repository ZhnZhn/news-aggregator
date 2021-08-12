import { forwardRef } from 'react';

import A from '../Comp';

const _onTestDaysBefore = (value) => {
  const _n = parseInt(value, 10);
  return (!Number.isNaN(_n) && _n>0 && _n<31) || value === '';
};

const InputBeforeDays = forwardRef(({ style, initValue }, ref) => (
  <A.TextField
    style={style}
    ref={ref}
    caption="Before Days, Max 30"
    initValue={initValue}
    errorMsg="0<n<31 value must be"
    onTest={_onTestDaysBefore}
  />
));

export default InputBeforeDays
