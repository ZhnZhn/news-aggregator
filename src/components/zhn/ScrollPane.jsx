import { crWithScrollCn } from '../crStyle';

const ScrollPane = ({
  refScrollPane,
  style,
  className,
  children
}) => (
  <div
    ref={refScrollPane}
    className={crWithScrollCn(className)}
    style={style}
  >
    {children}
  </div>
);

export default ScrollPane
