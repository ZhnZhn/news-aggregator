import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const RECENT_OPTIONS = [
  { caption: "10 News", value: "10" },
  { caption: "20 News", value: "20" },
  { caption: "30 News", value: "30" },
  { caption: "40 News", value: "40" },
  { caption: "50 News", value: "50" }
]
, DF_RECENT = RECENT_OPTIONS[1]
, DF_SYMBOL = "AAPL";


@Decors.withDecors
class IexNewsDialog extends Component {
  constructor(props){
    super(props)
    this.sortBy = DF_RECENT.value
    this._initWithDecors(this)
  }

  _selectRecent = (option) => {
    this.recent = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
    , _symbol = this.inputSymbol.getValue() || DF_SYMBOL;

    onLoad({
      type, source, itemConf,
      loadId: 'IEX',
      symbol: _symbol,
      recent: this.recent
    })
    this._handleClose()
  }

  _refDialogComp = comp => this.dialogComp = comp
  _refInputSymbol = comp => this.inputSymbol = comp

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
           caption="IEX Cloud: Stock News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <A.TextField
           ref={this._refInputSymbol}
           style={TS.INPUT_ROOT}
           maxLength="10"
           caption="Stock Symbol"
           initValue={DF_SYMBOL}
           autoCapitalize="on"
           onEnter={this._handleLoad}
         />
         <A.InputSelect
           caption="Recent"
           initItem={DF_RECENT}
           options={RECENT_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectRecent}
         />
        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.IexApi />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(IexNewsDialog)
