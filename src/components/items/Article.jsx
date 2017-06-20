import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Article.Style'

import SvgClose from '../zhn-atoms/SvgClose'
import ShowHide from '../zhn-atoms/ShowHide'

import withDnDStyle from './decorators/withDnDStyle'

const D_REMOVE_UNDER = 60;
const D_REMOVE_ITEM = 35;

const S = {
  ROOT: {
    position : 'relative',
    lineHeight : 1.5,
    marginBottom: '5px',
    marginRight: '25px',
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
    backgroundColor: '#404040',
    paddingTop: '8px',
    paddingLeft: '16px',
    paddingBottom: '16px',
    lineHeight: 1.5,
    width : '100%',
    borderTopRightRadius: '2px',
    borderBottomRightRadius: '2px',
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display : 'inline-block',
    color: 'black',
    fontSize: '18px',
    fontWeight : 'bold',
    paddingRight: '32px',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b',
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
    fontSize: '17px',
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
    paddingRight: '24px'
  },
  DATE: {
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

@withDnDStyle
class Article extends Component {
  constructor(props){
    super()
    this.state = {
      isClosed: false,
      isShow: false
    }
  }

  _dragStart = (ev) => {
    ev.persist()
    this.clientX = ev.clientX
    this.dragStartWithDnDStyle(ev)
    ev.dataTransfer.effectAllowed="move"
    ev.dataTransfer.dropEffect="move"
  }
  _dragEnd = (ev) => {
    ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this.clientX - ev.clientX)
        , { item, onRemoveUnder } = this.props;
    if (_deltaX > D_REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > D_REMOVE_ITEM){
      this._handleClose()
    }
  }
  _preventDefault(ev){
    ev.preventDefault()
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
    const { item, theme } = this.props
        , TS = theme.createStyle(styleConfig)
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
        <div
          style={{...S.ROOT, ..._rootStyle}}
          draggable={true}
          onDragStart={this._dragStart}
          onDragEnd={this._dragEnd}
          onDrop={this._preventDefault}
          onDragOver={this._preventDefault}
          onDragEnter={this._preventDefault}
          onDragLeave={this._preventDefault}
        >
          <div style={{ ..._headerStyle, ...TS.HEADER }}>
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

          <ShowHide
            style={TS.DESCR}
            isShow={isShow}
          >
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

export default withTheme(Article)
