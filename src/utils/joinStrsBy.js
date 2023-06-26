const _isArr = Array.isArray;

const joinStrsBy = (
  arr=[],
  delimeter=', '
) => _isArr(arr)
 ? arr.filter(Boolean).join(delimeter)
 : '';

export default joinStrsBy
