const _fJoinBy = (
  delimeter
) => (
  ...args
) => args
  .filter(Boolean)
  .join(delimeter);

export const joinBy = _fJoinBy('')
export const joinByComma = _fJoinBy(', ')
export const joinByBlank = _fJoinBy(' ')
