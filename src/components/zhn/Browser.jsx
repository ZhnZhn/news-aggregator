import {
  crShowHide,
  crPaneCn
} from '../crStyle';

const CL_BROWSER_PANE = crPaneCn("browser-pane");

const Browser = (props) => {
  const [
    _cn,
    _style
  ] = crShowHide(
    props.isShow,
    CL_BROWSER_PANE
  );

  /*eslint-disable jsx-a11y/no-static-element-interactions*/
  return (
     <div        
        className={_cn}
        style={{...props.style, ..._style}}
        onKeyDown={props.onKeyDown}
      >
        {props.children}
     </div>
  );
  /*eslint-enable jsx-a11y/no-static-element-interactions*/
};

export default Browser
