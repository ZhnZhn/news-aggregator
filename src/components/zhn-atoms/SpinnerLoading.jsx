import React from 'react'

const SpinnerLoading = ({ style, isFailed }) => {
  const _dataLoader = (isFailed)
            ? "circle-failed"
            : "circle";
  return (
    <span style={style} data-loader={_dataLoader}>
    </span>
  );
};


export default SpinnerLoading
