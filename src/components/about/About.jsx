import React, { Component } from 'react';

//import { ComponentActionTypes } from '../../flux/actions/ComponentActions';
//import { ChartActionTypes } from '../../flux/actions/ChartActions';

import ScrollPane from '../zhn-atoms/ScrollPane'
import BrowserCaption from '../zhn-atoms/BrowserCaption'
import LinkNewsApi from '../links/LinkNewsApi'
import Step from './Step'
import IconLogoBar from './IconLogoBar'

import STYLE from '../styles/ContainerStyle'

const CL_SHOW = "show-popup";

const S = {
  SCROLL_DIV : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  DIV_WRAPPER : {
    paddingLeft: '12px',
    paddingRight: '5px',
    lineHeight : 1.4,
    color: 'gray',
    fontWeight: 'bold'
  },
  DIV_TEXT: {
    lineHeight: 1.8
  },
  BLOCK: {
    display: 'block'
  },
  NONE: {
    display: 'none'
  },
  APP_TITLE: {
    color: '#80c040'
  },
  STEP: {
    marginTop: '3px'
  },
  BLACK: {
    color: 'black'
  }
};


class About extends Component {
  constructor(props){
    super();
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
      default: return undefined;
    }
  }

  _handleClose = () => {
    this.setState({ isShow : false })
  }

  render(){
    const { isShow } = this.state
        ,  _rootClass = isShow
              ? CL_SHOW
              : null
        , _rootStyle = isShow
              ? S.BLOCK
              : S.NONE;
    return (
      <div
        className={_rootClass}
        style={{ ...STYLE.aboutRootDiv, ..._rootStyle }}
       >
         <BrowserCaption
            caption="About"
            onClose={this._handleClose}
         />

         <ScrollPane style={S.SCROLL_DIV}>
           <div style={S.DIV_WRAPPER}>
              <div style={S.DIV_TEXT}>
                 <p>
                   <span style={S.APP_TITLE}>News Agreggator</span> is RESTFul client for reading news.
                 </p>
                 <p>
                   <span>News headline provider:&nbsp;</span>
                   <LinkNewsApi />
                   <span>.</span>
                 </p>
                 <p>
                   NewsApi Key is required for using app.
                 </p>
             </div>
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
             <p style={{ marginTop: '16px' }}>
               Not all news source support all sortBy values.
             </p>
             <IconLogoBar />
             <p>
               <span style={S.BLACK}>
                 *Logos Fair Use.
               </span>
            </p>
           </div>
        </ScrollPane>
      </div>
    );
  }
}

export default About
