import useBool from '../hooks/useBool';
import useTheme from '../hooks/useTheme';
import useListen from '../hooks/useListen';

import crCn from '../zhn-utils/crCn';
import {
  S_BLOCK,
  S_NONE,
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
import Step from './Step';
import LogoBar from './LogoBar';

const CL_ABOUT_PANE = "about-pane";
const CL_SHOW = "show-popup";

const {
  Link,
  ItemStack
} = A;

const PROVIDER_LINKS = [
  [Link.CryptoCompare],
  [Link.CoinStats],
  [Link.Messari],
  [Link.IexApi],
  [Link.FmpApi, { title: "Financial Modeling Prep"}],
  [Link.NewsApi],
  [Link.TheNewsApi],
  [Link.StackOverflow],
  [Link.Webz]
];

const _crLinkItem = ([Comp, props], index) => (
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
  store,
  showAction,
  hideAction
}) => {
  const [
    isShow,
    setIsShowTrue,
    setIsShowFalse
  ] = useBool(isInitShow)
  , TS = useTheme(styleConfig);

  useListen(store, actionType=>{
    if (actionType === showAction) {
      setIsShowTrue()
    } else if (actionType === hideAction) {
      setIsShowFalse()
    }
  })

  const _className = crCn(CL_ABOUT_PANE, [isShow, CL_SHOW])
  , _style = isShow ? S_BLOCK : S_NONE;

  return (
    <div
      className={_className}
      style={{..._style, ...TS.ROOT}}
     >
       <A.BrowserCaption
          style={TS.BROWSER_CAPTION}
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
