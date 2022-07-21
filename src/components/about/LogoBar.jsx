import LogoGitHub from './LogoGitHub';
import LogoPreact from './LogoPreact';

const S_ROOT = {
  textAlign: 'center',
  paddingTop: 20
};

const LogoBar = () => (
  <div style={S_ROOT}>
     <LogoGitHub
        className="logo__github"
        title="GitHub: Repository News Aggregator"
        href="https://github.com/zhnzhn/news-aggregator"
     />
     <LogoPreact
        className="logo__preact"
     />
  </div>
);

export default LogoBar
