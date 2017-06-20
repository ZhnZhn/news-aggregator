import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from './Dialog.Style'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import RowInputSelect from './RowInputSelect'
import RaisedButton from '../zhn-atoms/RaisedButton'

const options = [
  { caption: 'top', value: 'top'},
  { caption: 'latest', value: 'latest'},
  { caption: 'popular', value: 'popular'},
]

class DialogType1 extends Component {
  constructor(props){
    super()
    this.sortBy = undefined
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
        <RowInputSelect
          accessKey="s"
          caption="SortBy:"
          placeholder="Default: top"
          options={options}
          onSelect={this._selectSortBy}
        />
      </DraggableDialog>
    );
  }
}

export default withTheme(DialogType1)
