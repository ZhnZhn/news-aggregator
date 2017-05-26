import React, { Component } from 'react';

import BrowserCaption from '../zhn-atoms/BrowserCaption'
import SvgHrzResize from '../zhn-atoms/SvgHrzResize'
import ScrollPane from '../zhn-atoms/ScrollPane'

import Article from '../items/Article'

const SHOW_POPUP = "show-popup"
    , CHILD_MARGIN = 36
    , RESIZE_MIN_WIDTH = 350
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
  hrzResize : {
    position : 'absolute',
    top : '30px',
    right: '0'
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

   _onStore = (actionType, option) => {
      const { addAction, showAction, toggleAction, id } = this.props;
      if (option.id === id){
        switch(actionType){
          case addAction:
            this.setState({
              isShow: true,
              articles: option.data,
              sortBy: option.sortBy
            })
            break;
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
      onClose();
      this.setState({ isShow: false });
   }

   _getRootDiv = () => {
     return this.rootDiv;
   }

  _renderArticles(articles=[], onCloseItem){
     return articles.map((article, index) => {
        return (
          <Article
             key={article.articleId}
             item={article}
             onCloseItem={onCloseItem}
          />
        );
     })
  }

   render(){
     const  { paneCaption, onCloseItem } = this.props
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
           style={{...styles.rootDiv, ..._styleIsShow}}
        >
          <BrowserCaption
             caption={_paneCaption}
             onClose={this._handleHide}
          >
            <SvgHrzResize
              minWidth={RESIZE_MIN_WIDTH}
              maxWidth={RESIZE_MAX_WIDTH}
              getDomNode={this._getRootDiv}
            />
          </BrowserCaption>
          <ScrollPane style={styles.scrollDiv}>
              { this._renderArticles(articles, onCloseItem) }
          </ScrollPane>
        </div>
     )
   }
}

export default NewsPane
