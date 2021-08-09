import { useState, useCallback } from 'react';

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
  [Link.WebhoseIo]
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
  const [isShow, setIsShow] = useState(isInitShow)
  , _hClose = useCallback(() => setIsShow(false), [])
  , S = useTheme(styleConfig);

  useListen(store, actionType=>{
    switch(actionType){
      case showAction:
         setIsShow(true);
         break;
      case hideAction:
         setIsShow(false)
         break;
      default: return;
    }
  })

  const _className = crCn(CL_ABOUT_PANE, [isShow, CL_SHOW])
  , _style = isShow ? S.BLOCK : S.NONE;

  return (
    <div
      className={_className}
      style={{..._style, ...S.ROOT}}
     >
       <A.BrowserCaption
          rootStyle={S.BROWSER_CAPTION}
          caption="About News Aggregator"
          onClose={_hClose}
       />
       <A.ScrollPane
          className={S.CL_SCROLL_PANE}
          style={S.SCROLL_DIV}
       >
         <div style={S.DIV_WRAPPER}>
            <div style={S.DIV_TEXT}>
               <p>
                 <span style={S.APP_TITLE}>News Agreggator</span> is web app for browsing news.
               </p>
               <p>
                 News headlines providers:&nbsp;
               </p>
               <ItemStack
                  items={PROVIDER_LINKS}
                  crItem={_crLinkItem}
               />
               <p style={S.MT_8}>
                 Personal API Keys from providers are required.
               </p>
               <p>
                 API Keys can be set by means off Settings Dialog.
               </p>
           </div>
           <p style={S.MT_8}>
             <span style={S.BLACK}>Browsing by news source:</span>
           </p>
           <ItemStack
             items={NEWS_SOURCE_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <p style={S.MT_8}>
             Not all news source support all sortBy values.
           </p>

           <p style={S.MT_8}>
             <span style={S.BLACK}>Browsing by search terms:</span>
           </p>
           <ItemStack
             items={SEARCH_TERM_STEP_DESCRIPTIONS}
             crItem={_crStepItem}
           />
           <IconLogoBar />
           <p>
             <span style={S.BLACK}>
               *Logos Fair Use.
             </span>
          </p>
         </div>
      </A.ScrollPane>
    </div>
  );
};

export default About
