import { FMP_LONG } from '../../conf/ProviderNames';

import { HAS_WIDE_SCREEN } from '../has';

import useBool from '../hooks/useBool';

import {
  crPaneCn,
  crShowHide
} from '../crStyle';

import A from '../Comp';
import {
  CryptoCompareLink,
  CoinStatsLink,
  MessariLink,
  IexApiLink,
  FmpApiLink,
  AlphaVantageLink,
  NewsApiLink,
  TheNewsApiLink,
  DevToLink,
  StackOverflowLink,
  WebzLink,
  RedditLink
} from '../links/Links';
import Step from './Step';
import LogoBar from './LogoBar';

const CL_ABOUT_PANE = crPaneCn("about-pane")
, S_BROWSER_CAPTION = {
  paddingLeft: 12,
  textAlign: 'left'
}
, S_SCROLL_DIV = {
  height: '92%',
  paddingTop: 8,
  paddingRight: 10,
  overflowY: 'auto'
}
, S_DIV_WRAPPER = {
  color: 'black',
  paddingLeft: 12,
  paddingRight: 5,
  lineHeight : 1.4,
  fontWeight: 'bold'
}
, S_LH_14 = {
  lineHeight: 1.4
}
, S_LH_18 = {
  lineHeight: 1.8
}
, S_APP_TITLE = {
  color: '#80c040'
}
, S_BLACK = {
  color: 'black'
}
, S_MT_8 = {
  marginTop: 8
}
, _crToken = (
  token,
  hotKey
) => HAS_WIDE_SCREEN
   ? `${token} [${hotKey}]`
   : token;

const { ItemStack } = A;

const PROVIDER_LINKS = [
  [CryptoCompareLink],
  [CoinStatsLink],
  [MessariLink],
  [IexApiLink],
  [FmpApiLink, { title: FMP_LONG }],
  [AlphaVantageLink],
  [NewsApiLink],
  [TheNewsApiLink],
  [DevToLink],
  [StackOverflowLink],
  [WebzLink],
  [RedditLink]
];

const _crLinkItem = (
  [Comp, props],
  index
) => (
  <div key={index}>
    <Comp {...props} />
  </div>
);

const NEWS_SOURCE_STEP_DESCRIPTIONS = [
  `Please, click button ${_crToken('QUERY', 'q')} in header.`,
  "Choose headlines source.",
  `Click button ${_crToken('LOAD', 'l')} in dialog.`,
]
, API_KEYS_SETTINGS_MSG = `API Keys can be set in the ${_crToken('Settings Dialog', 's')}`;

const _crStepItem = (
  descr,
  index
) => (
  <Step
    key={index}
    step={index+1}
    description={descr}
  />
);

const About = ({
  isInitShow,
  useMsAbout
}) => {
  const [
    isShow,
    setIsShowTrue,
    setIsShowFalse
  ] = useBool(isInitShow)

  useMsAbout(msAbout => {
    if (msAbout) {
      const _setIs = msAbout.is
        ? setIsShowTrue
        : setIsShowFalse
      _setIs()
    }
  })

  const [
    _className,
    _showHideStyle
  ] = crShowHide(
    isShow,
    CL_ABOUT_PANE
  );

  return (
    <div
      className={_className}
      style={_showHideStyle}
     >
       <A.BrowserCaption
          style={S_BROWSER_CAPTION}
          caption="About News Aggregator"
          onClose={setIsShowFalse}
       />
       <A.ScrollPane
          style={S_SCROLL_DIV}
       >
         <div style={S_DIV_WRAPPER}>
            <div style={S_LH_14}>
               <p>
                 <span style={S_APP_TITLE}>News Agreggator</span> is a web app for browsing news, blogs, social media headlines.
               </p>
               <p style={S_MT_8}>
                 Available headlines providers:&nbsp;
               </p>
            </div>
            <div style={S_LH_18}>
              <ItemStack
                items={PROVIDER_LINKS}
                crItem={_crLinkItem}
              />
           </div>
           <div style={S_LH_14}>
             <p style={S_MT_8}>
              Personal API Keys from some providers are required.
             </p>
             <p>
              {API_KEYS_SETTINGS_MSG}
             </p>
           </div>
           <p style={S_MT_8}>
             <span style={S_BLACK}>Browsing by source:</span>
           </p>
           <ItemStack
             items={NEWS_SOURCE_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <LogoBar />
           <p>
             <span style={S_BLACK}>
               *Logos Fair Use.
             </span>
          </p>
         </div>
      </A.ScrollPane>
    </div>
  );
};

export default About
