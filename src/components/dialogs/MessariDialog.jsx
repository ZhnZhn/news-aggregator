
import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const NEWS_FOR_OPTIONS = [
{caption: "All", value: "all"},
{caption: "Bitcoin", value: "BTC"},
{caption: "Ethereum", value: "ETH"},
{caption: "Tether", value: "USDT"},
{caption: "XRP", value: "XRP"},
{caption: "Bitcoin-Cash", value: "BCH"},
{ caption: "Chainlink", value: "LINK"},
{ caption: "Cardano", value: "ADA"},
{ caption: "Bitcoin-SV", value: "BSV"},
{ caption: "Litecoin", value: "LTC"},
{ caption: "Binance-Coin", value: "BNB"},
{ caption: "Crypto-Com-Chain", value: "CRO"},
{ caption: "Tezos", value: "XTZ"},
{ caption: "EOS", value: "EOS"},
{ caption: "Stellar", value: "XLM"},
{ caption: "Monero", value: "XMR"},
{ caption: "Tron", value: "TRX"},
{ caption: "Unus-Sed-Leo", value: "LEO"},
{ caption: "USD-Coin", value: "USDC"},
{ caption: "Vechain", value: "VET"},
{ caption: "Cosmos", value: "ATOM"}
]
, DF_RECENT = NEWS_FOR_OPTIONS[0]



@Decors.withDecors
class MessariDialog extends Component {
  constructor(props){
    super(props)
    this._initWithDecors(this)
  }

  _selectNewsAbout = (option) => {
    this.assetKey = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props

    onLoad({
      type, source, itemConf,
      loadId: 'MS',
      assetKey: this.assetKey
    })
  }

  _refDialogComp = comp => this.dialogComp = comp


  render(){
    const { isShow, theme, onShow } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);

    return (
      <A.DraggableDialog
           ref={this._refDialogComp}
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="Messari: Blockchain News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >

         <A.InputSelect
           caption="News about"
           initItem={DF_RECENT}
           options={NEWS_FOR_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectNewsAbout}
         />
        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.Messari />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(MessariDialog)
