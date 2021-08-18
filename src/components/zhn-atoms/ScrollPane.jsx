import crCn from '../zhn-utils/crCn';

const CL_WITH_SCROLL = 'with-scroll';

const ScrollPane = ({
  style,
  className,
  children
}) => {
  const _cn = crCn(CL_WITH_SCROLL, className);
  return (
     <div className={_cn} style={style}>
        {children}
     </div>
  );
};

export default ScrollPane
