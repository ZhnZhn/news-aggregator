import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import RowInputText from './RowInputText'
import RowInputSelect from './RowInputSelect'
import PoweredBy from '../links/PoweredBy'
import { LinkWebhoseIo } from '../links/Links'
import RaisedButton from '../zhn-atoms/RaisedButton'

const S = {
  POWERED_BY: {
    marginLeft: '16px',
    marginBottom: '8px'
  }
}

const options = [
  { caption: 'news', value: 'news'},
  { caption: 'blogs', value: 'blogs'}
];


class WebhoseQueryDialog extends Component {
  constructor(props){
    super()
    this.siteType = undefined
  }

  _regInput = (propName, inputComp) => {
    this[propName] = inputComp
  }

  _selectSiteType = (option) => {
    this.siteType = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props
        , _inTitle = this.inputTitle.getValue()
        , _beforeDays = this.inputBeforeDays.getValue();
    onLoad({
      type,
      source,
      itemConf,
      loadId: 'W',
      inTitle: _inTitle,
      siteType: this.siteType,
      beforeDays: _beforeDays
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
           caption="Webhose.io Query"
           isShow={isShow}
           commandButtons={_commandButtons}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <RowInputText
          accessKey="t"
          caption="In Title:"
          placeholder="Default: Weather"
          spellCheck={true}
          autoCorrect="on"
          autoComplete="on"
          onReg={this._regInput.bind(null, 'inputTitle')}
        />
        <RowInputSelect
          accessKey="s"
          caption="SiteType:"
          placeholder="Default: News"
          options={options}
          onSelect={this._selectSiteType}
        />
        <RowInputText
          accessKey="b"
          caption="Before Days:"
          placeholder="Default: 2, Number, Max 30"
          onReg={this._regInput.bind(null, 'inputBeforeDays')}
        />
        <PoweredBy rootStyle={S.POWERED_BY}>
          <LinkWebhoseIo />
        </PoweredBy>
      </DraggableDialog>
    );
  }
}

export default withTheme(WebhoseQueryDialog)
