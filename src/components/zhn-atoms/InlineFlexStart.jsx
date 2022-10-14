const S_INLINE_FLEX_START = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  maxHeight: '1.7rem'
};

const InlineFlexStart = ({
  children
}) => (
  <div style={S_INLINE_FLEX_START}>
    {children}
  </div>
);

export default InlineFlexStart
