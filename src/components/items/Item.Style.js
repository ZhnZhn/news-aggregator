import { S_COLOR_BLACK_DARK } from '../crStyle';

export { S_NONE } from '../crStyle'

export const CL_ITEM_HEADER = "article-header"
export const CL_ITEM_DESCR = "article-descr"
export const CL_LINK_WRAPPER = "link-wrapper"

export const S_ITEM = {
  position: 'relative',
  marginBottom: 5,
  lineHeight: 1.5,
  borderBottomRightRadius: 2,
  boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)'
}

export const S_CAPTION = {
  ...S_COLOR_BLACK_DARK,
  display: 'inline-block',
  paddingRight: 32,
  fontSize: '1.125rem',
  fontWeight: 'bold',
  wordBreak: 'break-word'
}

export const S_SVG_CLOSE = {
  position: 'absolute',
  right: -4
}
