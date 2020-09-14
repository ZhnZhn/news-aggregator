import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'
import A from '../Comp'
import Decors from './decorators/Decors'

const SITE_TYPE_OPTIONS = [
  { caption: 'News', value: 'news'},
  { caption: 'Blogs', value: 'blogs'}
]
, DF_SITE_TYPE = SITE_TYPE_OPTIONS[0];

const _onTestDaysBefore = (value) => {
  const _n = parseInt(value, 10);
  if ((!Number.isNaN(_n) && _n>0 && _n<31) || value === '') {
    return true;
  } else {
    return false;
  }
}


@Decors.withDecors
class WebhoseQueryDialog extends Component {
  constructor(props){
    super(props)
    this.siteType = void 0
    this._initWithDecors(this)
  }

  _selectSiteType = (option) => {
    this.siteType = (option)
       ? option.value
       : void 0
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
    this._handleClose()
  }

  _refDialoComp = comp => this.dialogComp = comp
  _refInputTitle = comp => this.inputTitle = comp
  _refInputBeforeDays = comp => this.inputBeforeDays = comp

  render(){
    const { isShow, theme, onShow } = this.props
         , TS = theme.createStyle(styleConfig)
         , _commandButtons = this._createCommandButtons(TS.BT);

    return (
      <A.DraggableDialog
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
        <A.TextField
          style={TS.INPUT_ROOT}
          ref={this._refInputTitle}
          caption="In Title (Default: Weather)"
          initValue="Weather"
        />
        <A.InputSelect
          caption="Site Type"
          initItem={DF_SITE_TYPE}
          options={SITE_TYPE_OPTIONS}
          styleConfig={TS.SELECT}
          onSelect={this._selectSiteType}
        />
        <A.TextField
          style={TS.INPUT_ROOT}
          ref={this._refInputBeforeDays}
          caption="Before Days, Max 30"
          initValue={2}
          errorMsg="0<n<31 value must be"
          onTest={_onTestDaysBefore}
        />

        <A.Link.PoweredBy rootStyle={TS.POWERED_BY}>
          <A.Link.WebhoseIo />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(WebhoseQueryDialog)
