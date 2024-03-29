const SpinnerLoading = ({
  style,
  isFailed
}) => (
  <span
    style={style}
    data-loader={isFailed
      ? "circle-failed"
      : "circle"}
  />
);

export default SpinnerLoading
