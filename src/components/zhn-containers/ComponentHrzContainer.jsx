import { useState } from '../uiApi';

import isInCont from './isInCont';

const CL = "hrz-container";

const ComponentHrzContainer = ({
  useMsPane
}) => {
  const [
    containers,
    setContainers
  ] = useState([]);

  useMsPane(msPane => {
    const { Comp } = msPane || {};
    if (Comp) {
      setContainers(prevContainers => isInCont(prevContainers, Comp)
         ? prevContainers
         : [Comp, ...prevContainers]
      )
    }
  })

  return (
    <div className={CL}>
      {containers}
    </div>
  );
};

export default ComponentHrzContainer
