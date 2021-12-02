const INITIAL_WIDTH = 635
, _isInnerWidth = () => window && window.innerWidth
, _isTouchable = () => document
     && 'ontouchstart' in document.documentElement;

const has = {
  HAS_TOUCH: _isTouchable(),

  wideWidth: () => _isInnerWidth()
    ? window.innerWidth > 700
    : true,
  getWidth: () => _isInnerWidth()
    ? window.innerWidth - 16
    : INITIAL_WIDTH,
  initWidthStyle: (initialWidth=INITIAL_WIDTH) => ({
     width: !has.wideWidth()
        ? has.getWidth()
        : initialWidth
    })
};

export default has
