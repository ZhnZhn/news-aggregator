//import PropTypes from 'prop-types'

import useClassAnimation from '../hooks/useClassAnimation'

const CL = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};

const S = {
  INIT: {
    display: 'none'
  },
  SHOWING: {
    display: 'block'
  },
  HIDING: {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
};

const ModalContainer = ({
  isShow, timeout, children, onClose
}) => {
  return (
    <div
      {...useClassAnimation({ isShow, CL, S, timeout })}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalContainer
