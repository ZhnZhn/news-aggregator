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
}

const DF_SITY_TYPE = {
  caption: 'News', value: 'news'
};

const options = [
  { caption: 'News', value: 'news'},
  { caption: 'Blogs', value: 'blogs'}
];

const _onTestDaysBefore = (value) => {
  const _n = parseInt(value, 10)
  if ((!Number.isNaN(_n) && _n>0 && _n<31) || value === '') {
    return true;
  } else {
    return false;
  }
}

@withKeyDown
class WebhoseQueryDialog extends Component {
  constructor(props){
    super()
    this.siteType = undefined
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectSiteType = (option) => {
    this.siteType = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf={}, onLoad } = this.props
        , { requestType, loadId } = itemConf
        , _inTitle = this.inputTitle.getValue()
        , _beforeDays = this.inputBeforeDays.getValue();
    onLoad({
      type,
      source,
      requestType,
      itemConf,
      loadId,
      inTitle: _inTitle,
      siteType: this.siteType,
      beforeDays: _beforeDays
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

  _refDialoComp = comp => this.dialogComp = comp
  _refInputTitle = comp => this.inputTitle = comp
  _refInputBeforeDays = comp => this.inputBeforeDays = comp

  render(){
    const { isShow, theme, onShow } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);

    return (
      <DraggableDialog
           ref={this._refDialoComp}
           rootStyle={TS.R_DIALOG}
           browserCaptionStyle={TS.BROWSER_CAPTION}
           styleButton={TS.BT}
           caption="Webhose: News, Blogs"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <TextField
          rootStyle={TS.INPUT_ROOT}
          ref={this._refInputTitle}
          caption="In Title (Default: Weather)"
          initValue="Weather"
        />
        <InputSelect
          caption="Site Type"
          initItem={DF_SITY_TYPE}
          options={options}
          styleConfig={TS.SELECT}
          onSelect={this._selectSiteType}
        />
        <TextField
          rootStyle={TS.INPUT_ROOT}
          ref={this._refInputBeforeDays}
          caption="Before Days (Default: 2, Max 30)"
          initValue={2}
          errorMsg="0<n<31 value must be"
          onTest={_onTestDaysBefore}
        />

        <PoweredBy rootStyle={S.POWERED_BY}>
          <Link.WebhoseIo />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(WebhoseQueryDialog)
