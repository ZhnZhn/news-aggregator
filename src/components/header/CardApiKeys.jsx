import React, { useRef, useCallback } from 'react'

import safeFn from '../../utils/safeFn'

import A from '../Comp'

const STR_EMPTY = ''
, _hasLengthOrEmpty = (length) =>
   (str) => str.length === length || str === STR_EMPTY
     ? true
     : false
, _onTestIex = _hasLengthOrEmpty(35)
, _onTestNews = _hasLengthOrEmpty(32)
, _onTestWebhose = _hasLengthOrEmpty(36)
, SET_IEX_KEY = 'setIexKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_WEBHOSE_KEY = 'setWebhoseKey'
, _getKeySetters = (data) => ({
 setIex: safeFn(data, SET_IEX_KEY),
 setNews: safeFn(data, SET_NEWS_KEY),
 setWebhose: safeFn(data, SET_WEBHOSE_KEY)
});

const _isVisible = ({ isSelected, isShow }) => isShow
  && isSelected;

const CardApiKeys = (props) => {
  if (!_isVisible(props)) {
    return null;
  }

  const _refInputIex = useRef()
  , _refInputNews = useRef()
  , _refInputWebhose = useRef()
  , {
    style, fieldStyle, buttonsStyle, TS,
    data, onClose
  } = props
  , { setIex,
      setNews,
      setWebhose
  } = _getKeySetters(data)
  , _hClearAll = useCallback(() => {
      setIex('')
      setNews('')
      setWebhose('')
      _refInputIex.current.clear()
      _refInputNews.current.clear()
      _refInputWebhose.current.clear()
  }, [])
  , _hSetAll = useCallback(() => {
      setIex(_refInputIex.current.getValue())
      setNews(_refInputNews.current.getValue())
      setWebhose(_refInputWebhose.current.getValue())
      _refInputIex.current.setWasEnter()
      _refInputNews.current.setWasEnter()
      _refInputWebhose.current.setWasEnter()
  }, []);
  return(
      <div style={style}>
        <form>
          <A.PasswordField
             ref={_refInputIex}
             rootStyle={fieldStyle}
             name="iex-cloud"
             caption="IEX Cloud API Key (35 Symbols)"
             maxLength={35}
             //errorMsg="35 symbols must be"
             onTest={_onTestIex}
             onEnter={setIex}
          />
        </form>
        <form>
          <A.PasswordField
             ref={_refInputNews}
             rootStyle={fieldStyle}
             name="newsapi"
             caption="NewsApi API Key (32 Symbols)"
             maxLength={32}
             //errorMsg="32 symbols must be"
             onTest={_onTestNews}
             onEnter={setNews}
          />
        </form>
        <form>
          <A.PasswordField
             ref={_refInputWebhose}
             rootStyle={fieldStyle}
             name="webhose"
             caption="Webhose API Key (36 Symbols)"
             maxLength={36}
             //errorMsg="36 symbols must be"
             onTest={_onTestWebhose}
             onEnter={setWebhose}
          />
        </form>
        <div style={buttonsStyle}>
          <A.RaisedButton
            rootStyle={TS.BT.RAISED_ROOT}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Clear All"
            onClick={_hClearAll}
          />
          <A.RaisedButton
            rootStyle={TS.BT.RAISED_ROOT}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Set All"
            onClick={_hSetAll}
          />
          <A.RaisedButton
            rootStyle={TS.BT.RAISED_ROOT}
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
