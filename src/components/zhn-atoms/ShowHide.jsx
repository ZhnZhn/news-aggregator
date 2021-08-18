import crCn from '../zhn-utils/crCn';
//import PropTypes from 'prop-types'

const SHOW_POPUP = 'show-popup'
const S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display : 'none'
  }
};

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
  const _className = crCn(className, [isShow, SHOW_POPUP])
  , _styleShow = isShow ? S.SHOW : S.HIDE;

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
