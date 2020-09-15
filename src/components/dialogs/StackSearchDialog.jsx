import React, { Component } from 'react'

import DateUtil from '../../utils/dt'
import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const DATE_ERR_MSG = "YYYY-MM-DD";

const INITIAL_FROM_DATE = DateUtil.getFromDate(1)
, INITIAL_TO_DATE = DateUtil.getToDate()
, _onTestDate = DateUtil.isValidDate
, SORT_BY_OPTIONS = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
]
, DF_SORT_BY = SORT_BY_OPTIONS[2];

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
    this._handleClose()
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
           style={TS.INPUT_ROOT}
           ref={this._refInputTagged}
           caption="Tagged (Default: CSS)"
           initValue="CSS"
         />
         <A.TextField
           style={TS.INPUT_ROOT}
           ref={this._refInputInTitle}
           caption="In Title (Default: flexbox)"
           initValue="flexbox"
         />
         <A.InputSelect
           caption="SortBy"
           initItem={DF_SORT_BY}
           options={SORT_BY_OPTIONS}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />
         <div>
            <A.TextField
              ref={this._refFromDate}
              caption="From Date"
              hasClear={false}
              style={TS.INPUT_DATE}
              initValue={INITIAL_FROM_DATE}
              errorMsg={DATE_ERR_MSG}
              onTest={_onTestDate}
            />
            <A.TextField
              ref={this._refToDate}
              caption="To Date"
              hasClear={false}
              style={TS.INPUT_DATE}
              initValue={INITIAL_TO_DATE}
              errorMsg={DATE_ERR_MSG}
              onTest={_onTestDate}
            />
        </div>

        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.StackOverflow />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(StackSearchDialog)
