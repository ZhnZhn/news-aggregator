//import PropTypes from 'prop-types'
const CL_SHOW = 'show-popup'
, S_BROWSER = {
  flexShrink: 0,
  zIndex: 20,
  backgroundColor: '#4d4d4d',
  position: 'relative',
  height: 'calc(100vh - 71px)',
  minHeight: 500,
  minWidth: 270,
  maxWidth: 400,
  marginLeft: 10,
  padding: '0px 3px 35px 0px',
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  borderRadius: '4px'
}
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
        style={{...S_BROWSER, ...style, ..._style}}
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
