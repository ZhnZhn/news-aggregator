import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DateUtil from '../../utils/dt'

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

const _initFromDate = DateUtil.getFromDate(1)
    , _initToDate = DateUtil.getToDate()
    , _onTestDate = DateUtil.isValidDate;

const DF_SORT_BY = { caption: "Score", value: "votes" };
const _sortByOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Relevance", value: "relevance" }
];

@withKeyDown
class StackSearchDialog extends Component {
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
        , _tagged = this.inputTagged.getValue()
        , _inTitle = this.inputInTitle.getValue()
        , fromDate = this.fromDate.getValue()
        , toDate = this.toDate.getValue()
        , _fromDate = DateUtil.toUTCMillis(fromDate)/1000
        , _toDate = DateUtil.toUTCMillis(toDate)/1000;

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
           caption="Search Questions"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <TextField
           rootStyle={TS.INPUT_ROOT}
           ref={comp => this.inputTagged = comp}
           caption="Tagged (Default: CSS)"
           initValue="CSS"
         />
         <TextField
           rootStyle={TS.INPUT_ROOT}
           ref={comp => this.inputInTitle = comp}
           caption="In Title (Default: flexbox)"
           initValue="flexbox"
         />
         <InputSelect
           caption="SortBy"
           initItem={DF_SORT_BY}
           options={_sortByOptions}
           styleConfig={TS.SELECT}
           onSelect={this._selectSortBy}
         />
        <TextField
          rootStyle={TS.INPUT_ROOT}
          ref={comp => this.fromDate = comp}
          caption="From Date"
          initValue={_initFromDate}
          errorMsg="YYYY-MM-DD format must be"
          onTest={_onTestDate}
        />
        <TextField
          rootStyle={TS.INPUT_ROOT}
          ref={comp => this.toDate = comp}
          caption="To Date"
          initValue={_initToDate}
          errorMsg="YYYY-MM-DD format must be"
          onTest={_onTestDate}
        />

        <PoweredBy rootStyle={S.POWERED_BY}>
          <Link.StackOverflow />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(StackSearchDialog)
