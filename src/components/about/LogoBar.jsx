import {
  DP_GITHUB,
  DP_BOTTOM_RIGHT
} from '../DP';

import LogoGitHub from './LogoGitHub';
import LogoPreact from './LogoPreact';

const S_ROOT = {
  position: 'relative',
  textAlign: 'center',
  paddingTop: 20
};

const LogoBar = () => (
  <div style={S_ROOT}>
     <LogoGitHub
        ariaLabel="GitHub: Repository News Aggregator"
        dataPos={DP_GITHUB}
        className="logo__github"
        href="https://github.com/zhnzhn/news-aggregator"
     />
     <LogoPreact
        ariaLabel="Official Preact site"
        dataPos={DP_BOTTOM_RIGHT}
        className="logo__preact"
     />
  </div>
);

export default LogoBar
