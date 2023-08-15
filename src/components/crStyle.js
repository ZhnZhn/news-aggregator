const _isArr = Array.isArray;

const _getCn = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

export const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1)
  , _cl2 = _getCn(conf2);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
}

export const crStyle2 = (
  style1,
  style2
) => style2
 ? {...style1, ...style2}
 : style1;

export const S_BLOCK = { display: 'block'}
export const S_NONE = { display: 'none' };

export const crShowHideStyle = (
  is
) => is ? S_BLOCK : S_NONE

const CL_SHOW = "show-popup";
export const crShowHideTuple = (
  is,
  cl
) => is
  ? [crCn(cl, CL_SHOW), S_BLOCK]
  : [cl, S_NONE]
