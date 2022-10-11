import {
  useRef,
  useCallback,
  useEffect,
  focusRefElement
} from '../uiApi';

import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const _focusAsyncRefElement = ref => {
  setTimeout(
    () => focusRefElement(ref),
    1000
  )
};

const DF_ITEMS = [];

const MenuPage = ({
  isShow,
  items=DF_ITEMS,
  style,
  title,
  titleCl, itemCl,
  pageCurrent,
  pageNumber,
  onClose,
  children,
  onNextPage,
  onPrevPage
}) => {
  const _refTitle = useRef()
  , _refFirst = useRef()
  , _hClickTitle = useCallback(() => {
      onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber])
  , _isFocus = (pageCurrent === pageNumber) && isShow;

 useEffect(() => {
   if (_isFocus) {
     if (_refTitle.current) {
       _focusAsyncRefElement(_refTitle)
     } else if (_refFirst.current) {
       _focusAsyncRefElement(_refFirst)
     }
   }
 }, [_isFocus])

 return (
    <div style={style}>
      <MenuTitle
        ref={_refTitle}
        titleCl={titleCl}
        title={title}
        onClick={_hClickTitle}
      />
      <MenuItemList
        ref={_refFirst}
        items={items}
        itemCl={itemCl || titleCl}
        pageNumber={pageNumber}
        onNextPage={onNextPage}
        onClose={onClose}
      />
      {children}
    </div>
  );
};

/*
MenuPage.propTypes = {
  isShow: PropTypes.bool,
  title: PropTypes.string,
  pageNumber: PropTypes.number,
  items: PropTypes.arrayOf(
     PropTypes.shapeOf({
        name: PropTypes.string,
        type: PropTypes.string,
        id: PropTypes.string,
        onClick: PropTypes.func
     })
  ),
  onNextPage: PropTypes.func,
  onPrevPage: PropTypes.func,
  onClose: PropTypes.func
}
*/

export default MenuPage
