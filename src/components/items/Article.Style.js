
//230, 236, 240

const _config = {
  DF: { h: '#404040' },
  WHITE: { h: '#dfe4e7', d: '#eaeaea' },
  SAND: { h: '#c6bda5', d: '#e8e0cb' }
}
, _crBg = color => ({
  backgroundColor: color
})
, _crStyles = ({h, d}={}) => {
  const _S = {
    HEADER: _crBg(h)
  };
  if (d) {
    _S.DESCR = _crBg(d)
  }
  return _S;
};

const styleConfig = {
  themeName: void 0,
  style: void 0,
  createStyle: (CSS_RULE, themeName) => _crStyles(
    _config[themeName] || _config.DF)
};

export default styleConfig
