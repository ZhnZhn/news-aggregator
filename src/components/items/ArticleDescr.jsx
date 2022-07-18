import { useCallback } from 'react';

import ShowHide from '../zhn-atoms/ShowHide';
import SafeLink from '../zhn-atoms/SafeLink';
import TextDiv from '../zhn-atoms/TextDiv';
import TextSpan from '../zhn-atoms/TextSpan';
import SvgX from '../zhn-atoms/SvgX';

const CL_DIV = "link-wrapper"
, CL_SELECT_NONE = "select-none"
, S_FONT = {
   color: '#121212',
   fontSize: '1rem',
   fontWeight: 'bold',
   wordBreak: 'break-word'
}
, S_DESCR = {
   ...S_FONT,
   display: 'block',
   lineHeight: 1.4,
   padding: '8px 16px 4px 16px',
   whiteSpace: "pre-line",
}
, S_RELATED = {
   ...S_FONT,
  lineHeight: 1.6,
   padding: '0 16px 0 16px',
}
, S_FLEX_SPACE_BETWEEN = {
   display: 'flex',
   justifyContent: 'space-between',
}
, S_AUTHOR_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '8px 12px 0 16px',
}
, S_BOTTOM_ROW = {
   ...S_FLEX_SPACE_BETWEEN,
   padding: '0 12px 6px 16px',
}
, S_DATE = {
   color: 'gray',
   fontWeight: 'bold'
}
, S_AUTHOR = {
   ...S_DATE,
   paddingRight: 16,
}
, S_PT_8 = { paddingTop: 8};


const ArticleDescr = ({
  style,
  isShow,
  href,
  description,
  related,
  publishedAt,
  timeAgo,
  author,
  onHide,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 27) {
      onHide()
    } else if (keyCode === 46) {
      onClose()
    }
  }, [])
  //url, onHide, onClose
  /*eslint-enable react-hooks/exhaustive-deps */
  return (
    <ShowHide
      style={style}
      isShow={isShow}
    >
        <div style={S_AUTHOR_ROW}>
          <TextSpan
             style={S_AUTHOR}
             text={author}
          />
          <TextSpan
             style={S_DATE}
             text={timeAgo}
          />
        </div>
        <SafeLink
          className={CL_DIV}
          style={S_DESCR}
          href={href}
          onKeyDown={_hKeyDown}
        >
          {description}
        </SafeLink>
        <div style={S_PT_8}>
          <TextDiv
            className={CL_SELECT_NONE}
            style={S_RELATED}
            text={related}
          />
          <div style={S_BOTTOM_ROW}>
            <SvgX onClick={onClose} />
            <TextSpan
              className={CL_SELECT_NONE}
              style={S_DATE}
              text={publishedAt}
            />
          </div>
        </div>
    </ShowHide>
  );
};

export default ArticleDescr
