import React from 'react'

import IconGitHub from './IconGitHub'
import IconReact from './IconReact'

const S = {
  ROOT : {
    textAlign : 'center',
    paddingTop: '20px'
  }
}

const IconLogoBar = (props) => (
  <div style={S.ROOT}>
     <IconGitHub
        className="icon__github"
        title="GitHub ZhnZhn"
        uri="https://github.com/zhnzhn"
     />
     <IconReact />
  </div>
);

export default IconLogoBar
