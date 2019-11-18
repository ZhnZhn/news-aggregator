import React, { Component } from 'react'

import DateUtil from '../../utils/dt'
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

const _initFromDate = DateUtil.getFromDate(1)
, _initToDate = DateUtil.getToDate()
, _onTestDate = DateUtil.isValidDate
, _sortByOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
]
, DF_SORT_BY = _sortByOptions[2];

@Decors.withDecors
class StackSearchDialog extends Component {
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
    , _tagged = this.inputTagged.getValue()
    , _inTitle = this.inputInTitle.getValue()
    , fromDate = this.fromDate.getValue()
    , toDate = this.toDate.getValue()
    , _fromDate = DateUtil.toUTCSecond(fromDate)
    , _toDate = DateUtil.toUTCSecond(toDate);

    onLoad({
      type,
      source,
      itemConf,
      loadId: 'SO',
      requestType: 'SEARCH',
      tagged: _tagged,
      inTitle: _inTitle,
      sortBy: this.sortBy,
      fromDate: _fromDate,
      toDate: _toDate
    })
  }
  
  _refDialogComp = comp => this.dialogComp = comp
  _refInputTagged = comp => this.inputTagged = comp
  _refInputInTitle = comp => this.inputInTitle = comp
  _refFromDate = comp => this.fromDate = comp
  _refToDate = comp => this.toDate = comp

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
           caption="Search Questions"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <A.TextField
           rootStyle={TS.INPUT_ROOT}
           ref={this._refInputTagged}
           caption="Tagged (Default: CSS)"
           initValue="CSS"
         />
         <A.TextField
           rootStyle={TS.INPUT_ROOT}
           ref={this._refInputInTitle}
           caption="In Title (Default: flexbox)"
           initValue="flexbox"
         />
         <A.InputSelect
           caption="SortBy"
           initItem={DF_SORT_BY}
           options={_sortByOptions}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />
        <A.TextField
          rootStyle={TS.INPUT_ROOT}
          ref={this._refFromDate}
          caption="From Date"
          initValue={_initFromDate}
          errorMsg="YYYY-MM-DD format must be"
          onTest={_onTestDate}
        />
        <A.TextField
          rootStyle={TS.INPUT_ROOT}
          ref={this._refToDate}
          caption="To Date"
          initValue={_initToDate}
          errorMsg="YYYY-MM-DD format must be"
          onTest={_onTestDate}
        />

        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.StackOverflow />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(StackSearchDialog)
