import React from 'react'

import IconGitHub from './IconGitHub'
import IconReact from './IconReact'

const S = {
  ROOT : {
    textAlign : 'center',
    paddingTop: 20
  }
};

const IconLogoBar = () => (
  <div style={S.ROOT}>
     <IconGitHub
        className="icon__github"
        title="GitHub: Repo News Aggregator"
        uri="https://github.com/zhnzhn/news-aggregator"
     />
     <IconReact />
  </div>
);

export default IconLogoBar
