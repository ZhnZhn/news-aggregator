import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'


import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import TextField from '../zhn-m-input/TextField'
import InputSelect from '../zhn-m-input/InputSelect'
import PoweredBy from '../links/PoweredBy'
import Link from '../links/Links'
import RaisedButton from '../zhn-atoms/RaisedButton'

import withKeyDown from './decorators/withKeyDown'

const S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
};


const DF_SORT_BY = { caption: "20 News", value: "20" };
const _sortByOptions = [
  { caption: "10 News", value: "10" },
  { caption: "20 News", value: "20"},
  { caption: "30 News", value: "30" },
  { caption: "40 News", value: "40" },
  { caption: "50 News", value: "50" }
];

@withKeyDown
class IexNewsDialog extends Component {
  constructor(props){
    super()
    this.sortBy = DF_SORT_BY.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectSortBy = (option) => {
    this.recent = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _symbol = this.inputSymbol.getValue()

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
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
  }

  render(){
    const { isShow, theme, onShow } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);

    return (
      <DraggableDialog
           ref={comp => this.dialogComp = comp}
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="IEX Stock News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <TextField
           rootStyle={TS.INPUT_ROOT}
           ref={comp => this.inputSymbol = comp}
           caption="Stock Symbol (Default: AAPL)"
           initValue="AAPL"
         />
         <InputSelect
           caption="Recent"
           initItem={DF_SORT_BY}
           options={_sortByOptions}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />

        <PoweredBy rootStyle={S.POWERED_BY}>
          <Link.IexApi />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(IexNewsDialog)
