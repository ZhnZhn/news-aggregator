import React from 'react'

const S = {
  KEY: {
    textDecoration: 'underline'
  }
};

const CaptionInput = ({ rootStyle, caption='', accessKey }) => {
  const _index = caption.toLowerCase().indexOf(accessKey)
  if (accessKey && _index !== -1) {
    const _before = caption.substring(0, _index)
        , _key = caption.substring(_index, _index+1)
        , _after = caption.substring(_index+1);
    return (
      <span style={rootStyle}>
         <span>{_before}</span>
         <span style={S.KEY}>{_key}</span>
         <span>{_after}</span>
      </span>
    );
  } else {
    return (
      <span style={rootStyle}>
        {caption}
      </span>
    );
  }
};

export default CaptionInput
