const _isNumber = n => typeof n === 'number'
 && (n-n===0);

const isNumberInRange = (
  min,
  max,
  v
) => _isNumber(v)
 && v>=min && v<=max;

export default isNumberInRange
