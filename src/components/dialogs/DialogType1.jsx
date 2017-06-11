import React, { Component } from 'react'

import DraggableDialog from '../zhn-moleculs/DraggableDialog'
import RowInputSelect from './RowInputSelect'
import ActionButton from '../zhn-atoms/ActionButton'

const options = [
  { caption: 'top', value: 'top'},
  { caption: 'latest', value: 'latest'},
  { caption: 'popular', value: 'popular'},
]

class DialogType1 extends Component {
  constructor(props){
    super()
    this.sortBy = undefined
    this.commandButtons = [
      <ActionButton
        type="TypeC"
        caption="Load"
        onClick={this._handleLoad}
      />
    ]
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

  render(){
    const { isShow, caption, onShow } = this.props;
    return (
      <DraggableDialog
           caption={caption}
           isShow={isShow}
           commandButtons={this.commandButtons}
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

export default DialogType1
