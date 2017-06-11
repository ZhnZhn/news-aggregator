import React, { Component } from 'react'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import RowInputText from './RowInputText'
import RowInputSelect from './RowInputSelect'
import PoweredBy from '../links/PoweredBy'
import LinkWebhoseIo from '../links/LinkWebhoseIo'
import ActionButton from '../zhn-atoms/ActionButton'

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
    this.commandButtons = [
      <ActionButton
        type="TypeC"
        caption="Load"
        onClick={this._handleLoad}
      />
    ]
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

  render(){
    const { isShow, onShow } = this.props;
    return (
      <DraggableDialog
           caption="Webhose.io Query"
           isShow={isShow}
           commandButtons={this.commandButtons}
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

export default WebhoseQueryDialog
