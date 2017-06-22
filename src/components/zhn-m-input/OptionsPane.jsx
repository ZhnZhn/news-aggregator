import React from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const S = {
  PANE: {
    position: 'absolute',
    top: '12px',
    zIndex: '20',
    width: '100%',
    paddingTop: '12px',
    paddingBottom: '12px',
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: '2px',
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: 'greenyellow'
  }
}

const _renderOptions = (options, currentItem, clItem, onSelect, isShow) => {
  return options.map(item => {
    const _style = (item.value === currentItem.value)
             ? S.ITEM
             : undefined;
    return (
      <div
        style={_style}
        className={clItem}
        onClick={onSelect.bind(null, item)}
      >
        {item.caption}
      </div>
    );
  })
}

const OptionsPane = ({ isShow, options, item, rootStyle, clItem, onSelect, onClose }) =>
  <ModalPane
     style={rootStyle}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       style={{ ...S.PANE, ...rootStyle }}
    >
      {_renderOptions(options, item, clItem, onSelect, isShow)}
    </ShowHide>
  </ModalPane>

  export default OptionsPane
