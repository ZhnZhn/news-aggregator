import { useContext } from 'react'

import ThemeContext from '../hoc/ThemeContext'
import styleConfig  from '../styles/ScrollStyle'
import styleConfigD from '../dialogs/Dialog.Style'

import ModalPane from '../zhn-moleculs/ModalPane'
import ShowHide from '../zhn-atoms/ShowHide'

const CL = "with-scroll";

const S = {
  PANE: {
    position: 'absolute',
    top: 12,
    zIndex: 20,
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
  , TS = _theme.createStyle(styleConfig)
  , TS_D = _theme.createStyle(styleConfigD);
return (
  <ModalPane
     //style={rootStyle}
     style={TS_D.SELECT.MODAL_PANE}
     isShow={isShow}
     onClose={onClose}
  >
    <ShowHide
       isShow={isShow}
       className={`${CL} ${TS.CL_SCROLL}`}
       //style={{ ...S.PANE, ...rootStyle }}
       style={{ ...S.PANE, ...TS_D.SELECT.MODAL_PANE }}
    >
      {/*_renderOptions(options, item, clItem, onSelect, isShow)*/
      _renderOptions(options, item, TS_D.SELECT.CL_ITEM, onSelect, isShow)}
    </ShowHide>
  </ModalPane>
);
}

export default OptionsPane
