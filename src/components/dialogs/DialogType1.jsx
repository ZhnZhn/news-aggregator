import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import InputSelect from '../zhn-m-input/InputSelect'
import RaisedButton from '../zhn-atoms/RaisedButton'

import withKeyDown from './decorators/withKeyDown'

const DF_SORTBY =   { caption: 'Top', value: 'top'};

const options = [
  { caption: 'Top', value: 'top'},
  { caption: 'Popular', value: 'popularity'},
  { caption: 'Newest', value: 'publishedAt' }
];

@withKeyDown
class DialogType1 extends Component {
  constructor(props){
    super(props)
    this.sortBy = DF_SORTBY.value
    this._handleKeyDownWith = this._handleKeyDownWith.bind(this)
  }


  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (!this.props.isShow && !nextProps.isShow){
          return false;
       }
    }
    return true;
  }


  _selectSortBy = (option) => {
    this.sortBy = option
       ? option.value
       : void 0
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props;
    onLoad({
      type,
      source,
      itemConf,
      sortBy: this.sortBy
    })
  }

  _handleClose = () => {
    this.dialogComp.focusPrevEl()
    this.props.onClose()
  }

  _createCommandButtons = (S) => {
    return [
      <RaisedButton
        key="_load"
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
    const { isShow, caption,
            theme,
            onShow
          } = this.props
        , S = theme.createStyle(styleConfig)
        , _commandButtons = this._createCommandButtons(S.BT);

    return (
      <DraggableDialog
           ref={this._refDialogComp}
           rootStyle={S.R_DIALOG}
           browserCaptionStyle={S.BROWSER_CAPTION}
           styleButton={S.BT}
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
           onKeyDown={this._handleKeyDownWith}
           onShowChart={onShow}
           onClose={this._handleClose}
       >
        <InputSelect
          caption="SortBy"
          initItem={DF_SORTBY}
          options={options}
          styleConfig={S.SELECT}
          onSelect={this._selectSortBy}
        />
      </DraggableDialog>
    );
  }
}

export default withTheme(DialogType1)
