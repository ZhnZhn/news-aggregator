
const S_FLEX_COLUMN = {
  display: 'flex',
  flexDirection: 'column'
}

const FlexColumn = ({
  children
}) => (
  <div style={S_FLEX_COLUMN}>
    {children}
  </div>
)

export default FlexColumn
