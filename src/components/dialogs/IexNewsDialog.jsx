import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'

import withKeyDown from './decorators/withKeyDown'

const S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const RECENT_OPTIONS = [
  { caption: "10 News", value: "10" },
  { caption: "20 News", value: "20" },
  { caption: "30 News", value: "30" },
  { caption: "40 News", value: "40" },
  { caption: "50 News", value: "50" }
];
const DF_RECENT = RECENT_OPTIONS[1];

@withKeyDown
class IexNewsDialog extends Component {
  constructor(props){
    super(props)
    this.sortBy = DF_RECENT.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectRecent = (option) => {
    this.recent = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _symbol = this.inputSymbol.getValue();

    onLoad({
      type, source, itemConf,
      loadId: 'IEX',
      symbol: _symbol,
      recent: this.recent
    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <A.RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
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
           rootStyle={TS.INPUT_ROOT}
           caption="Stock Symbol (Default: AAPL)"
           initValue="AAPL"
         />
         <A.InputSelect
           caption="Recent"
           initItem={DF_RECENT}
           options={RECENT_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectRecent}
         />
        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.IexApi />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(IexNewsDialog)
