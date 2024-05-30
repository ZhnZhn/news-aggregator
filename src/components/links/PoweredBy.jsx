import { S_COLOR_BLACK } from '../crStyle';

const S_ROOT = {
  marginTop: 16,
  marginLeft: 8
};

const PoweredBy = ({
  style,
  spanStyle,
  children
}) => (
  <div style={{...S_ROOT, ...style}}>
    <span style={{...S_COLOR_BLACK, ...spanStyle}}>
        Powered by
    </span>
      {children}
  </div>
);

export default PoweredBy
