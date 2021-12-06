import { useCallback } from 'react';

import ShowHide from '../zhn-atoms/ShowHide';
import SvgX from '../zhn-atoms/SvgX';

const CL_DIV = "link-wrapper"
, S_DESCR = {
  display: 'block',
  lineHeight: 1.8,
  padding: '8px 16px 4px 16px',
  color: '#121212',
  fontSize: '1rem',
  fontWeight: 'bold'
},
S_RELATED = {
  lineHeight: 1.8,
  padding: '0 16px 0 16px',
  color: '#121212',
  fontSize: '1rem',
  fontWeight: 'bold'
},
S_AUTHOR_ROW = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 12px 0 16px',
},
S_BOTTOM_ROW = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 12px 6px 16px',
},
S_AUTHOR = {
  color: 'gray',
  paddingRight: 16,
  fontWeight: 'bold'
},
S_DATE = {
  color: 'gray',
  fontWeight: 'bold'
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
    if (keyCode === 13) {
      evt.preventDefault()
      window.open(href, '_blank')
    } else if (keyCode === 27) {
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
          <span style={S_AUTHOR}>
            {author}
          </span>
          {
            timeAgo &&
            <span style={S_DATE}>
                {timeAgo}
            </span>
          }
        </div>
        <a
          className={CL_DIV}
          style={S_DESCR}
          href={href}
          onKeyDown={_hKeyDown}
        >
          {description}
        </a>
        <div style={S_PT_8}>
        {
          related &&
          <div style={S_RELATED}>
            {related}
          </div>
        }
        <div style={S_BOTTOM_ROW}>
          <SvgX onClick={onClose} />
          <span style={S_DATE}>
             {publishedAt}
          </span>
        </div>
        </div>
    </ShowHide>
  );
};

export default ArticleDescr
