import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './NewsPane.Style'

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import CircleButton from '../zhn-atoms/CircleButton'
import SvgHrzResize from '../zhn-atoms/SvgHrzResize'
import ScrollPane from '../zhn-atoms/ScrollPane'

const SHOW_POPUP = "show-popup"
    , CHILD_MARGIN = 36
    , RESIZE_MIN_WIDTH = 400
    , RESIZE_MAX_WIDTH = 1200;

const styles = {
  rootDiv : {
    backgroundColor: '#4D4D4D',
    padding : '0px 0px 3px 0px',
    position: 'relative',
    borderRadius: '4px',
    width: '635px',
    height: 'calc(100vh - 71px)',
    minHeight: '500px',
    marginLeft: '16px',
    boxShadow: '1px 4px 6px 1px rgba(0,0,0,0.6)',
    overflowY: 'hidden',
    overflowX : 'hidden'
  },
  brCaption: {
    marginRight: '-2px'
  },
  hrzResize : {
    position : 'absolute',
    top : '30px',
    right: '0'
  },
  btCircle: {
    marginLeft: '16px',
    marginRight: '6px'
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  chartDiv : {
    overflowY: 'auto',
    height : '680px'
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

class NewsPane extends Component {

  constructor(props){
    super();
    this.childMargin = CHILD_MARGIN;
    this.state = {
      isShow: true,
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
      const { addAction, showAction, toggleAction, id } = this.props;
      if (option.id === id){
        switch(actionType){
          case addAction: {
            const sortBy = (option.sortBy)
                    ? option.sortBy : this.state.sortBy
            this.setState({
              isShow: true,
              articles: option.data,
              sortBy
            })
            break;
           }
          case showAction:
            this.setState({ isShow: true })
            break;
          case toggleAction:
            this.setState(prevState => {
              return {
                isShow: !prevState.isShow
              };
            })
            break;
          default: return undefined;
        }
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

   render(){
      const {
              paneCaption,
              theme,
              onRemoveItems,
              onRemoveUnder, onCloseItem
            } = this.props
          , TS = theme.createStyle(styleConfig)
          , { isShow, articles, sortBy } = this.state
          , _paneCaption = `${paneCaption} : ${sortBy}`
          , _styleIsShow = (isShow)
               ? styles.inlineBlock
               : styles.none
         , _classIsShow = (isShow)
               ? SHOW_POPUP
               : undefined;
     return(
        <div
           ref={node => this.rootDiv = node}
           className={_classIsShow}
           style={{...styles.rootDiv, ...TS.PANE_ROOT, ..._styleIsShow}}
        >
          <BrowserCaption
             rootStyle={{ ...styles.brCaption, ...TS.PANE_CAPTION }}
             caption={_paneCaption}
             onClose={this._handleHide}
          >
            <CircleButton
              caption="R"
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
