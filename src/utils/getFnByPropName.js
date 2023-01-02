const getFnByPropName = (
  obj,
  propName,
  dfValue
) => obj && typeof obj[propName] == 'function'
  ? obj[propName]
  : () => { return dfValue; }

export default getFnByPropName
