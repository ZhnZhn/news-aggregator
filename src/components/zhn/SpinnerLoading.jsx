const SpinnerLoading = (props) => (
  <span
    style={props.style}
    data-loader={props.isFailed
      ? "circle-failed"
      : "circle"}
  />
);

export default SpinnerLoading
