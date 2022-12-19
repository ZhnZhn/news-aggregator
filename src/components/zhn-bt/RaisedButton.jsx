const CL_BT_RAISED = 'bt-raised'
, CL_BT_RAISED_SPAN = 'bt-raised__span'
, S_PRIMARY_SPAN = { color: '#80c040' };

const RaisedButton = ({
  isPrimary,
  style, clDiv,
  caption,
  onClick
}) => {
  const _spanStyle = isPrimary
    ? S_PRIMARY_SPAN : void 0;
  return (
    <button
      type="button"
      className={CL_BT_RAISED}
      style={style}
      onClick={onClick}
    >
      <div className={clDiv}>
        <span
           className={CL_BT_RAISED_SPAN}
           style={_spanStyle}
        >
          {caption}
        </span>
      </div>
    </button>
  );
};

export default RaisedButton
