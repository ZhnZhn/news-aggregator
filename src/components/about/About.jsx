import useBool from '../hooks/useBool';
import useTheme from '../hooks/useTheme';
import useListen from '../hooks/useListen';

import crCn from '../zhn-utils/crCn';
import styleConfig from './About.Style';

import A from '../Comp';
import Step from './Step';
import IconLogoBar from './IconLogoBar';

const CL_ABOUT_PANE = "about-pane";
const CL_SHOW = "show-popup";

const { Link, ItemStack } = A;

const PROVIDER_LINKS = [
  [Link.CryptoCompare],
  [Link.CoinStats],
  [Link.Messari],
  [Link.IexApi],
  [Link.FmpApi, { title: "Financial Modeling Prep"}],
  [Link.NewsApi],
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

const _crStepItem = (descr, index) => (
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
  , _style = isShow ? TS.BLOCK : TS.NONE;

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
          className={TS.CL_SCROLL_PANE}
          style={TS.SCROLL_DIV}
       >
         <div style={TS.DIV_WRAPPER}>
            <div style={TS.DIV_TEXT}>
               <p>
                 <span style={TS.APP_TITLE}>News Agreggator</span> is web app for browsing news.
               </p>
               <p>
                 News headlines providers:&nbsp;
               </p>
               <ItemStack
                  items={PROVIDER_LINKS}
                  crItem={_crLinkItem}
               />
               <p style={TS.MT_8}>
                 Personal API Keys from providers are required.
               </p>
               <p>
                 API Keys can be set by means off Settings Dialog.
               </p>
           </div>
           <p style={TS.MT_8}>
             <span style={TS.BLACK}>Browsing by news source:</span>
           </p>
           <ItemStack
             items={NEWS_SOURCE_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <p style={TS.MT_8}>
             Not all news source support all sortBy values.
           </p>

           <p style={TS.MT_8}>
             <span style={TS.BLACK}>Browsing by search terms:</span>
           </p>
           <ItemStack
             items={SEARCH_TERM_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <IconLogoBar />
           <p>
             <span style={TS.BLACK}>
               *Logos Fair Use.
             </span>
          </p>
         </div>
      </A.ScrollPane>
    </div>
  );
};

export default About
