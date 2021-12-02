import { useCallback } from 'react';

import ShowHide from '../zhn-atoms/ShowHide';

const CL_DIV = "link-wrapper";

const S_DESCR = {
  display: 'block',
  lineHeight: 1.8,
  padding: '8px 16px 4px 16px',
  color: '#121212',
  fontSize: '1rem',
  fontWeight: 'bold'
},
S_AUTHOR_ROOT = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '6px 8px 6px 16px',
},
S_AUTHOR = {
  color: 'gray',
  paddingRight: 16,
  fontWeight: 'bold'
},
S_DATE = {
  color: 'gray',
  //flexShrink: 0,
  paddingRight: 32,
  fontWeight: 'bold'
};


const ArticleDescr = ({
  style,
  isShow,
  href,
  description,
  related,
  publishedAt,
  author,
  onHide,
  onClose
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback(evt => {
    const { keyCode } = evt;
    if (keyCode === 13) {
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
        <a
          className={CL_DIV}
          style={S_DESCR}
          href={href}
          onKeyDown={_hKeyDown}
        >
          {description}
        </a>
        {
          related &&
          <div style={S_DESCR}>
            {related}
          </div>
        }
        <div style={S_AUTHOR_ROOT}>
          <span style={S_DATE}>
             {publishedAt}
          </span>
          <span style={S_AUTHOR}>
            {author}
          </span>
        </div>
    </ShowHide>
  );
};

export default ArticleDescr
