import { crWithScrollCn } from '../crStyle';

const ScrollPane = ({
  style,
  className,
  children
}) => (
  <div
    className={crWithScrollCn(className)}
    style={style}
  >
    {children}
  </div>
);

export default ScrollPane
