import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';
//import PropTypes from 'prop-types'

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display : 'block' }
, S_HIDE = { display : 'none' };

const ShowHide = ({
  isShow,
  isScrollable,
  className,
  style,
  children
}) => {
  const _attr = {
    className: crCn(className, [isShow, CL_SHOW_POPUP]),
    style: crStyle(style, isShow ? S_SHOW : S_HIDE),
    'data-scrollable': isScrollable ? true : void 0
  };

  return (
    <div {..._attr}>
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
