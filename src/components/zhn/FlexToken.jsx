
const _fFlexToken = (
  style
) => ({
  children
}) => (
  <div style={style}>
    {children}
  </div>
);

const S_FLEX_COLUMN = {
  display: 'flex',
  flexDirection: 'column'
};
export const FlexColumn = _fFlexToken(S_FLEX_COLUMN)

const S_INLINE_FLEX_START = {
  display: 'inline-flex',
  alignItems: 'flex-start',
  maxHeight: '1.7rem'
};
export const InlineFlexStart = _fFlexToken(S_INLINE_FLEX_START)
