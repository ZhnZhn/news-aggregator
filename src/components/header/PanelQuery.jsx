import React from 'react'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const PanelQuery = ({
  className, isShow,
  onClose, onWebhose, onStackTagged
}) =>
  <ModalPane
    isShow={isShow}
    onClose={onClose}
  >
    <ShowHide
      className={className}
      isShow={isShow}
    >
      <div
        className="row__topic"
        onClick={onWebhose}
      >
        Webhose
      </div>
      <div
        className="row__topic"
        onClick={onStackTagged}
      >
        StackOverflow: Tagged Questions
      </div>
      {/*
      <div className="row__topic">
        StackOverflow: Search Questions
      </div>
      */}
    </ShowHide>
 </ModalPane>


export default PanelQuery
