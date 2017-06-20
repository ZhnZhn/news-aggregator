import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DateUtil from '../../utils/dt'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import RowInputText from './RowInputText'
import RowInputSelect from './RowInputSelect'
import PoweredBy from '../links/PoweredBy'
import { LinkStackOverflow } from '../links/Links'
import RaisedButton from '../zhn-atoms/RaisedButton'
import DatesFragment from './DatesFragment'

const S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
}

const _initFromDate = DateUtil.getFromDate(1)
    , _initToDate = DateUtil.getToDate()
    , _onTestDate = DateUtil.isValidDate

const _sortByOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Hot Tab", value: "hot" },
  { caption: "Hot Week Tab", value: "week" },
  { caption: "Hot Month Tab", value: "month" }
];


class StackTaggedDialog extends Component {
  constructor(props){
    super()
    this.siteType = undefined
  }

  _regInput = (propName, inputComp) => {
    this[propName] = inputComp
  }

  _selectSortBy = (option) => {
    this.sortBy = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _tag = this.inputTag.getValue()
        , { fromDate, toDate } = this.datesFragment.getValues()
        , _fromDate = DateUtil.toUTCMillis(fromDate)/1000
        , _toDate = DateUtil.toUTCMillis(toDate)/1000;

    onLoad({
      type,
      source,
      itemConf,
      loadId: 'SO',
      requestType: 'TAG',
      tag: _tag,
      sortBy: this.sortBy,
      fromDate: _fromDate,
      toDate: _toDate
    })
  }

  _handleClose = () => {
    this.props.onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
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
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="Tagged Questions"
           isShow={isShow}
           commandButtons={_commandButtons}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <RowInputText
          accessKey="t"
          caption="Tag:"
          placeholder="Default: css"
          spellCheck={true}
          autoCorrect="on"
          autoComplete="on"
          onReg={this._regInput.bind(null, 'inputTag')}
        />
        <RowInputSelect
          accessKey="s"
          caption="SortBy:"
          placeholder="Default: Hot Week Tab"
          options={_sortByOptions}
          onSelect={this._selectSortBy}
        />
        <DatesFragment
           ref={c => this.datesFragment = c}
           initFromDate={_initFromDate}
           initToDate={_initToDate}
           onTestDate={_onTestDate}
        />
        <PoweredBy rootStyle={S.POWERED_BY}>
          <LinkStackOverflow />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(StackTaggedDialog)
