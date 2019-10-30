import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import A from '../Comp'

import withKeyDown from './decorators/withKeyDown'

const S = {
  POWERED_BY: {
    marginLeft: 16,
    marginBottom: 8
  }
};

const SORTBY_OPTIONS = [
  {caption: 'Latest', value: 'latest'},
  {caption: 'Popular', value: 'popular'},
], DF_SORTBY = SORTBY_OPTIONS[0];

@withKeyDown
class CryptoCompareNewsDialog extends Component {
  constructor(props){
    super(props)
    this.sortBy = DF_SORTBY.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }

  _selectSortBy = (option) => {
    this.sortBy = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const {
      type, source, itemConf,
      onLoad
    } = this.props;

    onLoad({
      type, source, itemConf,
      loadId: 'CCN',
      sortOrder: this.sortBy,

    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <A.RaisedButton
        rootStyle={S.RAISED_ROOT}
        clDiv={S.CL_RAISED_DIV}
        caption="Load"
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
  }

  _refDialogComp = comp => this.dialogComp = comp

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
           caption="CryptoCompare News"
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
         <div>
           <A.InputSelect
             caption="SortBy"
             initItem={DF_SORTBY}
             options={SORTBY_OPTIONS}
             styleConfig={TS.SELECT}
             onSelect={this._selectSortBy}
           />
         </div>
        <A.Link.PoweredBy rootStyle={S.POWERED_BY}>
          <A.Link.CryptoCompare />
        </A.Link.PoweredBy>
      </A.DraggableDialog>
    );
  }
}

export default withTheme(CryptoCompareNewsDialog)
