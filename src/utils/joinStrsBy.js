const _isArr = Array.isArray;

export const joinStrsBy = (
  arr=[],
  delimeter=', '
) => _isArr(arr)
 ? arr.filter(Boolean).join(delimeter)
 : '';
