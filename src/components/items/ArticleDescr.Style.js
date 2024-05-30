import { S_COLOR_BLACK } from '../crStyle';

export { CL_SELECT_NONE } from '../crStyle'
export const CL_LINK_WRAPPER = "link-wrapper"

const S_FONT = {
   ...S_COLOR_BLACK,
   fontSize: '1rem',
   fontWeight: 'bold'
}
, S_BREAK_WORD = {
  wordBreak: 'break-word'
}
, S_WHITESPACE_NOWRAP = {
  whiteSpace: 'nowrap'
}
, S_FLEX_SPACE_BETWEEN = {
   display: 'flex',
   justifyContent: 'space-between'
};

export const S_DESCR = {
   ...S_FONT,
   ...S_BREAK_WORD,
   whiteSpace: "pre-line",
   display: 'block',
   lineHeight: 1.4,
   padding: '8px 16px 4px 12px'
}
, S_RELATED_DIV = {
   ...S_FONT,
   ...S_FLEX_SPACE_BETWEEN,
   flexWrap: 'wrap',
   lineHeight: 1.6,
   padding: '0 16px 0 12px'
}
, S_RELATED = {
  ...S_BREAK_WORD
}
, S_COMMENTS_LINK = {
  ...S_COLOR_BLACK,
  ...S_WHITESPACE_NOWRAP
}

export const S_AUTHOR_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '8px 12px 0 12px'
}
, S_BOTTOM_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '0 12px 6px 12px'
}
, S_DATE = {
   color: 'gray',
   fontWeight: 'bold'
}
, S_AUTHOR = {
   ...S_DATE,
   paddingRight: 16
}
, S_PT_8 = {
  paddingTop: 8
}
