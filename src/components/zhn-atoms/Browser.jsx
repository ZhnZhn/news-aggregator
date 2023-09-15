import {
  crShowHide,
  crPaneCn
} from '../crStyle';

const CL_BROWSER_PANE = crPaneCn("browser-pane");

const Browser = ({
  isShow,
  style,
  children
}) => {
  const [
    _cn,
    _style
  ] = crShowHide(
    isShow,
    CL_BROWSER_PANE
  );

  return (
     <div
        className={_cn}
        style={{...style, ..._style}}
      >
        {children}
     </div>
  );
};

export default Browser
