import { FMP_LONG } from '../../conf/ProviderNames';

import useBool from '../hooks/useBool';
import useTheme from '../hooks/useTheme';

import crCn from '../zhn-utils/crCn';
import { crShowHideStyle } from '../zhn-utils/crStyle';
import {
  S_APP_TITLE,
  S_SCROLL_DIV,
  S_DIV_WRAPPER,
  S_BLACK,
  S_LH_14,
  S_LH_18,
  S_MT_8,
  styleConfig
} from './About.Style';

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

const CL_ABOUT_PANE = "about-pane"
, CL_SHOW = "show-popup"
, S_BROWSER_CAPTION = {
  paddingLeft: 12,
  textAlign: 'left'
};

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
  "Please, click button News in header.",
  "Choose a topic and news source.",
  "Click a button Load in dialog.",
];

const SEARCH_TERM_STEP_DESCRIPTIONS = [
  "Please, click button Query in header.",
  "Choose news source in modal pane.",
  "Click a button Load in dialog."
];

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
  , TS = useTheme(styleConfig);

  useMsAbout(msAbout => {
    if (msAbout) {
      const _setIs = msAbout.is
        ? setIsShowTrue
        : setIsShowFalse
      _setIs()
    }
  })

  const _className = crCn(
    CL_ABOUT_PANE,
    [isShow, CL_SHOW]
  )
  , _showHideStyle = crShowHideStyle(isShow);

  return (
    <div
      className={_className}
      style={{..._showHideStyle, ...TS.ROOT}}
     >
       <A.BrowserCaption
          style={{...S_BROWSER_CAPTION, ...TS.BROWSER_CAPTION}}
          caption="About News Aggregator"
          onClose={setIsShowFalse}
       />
       <A.ScrollPane
          style={S_SCROLL_DIV}
       >
         <div style={S_DIV_WRAPPER}>
            <div style={S_LH_14}>
               <p>
                 <span style={S_APP_TITLE}>News Agreggator</span> is web app for browsing news.
               </p>
               <p>
                 News headlines providers:&nbsp;
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
              Personal API Keys from providers are required.
             </p>
             <p>
              API Keys can be set by means off Settings Dialog.
             </p>
           </div>
           <p style={S_MT_8}>
             <span style={S_BLACK}>Browsing by news source:</span>
           </p>
           <ItemStack
             items={NEWS_SOURCE_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <div style={S_LH_14}>
             <p style={S_MT_8}>
               Not all news source support all sortBy values.
             </p>
             <p>
               <span style={TS.BLACK}>Browsing by search terms:</span>
             </p>
           </div>
           <ItemStack
             items={SEARCH_TERM_STEP_DESCRIPTIONS}
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
