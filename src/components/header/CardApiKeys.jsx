import {
  ALPHA_VANTAGE,
  IEX_CLOUD,
  FMP,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO
} from '../../conf/ProviderNames';

import {
  useRef,
  useCallback
} from '../uiApi';

import getFnByPropName from '../../utils/getFnByPropName';

import ScrollPane from '../zhn-atoms/ScrollPane';
import OpenClose from '../zhn-atoms/OpenClose';
import PasswordField from '../zhn-m-input/PasswordField';
import RaisedButton from '../zhn-bt/RaisedButton';

const S_OPEN_CLOSE = {
  lineHeight: 2.2
};

const _hasLengthOrEmpty = (
  length
) => (str) => str.length === length || str === ''
, SET_AV_KEY = 'setAvKey'
, SET_IEX_KEY = 'setIexKey'
, SET_FMP_KEY = 'setFmpKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_THE_NEWS_KEY = 'setTheNewsKey'
, SET_WEBZ_KEY = 'setWebzKey'
, _getKeySetters = (data) => ({
   setAv: getFnByPropName(data, SET_AV_KEY),
   setIex: getFnByPropName(data, SET_IEX_KEY),
   setFmp: getFnByPropName(data, SET_FMP_KEY),
   setNews: getFnByPropName(data, SET_NEWS_KEY),
   setTheNews: getFnByPropName(data, SET_THE_NEWS_KEY),
   setWebz: getFnByPropName(data, SET_WEBZ_KEY)
});

const _isVisible = ({
  isSelected,
  isShow
}) => isShow && isSelected;

const _getRefCompValue = ref => ref.current.getValue();
const _clearInputRefs = refs => refs
  .forEach(ref => ref.current.clear());
const _setWasEnterRefs = refs => refs
  .forEach(ref => ref.current.setWasEnter());

const _crCaption = (
  name,
  maxLength
) => {
  const _tokenKey = name
   .toUpperCase()
   .indexOf('API') === -1
     ? 'API Key'
     : 'Key';
  return `${name} ${_tokenKey} (${maxLength})`;
};

const _crPasswordFieldProps = (
  name,
  maxLength
) => ({
  caption: _crCaption(name, maxLength),
  maxLength,
  onTest: _hasLengthOrEmpty(maxLength)
});

const CardApiKeys = (props) => {
  const _refInputAv = useRef()
  , _refInputIex = useRef()
  , _refInputFmp = useRef()
  , _refInputNews = useRef()
  , _refInputTheNews = useRef()
  , _refInputWebz = useRef()
  , {
    style,
    fieldStyle,
    buttonsStyle,
    TS,
    data
  } = props
  , {
    setAv,
    setIex,
    setFmp,
    setNews,
    setTheNews,
    setWebz
  } = _getKeySetters(data)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClearAll = useCallback(() => {
      setAv('')
      setIex('')
      setFmp('')
      setNews('')
      setTheNews('')
      setWebz('')
      _clearInputRefs([
         _refInputAv,
         _refInputIex,
         _refInputFmp,
         _refInputNews,
         _refInputTheNews,
         _refInputWebz
      ])
  }, [])
  //setAv, setIex, setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSetAll = useCallback(() => {
      setIex(_getRefCompValue(_refInputIex))
      setFmp(_getRefCompValue(_refInputFmp))
      setAv(_getRefCompValue(_refInputAv))
      setNews(_getRefCompValue(_refInputNews))
      setTheNews(_getRefCompValue(_refInputTheNews))
      setWebz(_getRefCompValue(_refInputWebz))
      _setWasEnterRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebz])
  }, []);
  //setIex, setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */

  if (!_isVisible(props)) {
    return null;
  }
  return(
    <ScrollPane style={style}>
        <OpenClose
          style={{...TS.OPEN_CLOSE, ...S_OPEN_CLOSE}}
          caption="Market News & Sentiment"
        >
          <PasswordField
             {..._crPasswordFieldProps(ALPHA_VANTAGE, 16)}
             ref={_refInputAv}
             style={fieldStyle}
             name="alpha-vantage"
             onEnter={setAv}
          />
        </OpenClose>
        <OpenClose
          style={{...TS.OPEN_CLOSE, ...S_OPEN_CLOSE}}
          caption="Stock Market"
        >
          <PasswordField
             {..._crPasswordFieldProps(IEX_CLOUD, 35)}
             ref={_refInputIex}
             style={fieldStyle}
             name="iex-cloud"
             onEnter={setIex}
          />
          <PasswordField
             {..._crPasswordFieldProps(FMP, 32)}
             ref={_refInputFmp}
             style={fieldStyle}
             name="fmp-api"
             onEnter={setFmp}
          />
      </OpenClose>
      <OpenClose
         style={{...TS.OPEN_CLOSE, ...S_OPEN_CLOSE}}
         caption="General News"
      >
        <PasswordField
           {..._crPasswordFieldProps(NEWS_API_LONG, 32)}
           ref={_refInputNews}
           style={fieldStyle}
           name="newsapi.org"
           onEnter={setNews}
        />
        <PasswordField
           {..._crPasswordFieldProps(THE_NEWS_API, 40)}
           ref={_refInputTheNews}
           style={fieldStyle}
           name="thenewsapi"
           onEnter={setTheNews}
        />
        <PasswordField
           {..._crPasswordFieldProps(WEBZ_IO, 36)}
           ref={_refInputWebz}
           style={fieldStyle}
           name="webz.io"
           onEnter={setWebz}
        />
      </OpenClose>
      <div style={buttonsStyle}>
        <RaisedButton
          style={TS.BT.RAISED}
          clDiv={TS.BT.CL_RAISED_DIV}
          caption="Clear All"
          onClick={_hClearAll}
        />
        <RaisedButton
          style={TS.BT.RAISED}
          clDiv={TS.BT.CL_RAISED_DIV}
          isPrimary={true}
          caption="Set All"
          onClick={_hSetAll}
        />
      </div>
    </ScrollPane>
  );
}

export default CardApiKeys
