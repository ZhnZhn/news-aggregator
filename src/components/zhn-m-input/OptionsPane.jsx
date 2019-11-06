import React, { useContext } from 'react'

import ThemeContext from '../hoc/ThemeContext'
import styleConfig  from '../styles/ScrollStyle'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const CL = "with-scroll";

const S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: '20',
    width: '100%',
    maxHeight: 300,
    overflowY: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: 'rgb(77, 77, 77)',
    borderRadius: 2,
    boxShadow: 'rgba(0, 0, 0, 0.3) 0px 2px 2px 0px, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px'
  },
  ITEM: {
    color: 'greenyellow'
  }
};

const _renderOptions = (options, currentItem, clItem, onSelect, isShow) => {
  return options.map(item => {
    const { value, caption } = item
    , _style = value === currentItem.value
         ? S.ITEM
         : void 0;
    return (
      <div
        key={value}
        style={_style}
        className={clItem}
        onClick={onSelect.bind(null, item)}
      >
        {caption}
      </div>
    );
  })
}

const OptionsPane = ({ isShow, options, item, rootStyle, clItem, onSelect, onClose }) => {
  const _theme = useContext(ThemeContext)
  , TS = _theme.createStyle(styleConfig);
return (
  <ModalPane
     style={rootStyle}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       className={`${CL} ${TS.CL_SCROLL}`}
       style={{ ...S.PANE, ...rootStyle }}
    >
      {_renderOptions(options, item, clItem, onSelect, isShow)}
    </ShowHide>
  </ModalPane>
);
}

export default OptionsPane
