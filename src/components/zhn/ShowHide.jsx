import {
  CL_SHOW_POPUP,
  S_BLOCK,
  S_NONE,
  crCn,
  crStyle2
} from '../crStyle';

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
    style={crStyle2(style, isShow ? S_BLOCK : S_NONE)}
    data-scrollable={isScrollable ? "true" : void 0}
    {...restProps}
  >
    {children}
  </div>
);


export default ShowHide
