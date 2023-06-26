const getFnByPropName = (
  obj,
  propName,
  dfValue
) => obj && typeof obj[propName] == 'function'
  ? obj[propName]
  : () => dfValue;

export default getFnByPropName
