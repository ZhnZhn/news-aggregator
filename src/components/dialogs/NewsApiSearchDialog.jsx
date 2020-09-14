import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const SORT_BY_OPTIONS = [
  { caption: "Relevancy", value: "relevancy" },
  { caption: "Popularity", value: "popularity"},
  { caption: "PublishedAt", value: "publishedAt" }
]
, DF_SORT_BY = SORT_BY_OPTIONS[0]
, DF_TERM = "Weather";


@Decors.withDecors
class NewsApiSearchDialog extends Component {
  constructor(props){
    super(props)
    this.sortBy = DF_SORT_BY.value
    this._initWithDecors(this)
  }

  _selectSortBy = (option) => {
    this.sortBy = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
    , _symbol = this.inputSymbol.getValue() || DF_TERM;

    onLoad({
      type, source, itemConf,
      loadId: 'NS',
      symbol: _symbol,
      sortBy: this.sortBy
    })
    this._handleClose()
  }

  _refDialogComp = comp => this.dialogComp = comp
  _refInputSymbol = comp => this.inputSymbol = comp

  render(){
    const { isShow, theme, onShow } = this.props
    , TS = theme.createStyle(styleConfig)
    , _commandButtons = this._createCommandButtons(TS.BT)
    , _termCaption = `Term (Default: ${DF_TERM})`;
    return (
      <A.DraggableDialog
           ref={this._refDialogComp}
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
         <A.TextField
           style={TS.INPUT_ROOT}
           ref={this._refInputSymbol}
           caption={_termCaption}
           initValue={DF_TERM}
           onEnter={this._handleLoad}
         />
         <A.InputSelect
           caption="SortBy"
           initItem={DF_SORT_BY}
           options={SORT_BY_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />
        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.NewsApi />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(NewsApiSearchDialog)
