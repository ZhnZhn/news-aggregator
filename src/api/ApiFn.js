
export const crQueryToken = (
  paramName,
  value
) => value
  ? `&${paramName}=${value}`
  : '';

const DF_CHECK_RESPONSE = (
  _json,
  _option
) => true
export const crProviderApi = (
  getRequestUrl,
  checkResponse=DF_CHECK_RESPONSE
) => ({
  getRequestUrl,
  checkResponse
})
