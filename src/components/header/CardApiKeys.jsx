import React, { useRef, useCallback } from 'react'

import safeFn from '../../utils/safeFn'

import A from '../Comp'

const STR_EMPTY = ''
, _onTestLengthOrEmpty = (length) =>
   (str) => str.length === length || str === STR_EMPTY
     ? true
     : false
, _onTestIexApi = _onTestLengthOrEmpty(35)
, _onTestNewsApi = _onTestLengthOrEmpty(32)
, _onTestWebhose = _onTestLengthOrEmpty(36)
, SET_IEX_KEY = 'setIexKey'
, SET_NEWS_KEY = 'setNewsKey'
, SET_WEBHOSE_KEY = 'setWebhoseKey'
, _getKeySetters = (data) => ({
 setIexKey: safeFn(data, SET_IEX_KEY),
 setNewsKey: safeFn(data, SET_NEWS_KEY),
 setWebhoseKey: safeFn(data, SET_WEBHOSE_KEY)
});

const CardApiKeys = (props) => {
  const _refInputIex = useRef()
  , _refInputNews = useRef()
  , _refInputWebhose = useRef()
  , {
    style, fieldStyle, buttonsStyle, TS,
    data, onClose    
  } = props
  , { setIexKey,
      setNewsKey,
      setWebhoseKey
  } = _getKeySetters(data)
  , _hSetAllAndClose = useCallback(() => {
      setIexKey(_refInputIex.current.getValue())
      setNewsKey(_refInputNews.current.getValue())
      setWebhoseKey(_refInputWebhose.current.getValue())
      onClose()
  });

  return(
      <div style={style}>
        <form>
          <A.SecretField
             ref={_refInputIex}
             rootStyle={fieldStyle}
             name="iex-cloud"
             caption="IEX Cloud API Key (35 Symbols)"
             maxLength={35}
             errorMsg="35 symbols must be"
             onTest={_onTestIexApi}
             onEnter={setIexKey}
          />
        </form>
        <form>
          <A.SecretField
             ref={_refInputNews}
             rootStyle={fieldStyle}
             name="newsapi"
             caption="NewsApi API Key (32 Symbols)"
             maxLength={32}
             errorMsg="32 symbols must be"
             onTest={_onTestNewsApi}
             onEnter={setNewsKey}
          />
        </form>
        <form>
          <A.SecretField
             ref={_refInputWebhose}
             rootStyle={fieldStyle}
             name="webhose"
             caption="Webhose API Key (36 Symbols)"
             maxLength={36}
             errorMsg="36 symbols must be"
             onTest={_onTestWebhose}
             onEnter={setWebhoseKey}
          />
        </form>
        <div style={buttonsStyle}>
          <A.RaisedButton
            rootStyle={TS.BT.RAISED_ROOT}
            clDiv={TS.BT.CL_RAISED_DIV}
            caption="Set All & Close"
            onClick={_hSetAllAndClose}
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
