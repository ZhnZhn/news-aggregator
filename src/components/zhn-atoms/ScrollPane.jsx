import crCn from '../zhn-utils/crCn';

const CL_WITH_SCROLL = 'with-scroll';

const ScrollPane = ({
  style,
  className,
  children
}) => (
  <div
    className={crCn(CL_WITH_SCROLL, className)}
    style={style}
  >
    {children}
  </div>
);


export default ScrollPane
