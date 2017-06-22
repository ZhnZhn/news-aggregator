import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import InputSelect from '../zhn-m-input/InputSelect'
import RaisedButton from '../zhn-atoms/RaisedButton'

const DF_SORTBY =   { caption: 'Top', value: 'top'};

const options = [
  { caption: 'Top', value: 'top'},
  { caption: 'Latest', value: 'latest'},
  { caption: 'Popular', value: 'popular'},
];

class DialogType1 extends Component {
  constructor(props){
    super()
    this.sortBy = DF_SORTBY.value
  }

  _selectSortBy = (option) => {
    this.sortBy = (option)
       ? option.value
       : undefined
  }

  _handleLoad = () => {
    const { type, source, itemConf, onLoad } = this.props;
    onLoad({
      type,
      source,
      itemConf,
      sortBy: this.sortBy,
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
        isPrimary={true}
        onClick={this._handleLoad}
      />
    ];
  }

  render(){
    const { isShow, caption,
            theme,
            onShow
          } = this.props
        , S = theme.createStyle(styleConfig)
        , _commandButtons = this._createCommandButtons(S.BT);

    return (
      <DraggableDialog
           rootStyle={S.R_DIALOG}
           browserCaptionStyle={S.BROWSER_CAPTION}
           styleButton={S.BT}
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
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
