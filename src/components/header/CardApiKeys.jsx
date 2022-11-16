import {
  useRef,
  useCallback
} from '../uiApi';

import safeFn from '../../utils/safeFn';

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
, SET_IEX_KEY = 'setIexKey'
, SET_FMP_KEY = 'setFmpKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_THE_NEWS_KEY = 'setTheNewsKey'
, SET_WEBZ_KEY = 'setWebzKey'
, _getKeySetters = (data) => ({
   setIex: safeFn(data, SET_IEX_KEY),
   setFmp: safeFn(data, SET_FMP_KEY),
   setNews: safeFn(data, SET_NEWS_KEY),
   setTheNews: safeFn(data, SET_THE_NEWS_KEY),
   setWebz: safeFn(data, SET_WEBZ_KEY)
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

const _crPasswordFieldProps = (
  name,
  maxLength
) => ({
  caption: `${name} API Key (${maxLength})`,
  maxLength,
  onTest: _hasLengthOrEmpty(maxLength)
});

const CardApiKeys = (props) => {
  const _refInputIex = useRef()
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
    setIex,
    setFmp,
    setNews,
    setTheNews,
    setWebz
  } = _getKeySetters(data)
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClearAll = useCallback(() => {
      setIex('')
      setFmp('')
      setNews('')
      setTheNews('')
      setWebz('')
      _clearInputRefs([
         _refInputIex,
         _refInputFmp,
         _refInputNews,
         _refInputTheNews,
         _refInputWebz
      ])
  }, [])
  //setIex, setFmp, setNews, setTheNews, setWebz
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hSetAll = useCallback(() => {
      setIex(_getRefCompValue(_refInputIex))
      setFmp(_getRefCompValue(_refInputFmp))
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
          caption="Stock Market"
        >
          <PasswordField
             {..._crPasswordFieldProps('IEX Cloud', 35)}
             ref={_refInputIex}
             style={fieldStyle}
             name="iex-cloud"
             onEnter={setIex}
          />
          <PasswordField
             {..._crPasswordFieldProps('FMP', 32)}
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
           {..._crPasswordFieldProps('NewsApi', 32)}
           ref={_refInputNews}
           style={fieldStyle}
           name="newsapi"
           onEnter={setNews}
        />
        <PasswordField
           {..._crPasswordFieldProps('TheNewsAPI', 40)}
           ref={_refInputTheNews}
           style={fieldStyle}
           name="thenewsapi"
           onEnter={setTheNews}
        />
        <PasswordField
           {..._crPasswordFieldProps('Webz.IO', 36)}
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
