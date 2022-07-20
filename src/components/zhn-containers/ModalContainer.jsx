//import PropTypes from 'prop-types'
import useClassAnimation from '../hooks/useClassAnimation'

const MODAL_ROOT = 'modal-root'
, CL = {
  INIT: MODAL_ROOT,
  SHOWING: `${MODAL_ROOT} show-modal`,
  HIDING: `${MODAL_ROOT} hide-modal`
}
, S = {
  INIT: { display: 'none' },
  SHOWING: { display: 'block' },
  HIDING: { backgroundColor: 'rgba(0,0,0, 0)' }
};

const ModalContainer = ({
  isShow,
  timeout,
  children,
  onClose
}) => {
  return (
    <div
      {...useClassAnimation({
         isShow,
         CL,
         S,
         timeout
       })}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default ModalContainer
