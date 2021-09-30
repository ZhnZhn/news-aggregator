//import PropTypes from 'prop-types'

import STYLE from '../styles/ContainerStyle';

const CL_SHOW = 'show-popup'
, S_BLOCK = { display: 'block' }
, S_NONE = { display: 'none' };

const Browser = ({
  isShow,
  style,
  children
}) => {
  const [_cn, _style] = isShow
    ? [CL_SHOW, S_BLOCK]
    : [void 0, S_NONE];
  return (
     <div
        className={_cn}
        style={{...STYLE.browserRootDiv, ...style, ..._style}}
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
