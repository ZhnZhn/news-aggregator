import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const DF_SYMBOL = "AAPL";

@Decors.withDecors
class FmpNewsDialog extends Component {
  constructor(props){
    super(props)
    this._initWithDecors(this)
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
    , _symbol = this.inputSymbol.getValue();

    onLoad({
      type, source, itemConf,
      loadId: 'FMP',
      symbol: _symbol,
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
           caption="FMP: Stock News"
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
        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.FmpApi />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(FmpNewsDialog)
