import { Component, createRef } from 'react'

import toFirstUpperCase from '../../utils/toFirstUpperCase'

import withTheme from '../hoc/withTheme'
import crCn from '../zhn-utils/crCn'
import styleConfig from './NewsPane.Style'
import has from '../has'

import crModelMore from './crModelMore'
import A from '../Comp'

const CHILD_MARGIN = 36
, RESIZE_INIT_WIDTH = 635
, RESIZE_MIN_WIDTH = 395
, RESIZE_MAX_WIDTH = 1200
, RESIZE_DELTA = 10
, CL = {
  NEWS_PANE: "news-pane",
  SHOW_POPUP: "show-popup",
  MENU_MORE: "popup-menu items__menu-more"
};

const S = {
  BT_REMOVE: {
    position: 'relative',
    top: -3,
    marginLeft: 16,
    marginRight: 6
  },
  SCROLL_DIV : {
    //overflowY: 'auto',
    overflow: 'hidden auto',
    height: '92%',
    paddingRight: 10
  },
  INLINE_BLOCK : {
    display : 'inline-block'
  },
  NONE : {
    display: 'none'
  }
};

const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

const _focusFirstItem = ref => {
  setTimeout( () => {
    if (ref && ref.current && ref.current.focus) {
      ref.current.focus()
    }
  }, 1000)
};

const _crPaneCaption = (...args) => args
  .filter(Boolean)
  .map(toFirstUpperCase)
  .join(': ');

class NewsPane extends Component {

  constructor(props){
    super(props);

    this._refFirstItem = createRef()
    this.childMargin = CHILD_MARGIN;
    this._widthStyle = has.initWidthStyle()

    this._MODEL = crModelMore({
      onMinWidth: this._resizeTo.bind(this, RESIZE_MIN_WIDTH),
      onInitWidth: this._resizeTo.bind(this, RESIZE_INIT_WIDTH),
      onPlusWidth: this._plusToWidth,
      onMinusWidth: this._minusToWidth,
      onRemoveItems: props.onRemoveItems
    })

    this.state = {
      isShow: true,
      isMore: false,
      articles: [],
      sortBy: ''
    };
  }

  componentDidMount(){
    const { store } = this.props;
    this.unsubscribe = store.listen(this._onStore)
    _focusFirstItem(this._refFirstItem)
  }
  componentWillUnmount(){
    this.unsubscribe()
  }

   _onStore = (actionType, option={}) => {
      const {
        addAction, showAction, toggleAction,
        id
      } = this.props;

      if (option.id === id){
        switch(actionType){
          case addAction: {
            this.setState({
              isShow: true,
              articles: option.data,
              sortBy: option.sortBy || this.state.sortBy
            })
            break;
           }
          case showAction:
            this.setState({ isShow: true })
            break;
          case toggleAction:
            this.setState(prevState => ({
              isShow: !prevState.isShow
            }))
            break;
          default: return void 0;
        }
      }
   }

   _showMore = () => {
      this.setState({ isMore: true })
   }
   _hToggleMore = () => {
     this.setState(prevState => ({
       isMore: !prevState.isMore
     }))
   }

   _getRootNodeStyle = () => {
     const { rootDiv } = this
     , { style={} } = rootDiv || {};
     return style;
   }

   _resizeTo = (width) => {
     this._getRootNodeStyle().width = _toStyleWidth(width);
   }

   _plusToWidth = () => {
     const style = this._getRootNodeStyle()
         , w = _getWidth(style) + RESIZE_DELTA;
     if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w)
     }
   }
   _minusToWidth = () => {
     const style = this._getRootNodeStyle()
         , w = _getWidth(style) - RESIZE_DELTA;
     if (w > RESIZE_MIN_WIDTH) {
       style.width = _toStyleWidth(w)
     }
   }

   _hHide = () => {
      const { onClose } = this.props;
      onClose()
      this.setState({ isShow: false })
   }

  _renderArticles(articles=[], onCloseItem, onRemoveUnder){
     const { Item } = this.props;
     return articles.map((article, index) => (
        <Item
          ref={index === 0 ? this._refFirstItem : void 0}
          key={article.articleId}
          item={article}
          onCloseItem={onCloseItem}
          onRemoveUnder={onRemoveUnder}
        />
     ));
  }

  _refRootDiv = node => this.rootDiv = node

   render(){
      const {
          paneCaption,
          theme,
          onRemoveItems,
          onRemoveUnder, onCloseItem
        } = this.props
      , TS = theme.createStyle(styleConfig)
      , { isShow, isMore, articles, sortBy } = this.state
      , _paneCaption = _crPaneCaption(paneCaption, ''+sortBy)
      , _className = crCn(CL.NEWS_PANE, [isShow,  CL.SHOW_POPUP])
      , _styleIsShow = isShow ? S.INLINE_BLOCK : S.NONE;

     return(
        <div
           ref={this._refRootDiv}
           className={_className}
           style={{
             ...this._widthStyle,
             ...TS.PANE_ROOT,
             ..._styleIsShow
           }}
        >
          <A.ModalSlider
            isShow={isMore}
            className={CL.MENU_MORE}
            style={TS.EL_BORDER}
            model={this._MODEL}
            onClose={this._hToggleMore}
          />
          <A.BrowserCaption
             rootStyle={TS.PANE_CAPTION}
             caption={_paneCaption}
             onMore={this._showMore}
             onClose={this._hHide}
          >
            <A.CircleButton
              caption="R"
              title="Remove All Items"
              style={S.BT_REMOVE}
              onClick={onRemoveItems}
            />
            <A.SvgHrzResize
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
              getDomNode={this._getRootDiv}
            />
          </A.BrowserCaption>
          <A.ScrollPane className={TS.CL_SCROLL_PANE} style={S.SCROLL_DIV}>
              { this._renderArticles(articles, onCloseItem, onRemoveUnder) }
          </A.ScrollPane>
        </div>
     )
   }

   _getRootDiv = () => {
     return this.rootDiv;
   }
}

export default withTheme(NewsPane)
