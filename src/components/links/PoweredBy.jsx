import { S_COLOR_BLACK } from '../crStyle';

const S_ROOT = {
  marginTop: 16,
  marginLeft: 8
};

const PoweredBy = (props) => (
  <div style={{...S_ROOT, ...props.style}}>
    <span style={{...S_COLOR_BLACK, ...props.spanStyle}}>
        Powered by
    </span>
    {props.children}
  </div>
);

export default PoweredBy
