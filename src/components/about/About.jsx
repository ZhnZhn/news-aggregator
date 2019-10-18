import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './About.Style'

import A from '../Comp'
import Step from './Step'
import IconLogoBar from './IconLogoBar'

import STYLE from '../styles/ContainerStyle'

const CL_SHOW = "show-popup";

class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow : props.isInitShow
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
    const { showAction, hideAction } = this.props;
    switch(actionType){
      case showAction:
         this.setState({ isShow : true })
         break;
      case hideAction:
         this.setState({ isShow : false })
         break;
      default: return void 0;
    }
  }

  _handleClose = () => {
    this.setState({ isShow : false })
  }

  render(){
    const  { theme } = this.props
         , S = theme.createStyle(styleConfig)
         , { isShow } = this.state
         , _rootClass = isShow
              ? CL_SHOW
              : null
         , _rootStyle = isShow
              ? S.BLOCK
              : S.NONE;
    return (
      <div
        className={_rootClass}
        style={{...STYLE.aboutRootDiv, ..._rootStyle, ...S.ROOT}}
       >
         <A.BrowserCaption
            rootStyle={S.BROWSER_CAPTION}
            caption="About News Aggregator"
            onClose={this._handleClose}
         />

         <A.ScrollPane
            className={S.CL_SCROLL_PANE}
            style={S.SCROLL_DIV}
         >
           <div style={S.DIV_WRAPPER}>
              <div style={S.DIV_TEXT}>
                 <p>
                   <span style={S.APP_TITLE}>News Agreggator</span> is RESTFul client for reading news.
                 </p>
                 <p>
                   <span>News headline providers:&nbsp;</span>
                </p>
                <p>
                  <div>
                    <A.Link.IexApi />
                  </div>
                   <div>
                     <A.Link.NewsApi />
                   </div>
                   <div>
                     <A.Link.StackOverflow />
                   </div>
                   <div>
                     <A.Link.WebhoseIo />
                   </div>
                 </p>
                 <p style={S.MARGIN_TOP}>
                   Provider's API Keys is required for using app.
                 </p>
                 <p>
                   API Keys can be set in Settings Dialog.
                 </p>
             </div>
             <p style={S.MARGIN_TOP}>
               <span style={S.BLACK}>For&nbsp;</span>
               <span style={S.PROVIDER}>NewsApi:</span>
             </p>
             <Step
                styleRoot={S.STEP}
                step="1"
                description="Choose a news source in News Providers."
             />
             <Step
                styleRoot={S.STEP}
                step="2"
                description="Select sortBy in draggable Dialog."
             />
             <Step
                styleRoot={S.STEP}
                step="3"
                description="Click a button Load in Dialog."
             />
             <p style={S.MARGIN_TOP}>
               Not all news source support all sortBy values.
             </p>

             <p style={S.MARGIN_TOP}>
               <span style={S.BLACK}>For&nbsp;</span>
               <span style={S.PROVIDER}>
                  IEX Cloud,&nbsp;StackOverflow,&nbsp;Webhose:
                </span>
             </p>
             <Step
                styleRoot={S.STEP}
                step="1"
                description="Click button Query in header."
             />
             <Step
                styleRoot={S.STEP}
                step="2"
                description="Choose Data Provider in modal pane."
             />
             <Step
                styleRoot={S.STEP}
                step="3"
                description="Enter and choose parameters in Dialog."
             />
             <Step
                styleRoot={S.STEP}
                step="4"
                description="Click a button Load in Dialog."
             />
             <IconLogoBar />
             <p>
               <span style={S.BLACK}>
                 *Logos Fair Use.
               </span>
            </p>
           </div>
        </A.ScrollPane>
      </div>
    );
  }
}

export default withTheme(About)
