import {
  useRef,
  useCallback
} from '../uiApi';

import useFocusAsyncRefElementIf from '../hooks/useFocusAsyncRefElementIf';
import useItemsFocusTrap from '../hooks/useItemsFocusTrap';
import useGetRefValue2 from '../hooks/useGetRefValue2';
import FocusTrap from '../zhn-moleculs/FocusTrap';

import MenuTitle from './MenuTitle';
import MenuItemList from './MenuItemList';

const DF_ITEMS = [];

const MenuPage = ({
  isShow,
  isVisible,
  items=DF_ITEMS,
  style,
  title,
  titleCl,
  itemCl,
  pageCurrent,
  pageNumber,
  onClose,
  children,
  onNextPage,
  onPrevPage
}) => {
  const _refTitle = useRef()
  , [
    _getFocusRef,
    _refLastItem,
    _refFirstItem
  ] = useItemsFocusTrap(
    items
  )
  , _getFocusFirstItem = useGetRefValue2(
    _refTitle,
    _refFirstItem
  )
  , _hClickTitle = useCallback(() => {
      onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber]);

  useFocusAsyncRefElementIf(
    isVisible,
    _getFocusFirstItem
  )

  return (
    <div style={style}>
      <FocusTrap
        refFirst={_getFocusFirstItem}
        refLast={_refLastItem}
      >
        <MenuTitle
          refTitle={_refTitle}
          titleCl={titleCl}
          title={title}
          onClick={_hClickTitle}
        />
        <MenuItemList
          getFocusRef={_getFocusRef}
          items={items}
          itemCl={itemCl || titleCl}
          pageNumber={pageNumber}
          onNextPage={onNextPage}
          onClose={onClose}
        />
        {children}
      </FocusTrap>
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
