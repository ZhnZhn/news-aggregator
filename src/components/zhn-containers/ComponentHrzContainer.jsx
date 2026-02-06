import { useState } from '../uiApi';
import { CL_HRZ_CONTAINER } from '../crStyle';

import isInCont from './isInCont';

const ComponentHrzContainer = (props) => {
  const [
    containers,
    setContainers
  ] = useState([]);

  props.useMsPane(msPane => {
    const { Comp } = msPane || {};
    if (Comp) {
      setContainers(prevContainers => isInCont(prevContainers, Comp)
         ? prevContainers
         : [Comp, ...prevContainers]
      )
    }
  })

  return (
    <div className={CL_HRZ_CONTAINER}>
      {containers}
    </div>
  );
};

export default ComponentHrzContainer
