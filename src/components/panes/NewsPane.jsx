import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './NewsPane.Style'

import crModelMore from './crModelMore'
import ModalSlider from '../zhn-modal-slider/ModalSlider'
import BrowserCaption from '../zhn-atoms/BrowserCaption'
import CircleButton from '../zhn-atoms/CircleButton'
import SvgHrzResize from '../zhn-atoms/SvgHrzResize'
import ScrollPane from '../zhn-atoms/ScrollPane'

const SHOW_POPUP = "show-popup"
    , CHILD_MARGIN = 36
    , RESIZE_INIT_WIDTH = 635
    , RESIZE_MIN_WIDTH = 395
    , RESIZE_MAX_WIDTH = 1200
    , DELTA = 10;

const CL = {
  MENU_MORE: "popup-menu items__menu-more"
};

const styles = {
  rootDiv : {
    backgroundColor: '#4D4D4D',
    padding : '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: 4,
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    marginLeft: 16,
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  brCaption: {
    marginRight: -2
  },
  hrzResize : {
    position : 'absolute',
    top : 30,
    right: '0'
  },
  btCircle: {
    marginLeft: 16,
    marginRight: 6
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  chartDiv : {
    overflowY: 'auto',
    height : 680
  },
  transitionOption : {
    transitionName : "scaleY",
    transitionEnterTimeout : 400,
    transitionLeave : false
  },
  inlineBlock : {
    display : 'inline-block'
  },
  none : {
    display: 'none'
  }
};

const _getWidth = style => parseInt(style.width, 10)
  || RESIZE_INIT_WIDTH;
const _toStyleWidth = width => width + 'px';

class NewsPane extends Component {

  constructor(props){
    super(props);
    this.childMargin = CHILD_MARGIN;

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
         , w = _getWidth(style) + DELTA;
     if (w < RESIZE_MAX_WIDTH) {
        style.width = _toStyleWidth(w)
     }
   }
   _minusToWidth = () => {
     const style = this._getRootNodeStyle()
         , w = _getWidth(style) - DELTA;
     if (w > RESIZE_MIN_WIDTH) {
       style.width = _toStyleWidth(w)
     }
   }

   _handleHide = () => {
      const { onClose } = this.props;
      onClose()
      this.setState({ isShow: false })
   }

   _getRootDiv = () => {
     return this.rootDiv;
   }

  _renderArticles(articles=[], onCloseItem, onRemoveUnder){
     const { Item } = this.props;
     return articles.map((article, index) => {
        return (
          <Item
             key={article.articleId}
             item={article}
             onCloseItem={onCloseItem}
             onRemoveUnder={onRemoveUnder}
          />
        );
     })
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
          , _sortBy = sortBy ? ': ' + sortBy : ''
          , _paneCaption = `${paneCaption}${_sortBy}`
          , _styleIsShow = isShow
               ? styles.inlineBlock
               : styles.none
         , _classIsShow = isShow
               ? SHOW_POPUP
               : void 0;

     return(
        <div
           ref={this._refRootDiv}
           className={_classIsShow}
           style={{...styles.rootDiv, ...TS.PANE_ROOT, ..._styleIsShow}}
        >
          <ModalSlider
            isShow={isMore}
            className={CL.MENU_MORE}
            style={TS.EL_BORDER}
            model={this._MODEL}
            onClose={this._hToggleMore}
          />
          <BrowserCaption
             rootStyle={{ ...styles.brCaption, ...TS.PANE_CAPTION }}
             caption={_paneCaption}
             onMore={this._showMore}
             onClose={this._handleHide}
          >
            <CircleButton
              caption="R"
              title="Remove All Items"
              style={styles.btCircle}
              onClick={onRemoveItems}
            />
            <SvgHrzResize
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
              getDomNode={this._getRootDiv}
            />
          </BrowserCaption>
          <ScrollPane className={TS.CL_SCROLL_PANE} style={styles.scrollDiv}>
              { this._renderArticles(articles, onCloseItem, onRemoveUnder) }
          </ScrollPane>
        </div>
     )
   }
}

export default withTheme(NewsPane)
