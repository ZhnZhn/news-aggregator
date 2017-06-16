import React, { Component } from 'react'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'
import ActionButton from '../zhn-atoms/ActionButton'
import ModalButton from '../zhn-atoms/ModalButton'
import PanelQuery from './PanelQuery'

const TITLE = "News Aggregator v0.3.0";

class HeaderBar extends Component {
  constructor(props){
    super()
    this.state = {
      isQuery: false
    }
  }

  _onRegQuery = (node) => {
    this.btQueryNode = node
  }
  _handleClickQuery = () => {
    this.setState({ isQuery: !this.state.isQuery })
  }
  _handleCloseQuery = (event) => {
    if (!this.btQueryNode.contains(event.target)){
      this.setState({ isQuery: false })
    }
  }

  _handleClickSource = (id) => {
    switch(id){
      case 'Webhose':
        this.props.onQuery()
        break;
      case 'StackTagged':
        this.props.onStackTagged()
        break;
      default:
    }
    this._handleClickQuery()
  }

  render() {
    const {
            store, LOADING_ACTIONS,
            onNewsSources,
            //onQuery,
            onSettings, onAbout
          } = this.props
        , { isQuery } = this.state;
    return (
      <div className="header">
        <PanelQuery
          className="header__panel-browser"
          isShow={isQuery}
          onClose={this._handleCloseQuery}
          onWebhose={this._handleClickSource.bind(null, 'Webhose')}
          onStackTagged={this._handleClickSource.bind(null, 'StackTagged')}
        />
        <LoadingProgress
           store={store}
           ACTIONS={LOADING_ACTIONS}
        />
        <IconAppLogo
           className="header__icon-app"
           title={TITLE}
        />
        <AppLabel
           className="header__label-app"
           caption={TITLE}
        />
        <span className="header__browser-bts">
          <ActionButton
            type="TypeA"
            caption="News"
            title="Open News Sources Browser"
            onClick={onNewsSources}
          />
          <ModalButton
             type="TypeA"
             caption="Query"
             title="Panel Query Source"
             //onClick={onQuery}
             onClick={this._handleClickQuery}
             onReg={this._onRegQuery}
          >
            <span className="arrow-down"></span>
          </ModalButton>
        </span>
        <GitHubLink
          className="header__github-link"
          title="GitHub Repository"
          href="https://github.com/zhnzhn/news-aggregator"
        />
        <div className="header__bts">
            <ActionButton
              type="TypeA"
              caption="Settings"
              title="Open Settings Dialog"
              onClick={onSettings}
            />
            <ActionButton
              type="TypeA"
              caption="About"
              title="About"
              onClick={onAbout}
            />
        </div>
      </div>
     );
   }
}


export default HeaderBar
