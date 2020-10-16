const SpinnerLoading = ({ style, isFailed }) => {
  const _dataLoader = (isFailed)
    ? "circle-failed"
    : "circle";
  return (
    <span style={style} data-loader={_dataLoader} />
  );
};

export default SpinnerLoading
