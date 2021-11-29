import { useRef, useCallback } from 'react';

import safeFn from '../../utils/safeFn';

import A from '../Comp';

const STR_EMPTY = ''
, _hasLengthOrEmpty = (length) =>
   (str) => str.length === length || str === STR_EMPTY
     ? true
     : false
, _onTestIex = _hasLengthOrEmpty(35)
, _onTestFmp = _hasLengthOrEmpty(32)
, _onTestNews = _hasLengthOrEmpty(32)
, _onTestWebz = _hasLengthOrEmpty(36)
, SET_IEX_KEY = 'setIexKey'
, SET_FMP_KEY = 'setFmpKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_WEBZ_KEY = 'setWebzKey'
, _getKeySetters = (data) => ({
 setIex: safeFn(data, SET_IEX_KEY),
 setFmp: safeFn(data, SET_FMP_KEY),
 setNews: safeFn(data, SET_NEWS_KEY),
 setWebz: safeFn(data, SET_WEBZ_KEY)
});

const _isVisible = ({ isSelected, isShow }) => isShow
  && isSelected;

const _getRefCompValue = ref => ref.current.getValue();
const _clearInputRefs = refs => refs
  .forEach(ref => ref.current.clear());
const _setWasEnterRefs = refs => refs
  .forEach(ref => ref.current.setWasEnter());

const CardApiKeys = (props) => {
  const _refInputIex = useRef()
  , _refInputFmp = useRef()
  , _refInputNews = useRef()
  , _refInputWebz = useRef()
  , {
    style, fieldStyle, buttonsStyle, TS,
    data, onClose
  } = props
  , { setIex,
      setFmp,
      setNews,
      setWebz
  } = _getKeySetters(data)
  , _hClearAll = useCallback(() => {
      setIex('')
      setFmp('')
      setNews('')
      setWebz('')
      _clearInputRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebz])
  }, [])
  , _hSetAll = useCallback(() => {
      setIex(_getRefCompValue(_refInputIex))
      setFmp(_getRefCompValue(_refInputFmp))
      setNews(_getRefCompValue(_refInputNews))
      setWebz(_getRefCompValue(_refInputWebz))
      _setWasEnterRefs([_refInputIex, _refInputFmp, _refInputNews, _refInputWebz])
  }, []);

  if (!_isVisible(props)) {
    return null;
  }
  return(
      <div style={style}>
          <form>
            <A.PasswordField
               ref={_refInputIex}
               style={fieldStyle}
               name="iex-cloud"
               caption="IEX Cloud API Key (35 Symbols)"
               maxLength={35}
               onTest={_onTestIex}
               onEnter={setIex}
            />
          </form>
          <form>
          <A.PasswordField
             ref={_refInputFmp}
             style={fieldStyle}
             name="fmp-api"
             caption="FMP API Key (32 Symbols)"
             maxLength={32}
             onTest={_onTestFmp}
             onEnter={setFmp}
          />
        </form>
        <form>
          <A.PasswordField
             ref={_refInputNews}
             style={fieldStyle}
             name="newsapi"
             caption="NewsApi API Key (32 Symbols)"
             maxLength={32}
             onTest={_onTestNews}
             onEnter={setNews}
          />
        </form>
        <form>
          <A.PasswordField
             ref={_refInputWebz}
             style={fieldStyle}
             name="webz.io"
             caption="Webz.IO API Key (36 Symbols)"
             maxLength={36}
             onTest={_onTestWebz}
             onEnter={setWebz}
          />
        </form>
        <div style={buttonsStyle}>
          <A.RaisedButton
            style={TS.BT.RAISED}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Clear All"
            onClick={_hClearAll}
          />
          <A.RaisedButton
            style={TS.BT.RAISED}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Set All"
            onClick={_hSetAll}
          />
          <A.RaisedButton
            style={TS.BT.RAISED}
            clDiv={TS.BT.CL_RAISED_DIV}
            isPrimary={true}
            caption="Close"
            onClick={onClose}
          />
        </div>
      </div>
    );
  }


export default CardApiKeys
