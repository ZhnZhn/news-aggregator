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

const _sortByOptions = [
  { caption: "Relevancy", value: "relevancy" },
  { caption: "Popularity", value: "popularity"},
  { caption: "PublishedAt", value: "publishedAt" }
];
const DF_SORT_BY = _sortByOptions[0];

@withKeyDown
class NewsApiSearchDialog extends Component {
  constructor(props){
    super()
    this.sortBy = DF_SORT_BY.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectSortBy = (option) => {
    this.sortBy = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _symbol = this.inputSymbol.getValue()

    onLoad({
      type, source, itemConf,
      loadId: 'NS',
      symbol: _symbol,
      sortBy: this.sortBy
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
           caption="NewsApi Search"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <TextField
           rootStyle={TS.INPUT_ROOT}
           ref={comp => this.inputSymbol = comp}
           caption="Term (Default: Weather)"
           initValue="Weather"
         />
         <InputSelect
           caption="SortBy"
           initItem={DF_SORT_BY}
           options={_sortByOptions}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />
        <PoweredBy rootStyle={S.POWERED_BY}>
          <Link.NewsApi />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(NewsApiSearchDialog)
