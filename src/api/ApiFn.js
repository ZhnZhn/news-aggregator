
export const crQueryToken = (
  paramName,
  value
) => value
  ? `&${paramName}=${value}`
  : '';
