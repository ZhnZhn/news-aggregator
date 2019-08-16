import React, { Component } from 'react'

import ShowHide from '../zhn-atoms/ShowHide'

const CL_DIV = "link-wrapper";

const S = {
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '4px',
    color: '#121212',
    fontFamily: 'Verdana, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold'
    //fontFamily: '"Open sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  AUTHOR_ROOT: {
    paddingTop: '6px',
    paddingLeft: '16px',
    paddingRight: '8px',
    paddingBottom: '6px'
  },
  AUTHOR: {
    float: 'right',
    fontWeight: 'bold',
    color: 'gray',
    paddingRight: '24px'
  },
  DATE: {
    color: 'gray',
    fontWeight: 'bold'
  }
}

class ArticleDescr extends Component {

  _handleKeyDown = (event) => {
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      window.open(this.props.url, '_blank')
    } else if (keyCode === 27) {
      this.props.onHide()
    }
  }

  render(){
    const {
            style, isShow,
            url, description, related,
            publishedAt, author
          } = this.props;
    return (
      <ShowHide
        style={style}
        isShow={isShow}
      >
          <div
            tabIndex="0"
            className={CL_DIV}
            onKeyDown={this._handleKeyDown}
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
}

export default ArticleDescr
