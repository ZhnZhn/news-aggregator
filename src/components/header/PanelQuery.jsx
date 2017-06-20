import React from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const PanelQuery = ({
  className, paneStyle, isShow,
  clItem,
  onClose, onWebhose, onStackTagged
}) =>
  <ModalPane
    isShow={isShow}
    onClose={onClose}
  >
    <ShowHide
      className={className}
      style={paneStyle}
      isShow={isShow}
    >
      <div
        className={clItem}
        onClick={onWebhose}
      >
        Webhose
      </div>
      <div
        className={clItem}
        onClick={onStackTagged}
      >
        StackOverflow: Tagged Questions
      </div>
      {/*
      <div className={clItem}>
        StackOverflow: Search Questions
      </div>
      */}
    </ShowHide>
 </ModalPane>


export default PanelQuery
