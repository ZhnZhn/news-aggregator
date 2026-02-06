import { S_COLOR_BLACK } from '../crStyle';
import BtCaption from './BtCaption';

const CL_BT_RAISED = "bt-raised"
, CL_BT_RAISED_DIV = `${CL_BT_RAISED}__div`
, CL_BT_RAISED_SPAN = `${CL_BT_RAISED}__span`;

const RaisedButton = (props) => (
  <button
    ref={props.refBt}
    type="button"
    className={CL_BT_RAISED}
    style={props.style}
    onClick={props.onClick}
  >
    <div className={CL_BT_RAISED_DIV}>
      <BtCaption
        className={CL_BT_RAISED_SPAN}
        style={props.isPrimary ? S_COLOR_BLACK : void 0}
        caption={props.caption}
        hotKey={props.hotKey}
      />
    </div>
  </button>
);


export default RaisedButton
