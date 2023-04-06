import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display : 'block' }
, S_HIDE = { display : 'none' };

const ShowHide = ({
  isShow,
  withoutAnimation,
  isScrollable,
  className,
  style,
  children,
  ...restProps
}) => (
  <div
    className={crCn(className, [isShow && !withoutAnimation, CL_SHOW_POPUP])}
    style={crStyle(style, isShow ? S_SHOW : S_HIDE)}
    data-scrollable={isScrollable ? "true" : void 0}
    {...restProps}
  >
    {children}
  </div>
);


export default ShowHide
