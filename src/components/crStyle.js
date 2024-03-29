const _isArr = Array.isArray;

export const CL_SELECT_NONE = 'select-none'
export const CL_MENU_MORE_ITEM = `menu-more__item ${CL_SELECT_NONE}`
export const CL_ROW_NEWS_SOURCE = `row__news-source ${CL_SELECT_NONE}`;

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
export const S_INLINE_BLOCK = { display: 'inline-block'}
export const S_NONE = { display: 'none' };

export const crShowHideStyle = (
  is
) => is ? S_BLOCK : S_NONE

export const CL_SHOW_POPUP = "show-popup"
const _fShowHide = (showStyle) => (
  is,
  cl
) => is
  ? [crCn(cl, CL_SHOW_POPUP), showStyle]
  : [cl, S_NONE];

export const crShowHide = _fShowHide(S_BLOCK)
export const crInlineBlockShowHide = _fShowHide(S_INLINE_BLOCK)

export const crContainerBgCn = (
  className
) => crCn(className, "c-bg")

export const crPaneCn = (
  className
) => crContainerBgCn(
  crCn("pane", className)
)

export const crPanelShadowCn = (
  className
) => crCn(
  className,
  "panel-shadow"
)

export const crPopupMenuCn = (
  className
) => crCn(
  crPanelShadowCn("popup-menu"),
  className
)

export const crWithScrollCn = (
  className
) => crCn(className, "with-scroll")
