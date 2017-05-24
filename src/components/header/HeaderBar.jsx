import React from 'react'

import LoadingProgress from './LoadingProgress'
import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'
import ActionButton from '../zhn-atoms/ActionButton'

const TITLE = "News Aggregator v0.1.0";

const HeaderBar = ({
  store, LOADING_ACTIONS, onNewsSources, onSettings, onAbout
}) => (
  <div className="header">
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
    </span>
    <GitHubLink
      className="header__github-link"
      title="GitHub Repository"
      href="https://github.com/news-aggregator"
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

export default HeaderBar
