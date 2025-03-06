import {
  ALPHA_VANTAGE,
  FMP,
  PLG_IO,
  NEWS_API_LONG,
  THE_NEWS_API,
  WEBZ_IO
} from '../../conf/ProviderNames';

import {
  useRef,
  useCallback
} from '../uiApi';

import getFnByPropName from '../../utils/getFnByPropName';

import ScrollPane from '../zhn/ScrollPane';
import OpenClose from '../zhn/OpenClose';
import PasswordField from '../zhn-m-input/PasswordField';
import RaisedButton from '../zhn-bt/RaisedButton';

const S_OPEN_CLOSE = {
  lineHeight: 2.2
};

const _hasLengthOrEmpty = (
  length
) => (str) => str.length === length || str === ''
, SET_AV_KEY = 'setAvKey'
, SET_FMP_KEY = 'setFmpKey'
, SET_PLG_KEY = 'setPlgKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_THE_NEWS_KEY = 'setTheNewsKey'
, SET_WEBZ_KEY = 'setWebzKey'
, _getKeySetters = (data) => ({
   setAv: getFnByPropName(data, SET_AV_KEY),
   setFmp: getFnByPropName(data, SET_FMP_KEY),
   setPlg: getFnByPropName(data, SET_PLG_KEY),
   setNews: getFnByPropName(data, SET_NEWS_KEY),
   setTheNews: getFnByPropName(data, SET_THE_NEWS_KEY),
   setWebz: getFnByPropName(data, SET_WEBZ_KEY)
});

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
  , _refInputFmp = useRef()
  , _refInputPlg = useRef()
  , _refInputNews = useRef()
  , _refInputTheNews = useRef()
  , _refInputWebz = useRef()
  , {
    isVisible,
    setRefLast,
    style,
    fieldStyle,
    buttonsStyle,
    btStyle,
    data
  } = props
  , {
    setAv,
    setFmp,
    setPlg,
    setNews,
    setTheNews,
    setWebz
  } = _getKeySetters(data)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClearAll = useCallback(() => {
      setAv('')
      setFmp('')
      setPlg('')
      setNews('')
      setTheNews('')
      setWebz('')
      _clearInputRefs([
         _refInputAv,
         _refInputFmp,
         _refInputPlg,
         _refInputNews,
         _refInputTheNews,
         _refInputWebz
      ])
  }, [])
  //setAv, setFmp, setPlg, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSetAll = useCallback(() => {
      setFmp(_getRefCompValue(_refInputFmp))
      setPlg(_getRefCompValue(_refInputPlg))
      setAv(_getRefCompValue(_refInputAv))
      setNews(_getRefCompValue(_refInputNews))
      setTheNews(_getRefCompValue(_refInputTheNews))
      setWebz(_getRefCompValue(_refInputWebz))
      _setWasEnterRefs([_refInputFmp, _refInputNews, _refInputWebz])
  }, []);
  //setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */


  return isVisible ? (
    <ScrollPane style={style}>
        <OpenClose
          style={S_OPEN_CLOSE}
          caption="Market News & Sentiment"
        >
          <PasswordField
             {..._crPasswordFieldProps(ALPHA_VANTAGE, 16)}
             refEl={_refInputAv}
             style={fieldStyle}
             name="alpha-vantage"
             onEnter={setAv}
          />
        </OpenClose>
        <OpenClose
          style={S_OPEN_CLOSE}
          caption="Stock Market"
        >
          <PasswordField
             {..._crPasswordFieldProps(FMP, 32)}
             refEl={_refInputFmp}
             style={fieldStyle}
             name="fmp-api"
             onEnter={setFmp}
          />
          <PasswordField
             {..._crPasswordFieldProps(PLG_IO, 32)}
             refEl={_refInputPlg}
             style={fieldStyle}
             name="plg-io-api"
             onEnter={setPlg}
          />
      </OpenClose>
      <OpenClose
         style={S_OPEN_CLOSE}
         caption="General News"
      >
        <PasswordField
           {..._crPasswordFieldProps(NEWS_API_LONG, 32)}
           refEl={_refInputNews}
           style={fieldStyle}
           name="newsapi.org"
           onEnter={setNews}
        />
        <PasswordField
           {..._crPasswordFieldProps(THE_NEWS_API, 40)}
           refEl={_refInputTheNews}
           style={fieldStyle}
           name="thenewsapi"
           onEnter={setTheNews}
        />
        <PasswordField
           {..._crPasswordFieldProps(WEBZ_IO, 36)}
           refEl={_refInputWebz}
           style={fieldStyle}
           name="webz.io"
           onEnter={setWebz}
        />
      </OpenClose>
      <div style={buttonsStyle}>
        <RaisedButton
          caption="Clear All"
          onClick={_hClearAll}
        />
        <RaisedButton
          isPrimary={true}
          refBt={isVisible ? setRefLast : void 0}
          style={btStyle}
          caption="Set All"
          onClick={_hSetAll}
        />
      </div>
    </ScrollPane>
  ) : null;
}

export default CardApiKeys
