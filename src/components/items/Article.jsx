import React, { Component } from 'react'

import SvgClose from '../zhn-atoms/SvgClose'
import ShowHide from '../zhn-atoms/ShowHide'

const S = {
  ROOT: {
    position : 'relative',
    lineHeight : 1.5,
    //marginBottom: '10px',
    marginBottom: '16px',
    marginRight: '25px',
    //borderLeft: 'solid 3px green'
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    borderBottomRightRadius: '2px'
  },
  LEFT_LINE: {
    position: 'absolute',
    top: '0px',
    left: 'Opx',
    width: '3px',
    height: '8px',
    backgroundColor: '#3F51B5'
  },
  HEADER: {
    //backgroundColor: '#232F3B',
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    //paddingBottom: '5px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    //height: '32px',
    width : '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
    //borderLeft: 'solid 6px darkcyan'
    //borderLeft: 'solid 6px #3F51B5'
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION_OPEN: {
    //display : 'inline-block',
    color: '#607d8b',
    //fontSize: '18px',
    //fontWeight : 'bold',
    //paddingRight: '32px',
    //cursor: 'pointer'
  },
  CAPTION: {
    display : 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight : 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: '8px',
    right: '0px'
  },
  IMG: {

  },
  DESCR: {
    display: 'block',
    lineHeight: 1.8,
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingBottom: '4px',
    color: 'black',
    fontWeight: 'bold'
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
    //color: 'burlywood',
    paddingRight: '24px'
  },
  DATE: {
    //float: 'right',
    //color: 'cornflowerblue',
    //color: '#3F51B5',
    color: 'gray',
    fontWeight: 'bold'
  }
}

const _toPublishedAt = (publishedAt='') => {
  const arr = (publishedAt !== null)
           ? publishedAt.split('T')
           : ['']
      , time = (arr[1])
          ? arr[1].replace('Z', '').substring(0, 8)
          : 'No Time';
  return `${time} ${arr[0]}`;
}

class Article extends Component {
  constructor(props){
    super()
    this.state = {
      isClosed: false,
      isShow: false
    }
  }

  _handleToggle = () => {
    this.setState(prevState => {
      return {
        isShow: !prevState.isShow
      };
    })
  }

  _handleClose = () => {
    const { onCloseItem, item } = this.props;
    onCloseItem(item)
    this.setState({ isClosed: true })
  }

  render() {
    const { item } = this.props
        , { title, author, publishedAt,
            url
            //, urlToImage
          } = item
        , description = item.description || 'More...'
        , { isClosed, isShow } = this.state
        , _headerStyle = (isShow)
             ? Object.assign({}, S.HEADER, S.HEADER_OPEN)
             : S.HEADER
        , _captionStyle = (isShow)
             ? Object.assign({}, S.CAPTION, S.CAPTION_OPEN)
             : S.CAPTION
        , _publishedAt = _toPublishedAt(publishedAt)
        , _rootStyle = (isClosed)
             ? { display: 'none' }
             : undefined;
    return (
        <div style={{...S.ROOT, ..._rootStyle}}>
          <div style={_headerStyle}>
            <span
               className="not-selected"
               style={_captionStyle}
               onClick={this._handleToggle}
            >
               {title}
            </span>
            <SvgClose
                style={S.SVG_CLOSE}
                onClose={this._handleClose}
            />
          </div>

          <ShowHide isShow={isShow}>
              <div className="wrapper-link">
                <a href={url}>
                  <span style={S.DESCR}>
                     {description}
                  </span>
                </a>
              </div>
              <div style={S.AUTHOR_ROOT}>
                <span style={S.DATE}>
                   {_publishedAt}
                </span>
                <span style={S.AUTHOR}>
                  {author}
                </span>
              </div>
          </ShowHide>
        </div>
        );
    }
}

export default Article
