import { useState } from 'react';
//import PropTypes from 'prop-types'

import useListen from '../hooks/useListen';
import isInCont from './isInCont';

const CL = "hrz-container";

const ComponentHrzContainer = ({
  store,
  addAction
}) => {
  const [containers, setContainers] = useState([]);

  useListen(store, (actionType, option) => {
    const { Comp } = option || {};
    if (actionType === addAction && Comp){
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

/*
ComponentHrzContainer.propTypes = {
  store: PropTypes.shape({
    listen: PropTypes.func
  }),
  addAction: PropTypes.string
}
*/

export default ComponentHrzContainer
