import crCn from '../zhn-utils/crCn';
//import PropTypes from 'prop-types'

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display: 'block' }
, S_HIDE = { display : 'none' };

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
  const _className = crCn(className, [isShow, CL_SHOW_POPUP])
  , _styleShow = isShow ? S_SHOW : S_HIDE;

  return (
    <div
      className={_className}
      style={{...style, ..._styleShow}}
    >
      {children}
    </div>
  );
};

/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType[
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]
}
*/

export default ShowHide
