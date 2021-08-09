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
               <div>
                 <A.Link.CryptoCompare />
               </div>
               <div>
                 <A.Link.CoinStats />
               </div>
               <div>
                 <A.Link.Messari />
               </div>
               <div>
                 <A.Link.IexApi />
               </div>
               <div>
                 <A.Link.FmpApi
                    title="Financial Modeling Prep"
                  />
               </div>
               <div>
                 <A.Link.NewsApi />
               </div>
               <div>
                 <A.Link.StackOverflow />
               </div>
               <div>
                 <A.Link.WebhoseIo />
               </div>

               <p style={S.MARGIN_TOP}>
                 Personal API Keys from providers are required.
               </p>
               <p>
                 API Keys can be set by means off Settings Dialog.
               </p>
           </div>
           <p style={S.MARGIN_TOP}>
             <span style={S.BLACK}>Browsing by new source:</span>
           </p>
           <Step
              styleRoot={S.STEP}
              step="1"
              description="Please, click button News in header."
           />
           <Step
              styleRoot={S.STEP}
              step="2"
              description="Choose a topic and news source."
           />
           <Step
              styleRoot={S.STEP}
              step="3"
              description="Click a button Load in dialog."
           />
           <p style={S.MARGIN_TOP}>
             Not all news source support all sortBy values.
           </p>

           <p style={S.MARGIN_TOP}>
             <span style={S.BLACK}>Browsing by search terms:</span>
           </p>
           <Step
              styleRoot={S.STEP}
              step="1"
              description="Please, click button Query in header."
           />
           <Step
              styleRoot={S.STEP}
              step="2"
              description="Choose news source in modal pane."
           />
           <Step
              styleRoot={S.STEP}
              step="3"
              description="Click a button Load in dialog."
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
