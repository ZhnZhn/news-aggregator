import React, { Component } from 'react'

import dt from '../../utils/dt'
import has from '../has'

import withTheme from '../hoc/withTheme'
import styleConfig from './Article.Style'

import ItemHeader from './ItemHeader'
import ArticleDescr from './ArticleDescr'

import withDnDStyle from './decorators/withDnDStyle'

//const D_REMOVE_UNDER = 60;
//const D_REMOVE_ITEM = 35;

const CL_ITEM_HEADER = "article-header";

const S = {
  ROOT: {
    position : 'relative',
    marginBottom: 5,
    marginRight: 25,
    lineHeight : 1.5,
    borderBottomRightRadius: 2,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
  },
  LEFT_LINE: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 3,
    height: 8,
    backgroundColor: '#3f51b5'
  },
  HEADER: {
    width: '100%',
    backgroundColor: '#404040',
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 16,
    lineHeight: 1.5,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  HEADER_OPEN: {
    borderLeft: '6px solid #607d8b'
  },
  CAPTION: {
    display : 'inline-block',
    paddingRight: 32,
    color: 'black',
    fontSize: '18px',
    fontWeight : 'bold',
    cursor: 'pointer'
  },
  CAPTION_OPEN: {
    color: '#607d8b',
  },
  SVG_CLOSE: {
    float: 'none',
    position: 'absolute',
    top: 8,
    right: 0
  },
  NONE: {
    display: 'none'
  }
}

const { HAS_TOUCH } = has
, DELTA = HAS_TOUCH ? {
    MARK_REMOVE: 50,
    REMOVE_ITEM: 90,
    REMOVE_UNDER: 150
  } : {
    MARK_REMOVE: 25,
    REMOVE_ITEM: 35,
    REMOVE_UNDER: 150
  };

const _getTouchesClientX = (ev) =>
  (((ev || {}).touches || [])[0] || {}).clientX || 0;
const _getChangedTouches = (ev) =>
  (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;

@withDnDStyle
class Article extends Component {

  static defaultProps = {
    onRemoveUnder: () => {},
    onRemoveItem: () => {}
  }

  constructor(props) {
    super(props)

    this._itemHandlers = HAS_TOUCH
      ? {
          onTouchStart: this._onTouchStart.bind(this),
          onTouchMove: this._onTouchMove.bind(this),
          onTouchEnd: this._onTouchEnd.bind(this)
        }
      : {
          draggable: true,
          onDragStart: this._dragStart.bind(this),
          onDragEnd: this._dragEnd.bind(this),
          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault
        }

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
  _onTouchStart = (ev) => {
    ev.persist()
    const _clientX = _getTouchesClientX(ev);
    if (_clientX) {
      this._clientX = _clientX
    }
  }
  _onTouchMove = (ev) => {
    ev.persist()
    const _clientX = _getTouchesClientX(ev);
    if (_clientX
       && Math.abs(this._clientX -  _clientX) > DELTA.MARK_REMOVE) {
      this.dragStartWithDnDStyle(ev)
    }
  }

  _dragEnd = (ev) => {
    ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _deltaX = Math.abs(this.clientX - ev.clientX)
        , { item, onRemoveUnder } = this.props;
    if (_deltaX > DELTA.REMOVE_UNDER) {
      onRemoveUnder(item)
    } else if (_deltaX > DELTA.REMOVE_ITEM){
      this._handleClose()
    }
  }
  _onTouchEnd = (ev) => {
    //ev.preventDefault()
    ev.persist()
    this.dragEndWithDnDStyle()
    const _clientX = _getChangedTouches(ev);
    if (_clientX) {
      const _deltaX = Math.abs(this._clientX - _clientX)
          , { item, onRemoveUnder } = this.props;
      if (_deltaX > DELTA.REMOVE_UNDER) {
        onRemoveUnder(item)
      } else if (_deltaX > DELTA.REMOVE_ITEM){
        this._handleClose()
      }
    }
  }
  _preventDefault(ev){
    ev.preventDefault()
  }

  _handleToggle = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _handleClose = () => {
    const { onCloseItem, item } = this.props;
    onCloseItem(item)
    this.setState({ isClosed: true })
  }

  _handleHide = () => {
    this.headerComp.focus()
    this.setState({ isShow: false })
  }

  _refItemHeader = (comp) => {
    this.headerComp = comp
  }

  render() {
    const { item, theme } = this.props
        , TS = theme.createStyle(styleConfig)
        , { title, author, publishedAt,
            url, related
            //, urlToImage
          } = item
        , description = item.description || 'More...'
        , { isClosed, isShow } = this.state
        , _headerStyle = isShow
             ? { ...S.HEADER, ...S.HEADER_OPEN }
             : S.HEADER
        , _captionStyle = isShow
             ? {...S.CAPTION, ...S.CAPTION_OPEN}
             : S.CAPTION
        , _publishedAt = dt.toTimeDate(publishedAt)
        , _rootStyle = isClosed
             ? S.NONE
             : void 0;
    return (
        <div
          style={{...S.ROOT, ..._rootStyle}}
          {...this._itemHandlers}
        >
          <ItemHeader
             ref={this._refItemHeader}
             className={CL_ITEM_HEADER}
             style={{ ..._headerStyle, ...TS.HEADER }}
             captionStyle={_captionStyle}
             svgCloseStyle={S.SVG_CLOSE}
             title={title}
             url={url}
             isShow={isShow}
             onClick={this._handleToggle}
             onClose={this._handleClose}
             onHide={this._handleHide}
          />
          <ArticleDescr
             style={TS.DESCR}
             isShow={isShow}
             url={url}
             description={description}
             related={related}
             publishedAt={_publishedAt}
             author={author}
             onHide={this._handleHide}
          />
        </div>
      );
    }
}

export default withTheme(Article)
