const _isArr = Array.isArray;

const _getCn = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : ''
  : arrOrStr || '';

const crCn = (conf1, conf2) => {
  const _cl1 = _getCn(conf1)
  , _cl2 = _getCn(conf2);
  return _cl1
    ? _cl2 ? `${_cl1} ${_cl2}` : _cl1
    : _cl2 || void 0 ;
};

export default crCn
