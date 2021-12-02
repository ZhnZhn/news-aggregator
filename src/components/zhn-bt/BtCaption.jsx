import has from '../has';

const { HAS_TOUCH } = has
, S_KEY = { textDecoration: 'underline' };

const _crCaptionToken = (caption, keyIndex) => [
  caption.substring(0, keyIndex),
  caption.substring(keyIndex, keyIndex+1),
  caption.substring(keyIndex+1)
];

const CaptionToken = ({ caption, keyIndex }) => {
  const [
    _before, _key, _after
  ] = _crCaptionToken(caption, keyIndex);
  return (
    <>
     <span>{_before}</span>
     <span style={S_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const _findKeyIndex = (caption, accessKey) =>
  accessKey && caption
    ?  caption
        .toLowerCase()
        .indexOf(accessKey)
    : -1;


const BtCaption = ({
  className,
  style,
  caption,
  accessKey,
  children
}) => {
  const _keyIndex = _findKeyIndex(caption, accessKey)
  , _caption = HAS_TOUCH || _keyIndex === -1
       ? caption || ''
       : <CaptionToken caption={caption} keyIndex={_keyIndex} />;
  return (
    <span className={className} style={style}>
      {_caption}
      {children}
    </span>
  );
};

export default BtCaption
