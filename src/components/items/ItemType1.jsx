import { forwardRef } from '../uiApi';

import useTheme from '../hooks/useTheme';
import styleConfig from './Article.Style';

import ItemHeader from './ItemHeader';
import ShowHide from '../zhn-atoms/ShowHide';

import {
  CL_ITEM_HEADER,
  S_CAPTION,
  S_SVG_CLOSE
} from './Item.Style';

const ItemType1 = forwardRef(({
  isShowDescr,
  title,
  children,
  onKeyDown,
  onClick,
  onToggle,
  onClose
}, ref) => {
  const TS = useTheme(styleConfig);

  return (
    <>
      <ItemHeader
        ref={ref}
        className={CL_ITEM_HEADER}
        style={TS.HEADER}
        captionStyle={S_CAPTION}
        btCloseStyle={S_SVG_CLOSE}
        title={title}
        onKeyDown={onKeyDown}
        onClick={onClick}
        onToggle={onToggle}
        onClose={onClose}
      />
      <ShowHide
         isShow={isShowDescr}
         withoutAnimation={true}
         style={TS.DESCR}
      >
         {children}
      </ShowHide>
    </>
  );
})

export default ItemType1
