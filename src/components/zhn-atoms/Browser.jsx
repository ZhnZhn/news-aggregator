import {
  crShowHide,
  crPaneCn
} from '../crStyle';

const CL_BROWSER_PANE = crPaneCn("browser-pane");

const Browser = ({
  isShow,
  style,
  onKeyDown,
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
        role="presentation"
        onKeyDown={onKeyDown}
      >
        {children}
     </div>
  );
};

export default Browser
