//import PropTypes from 'prop-types'

import STYLE from '../styles/ContainerStyle'

const CL_SHOW = 'show-popup';
const S = {
  BLOCK : {
    display : 'block'
  },
  NONE : {
    display : 'none'
  }
};

const Browser = ({ isShow, style, children }) => {
  const _styleOpen = isShow ? S.BLOCK : S.NONE
      , _classOpen = isShow ? CL_SHOW : null;
  return (
     <div
        className={_classOpen}
        style={{...STYLE.browserRootDiv, ...style, ..._styleOpen}}
      >
        {children}
     </div>
  );
};

/*
Browser.propTypes = {
  isShow: PropTypes.bool,
  style: PropTypes.object
}
*/

export default Browser
