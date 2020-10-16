import { Component } from 'react'

import dt from '../../utils/dt'

import withTheme from '../hoc/withTheme'
import styleConfig from './Article.Style'

import ItemHeader from './ItemHeader'
import ArticleDescr from './ArticleDescr'
import withDnD from './decorators/withDnD'


const CL_ITEM_HEADER = "article-header";

const S = {
  ROOT: {
    position: 'relative',
    marginBottom: 5,
    lineHeight: 1.5,
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
    paddingBottom: 8,
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
    fontSize: '1.125rem',
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


const _focusNextArticle = (nodeArticle) => {
  const { nextElementSibling } = nodeArticle || {}
  , { firstElementChild } = nextElementSibling || {};
  if (firstElementChild) {
    firstElementChild.focus()
  }
};

@withDnD
class Article extends Component {

  static defaultProps = {
    onRemoveUnder: () => {},
    onRemoveItem: () => {}
  }

  constructor(props) {
    super(props)

    this._itemHandlers = this._crDnDHandlers()

    this.state = {
      isClosed: false,
      isShow: false
    }
  }

  _handleToggle = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }))
  }

  _handleClose = () => {
    const { onCloseItem, item } = this.props
    _focusNextArticle(this._articleNode)
    onCloseItem(item)
    this.setState({ isClosed: true })
  }

  _handleHide = () => {
    this.headerComp.focus()
    this.setState({ isShow: false })
  }

  _refItem = node => this._articleNode = node
  _refItemHeader = comp => this.headerComp = comp

  render() {
    const { item, theme } = this.props
        , TS = theme.createStyle(styleConfig)
        , { title, author,
            publishedDate, publishedAt,
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
        , _publishedAt = publishedDate
             || dt.toTimeDate(publishedAt)
        , _rootStyle = isClosed
             ? S.NONE
             : void 0;
    return (
        <div
          ref={this._refItem}
          style={{...S.ROOT, ..._rootStyle}}
          {...this._itemHandlers}
        >
          <ItemHeader
             ref={this._refItemHeader}
             className={CL_ITEM_HEADER}
             style={{ ..._headerStyle, ...TS.HEADER }}
             captionStyle={_captionStyle}
             btCloseStyle={S.SVG_CLOSE}
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

    focus = () => {
      if (this.headerComp) {
        this.headerComp.focus()
      }
    }
}

export default withTheme(Article)
