import { useCallback } from 'react';

import ShowHide from '../zhn-atoms/ShowHide';

const CL_DIV = "link-wrapper";

const S = {
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 4,
    color: '#121212',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '1rem',
    fontWeight: 'bold'
    //fontFamily: '"Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  AUTHOR_ROOT: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '6px 8px 6px 16px',
  },
  AUTHOR: {
    color: 'gray',
    paddingRight: 16,
    fontWeight: 'bold'
  },
  DATE: {
    color: 'gray',
    //flexShrink: 0,
    paddingRight: 32,
    fontWeight: 'bold'
  }
}

const ArticleDescr = ({
  style, isShow,
  url, description, related,
  publishedAt, author,
  onHide
}) => {
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hKeyDown = useCallback(evt => {
    const { keyCode } = evt
    if (keyCode === 13) {
      window.open(url, '_blank')
    } else if (keyCode === 27) {
      onHide()
    }
  }, [])
  //url, onHide
  /*eslint-enable react-hooks/exhaustive-deps */
  return (
    <ShowHide
      style={style}
      isShow={isShow}
    >
        <div
          role="link"
          tabIndex="0"
          className={CL_DIV}
          onKeyDown={_hKeyDown}
        >
          <a href={url} tabIndex="-1">
            <span style={S.DESCR}>
               {description}
            </span>
          </a>
        </div>
        {
          related &&
          <div style={S.DESCR}>
            {related}
          </div>
        }
        <div style={S.AUTHOR_ROOT}>
          <span style={S.DATE}>
             {publishedAt}
          </span>
          <span style={S.AUTHOR}>
            {author}
          </span>
        </div>
    </ShowHide>
  );
}



export default ArticleDescr
