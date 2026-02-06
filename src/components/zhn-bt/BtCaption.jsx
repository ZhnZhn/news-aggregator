import { HAS_TOUCH_EVENTS } from '../has';

const S_KEY = { textDecoration: 'underline' };

const _crCaptionToken = (
  caption,
  keyIndex
) => [
  caption.substring(0, keyIndex),
  caption.substring(keyIndex, keyIndex+1),
  caption.substring(keyIndex+1)
];

const CaptionToken = (props) => {
  const [
    _before,
    _key,
    _after
  ] = _crCaptionToken(
    props.caption,
    props.keyIndex
  );
  return (
    <>
     <span>{_before}</span>
     <span style={S_KEY}>{_key}</span>
     <span>{_after}</span>
    </>
  );
};

const _findKeyIndex = (
  caption,
  accessKey
) => accessKey && caption
  ?  caption
      .toUpperCase()
      .indexOf(accessKey)
  : -1;


const BtCaption = (props) => {
  const _keyIndex = _findKeyIndex(props.caption, props.hotKey)
  , _caption = HAS_TOUCH_EVENTS || _keyIndex === -1
       ? props.caption || ''
       : <CaptionToken caption={props.caption} keyIndex={_keyIndex} />;
  return (
    <span
       className={props.className}
       style={props.style}
    >
      {_caption}
      {props.children}
    </span>
  );
};

export default BtCaption
