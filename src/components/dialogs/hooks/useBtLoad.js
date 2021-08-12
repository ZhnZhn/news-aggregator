import { useMemo } from 'react';

import A from '../../Comp';

/*eslint-disable react-hooks/exhaustive-deps */
const useBtLoad = (TS, hLoad) => useMemo(()=>[
  <A.RaisedButton
    key="_load"
    isPrimary={true}
    rootStyle={TS.RAISED_ROOT}
    clDiv={TS.CL_RAISED_DIV}
    caption="Load"
    onClick={hLoad}
  />
], [TS])
//hLoad
/*eslint-enable react-hooks/exhaustive-deps */

export default useBtLoad
