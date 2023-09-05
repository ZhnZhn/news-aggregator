export const toFirstUpperCase = (
  str
) => typeof str === 'string'
  ? str.charAt(0).toUpperCase() + str.slice(1)
  : '';
  
