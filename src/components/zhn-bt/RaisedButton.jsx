import BtCaption from './BtCaption';

const CL_BT_RAISED = 'bt-raised'
, CL_BT_RAISED_SPAN = 'bt-raised__span'
, S_PRIMARY_COLOR = { color: '#80c040' };

const RaisedButton = ({
  isPrimary,
  style,
  clDiv,
  caption,
  hotKey,
  onClick
}) => {
  const _spanStyle = isPrimary
    ? S_PRIMARY_COLOR
    : void 0;
  return (
    <button
      type="button"
      className={CL_BT_RAISED}
      style={style}
      onClick={onClick}
    >
      <div className={clDiv}>
        <BtCaption
          className={CL_BT_RAISED_SPAN}
          style={_spanStyle}
          caption={caption}
          hotKey={hotKey}
        />
      </div>
    </button>
  );
};

export default RaisedButton
