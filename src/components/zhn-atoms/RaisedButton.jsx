const CL_BT = 'bt-raised';
const CL_BT_SPAN = 'bt-raised__span';

const S = {
  PRIMARY_SPAN: {
    color: '#80c040'
  }
};

const RaisedButton = ({
  isPrimary,
  style, clDiv,
  caption,
  onClick
}) => {
  const _spanStyle = isPrimary ? S.PRIMARY_SPAN : void 0;
  return (
    <button
      className={CL_BT}
      style={style}
      type="button"
      onClick={onClick}
    >
      <div className={clDiv}>
        <span
           className={CL_BT_SPAN}
           style={_spanStyle}
        >
          {caption}
        </span>
      </div>
    </button>
  );
}

export default RaisedButton
