const _isArr = Array.isArray;

const _getStyle = (arrOrStr) => _isArr(arrOrStr)
  ? arrOrStr[0] ? arrOrStr[1] : void 0
  : arrOrStr || void 0;

const crStyle = (conf1, conf2) => {
  const _s1 = _getStyle(conf1)
  , _s2 = _getStyle(conf2);
  return _s1
    ? _s2 ? {..._s1, ..._s2} : _s1
    : _s2 || void 0 ;
};

export default crStyle
