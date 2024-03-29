const S_ROOT = {
  marginTop: 16,
  marginLeft: 8
}
, S_SPAN = {
  color: 'black'
};

const PoweredBy = ({
  style,
  spanStyle,
  children
}) => (
  <div style={{...S_ROOT, ...style}}>
    <span style={{...S_SPAN, ...spanStyle}}>
        Powered by
    </span>
      {children}
  </div>
);

export default PoweredBy
