const _fJoinBy = (
  delimeter
) => (
  ...args
) => args
  .filter(Boolean)
  .join(delimeter);

export const joinByComma = _fJoinBy(', ')
export const joinByBlank = _fJoinBy(' ')
