import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import useFocusAsyncRefElementIf from '../hooks/useFocusAsyncRefElementIf';
import useFocusTrap from '../hooks/useFocusTrap';
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
  , _refFirst = useRef()
  , _getRefFirst = useCallback(
    () => getRefValue(_refTitle) || getRefValue(_refFirst)
  , [])
  , [
    _getFocusRef,
    _refLast
  ] = useFocusTrap(
    items,
    _refFirst
  )
  , _hClickTitle = useCallback(() => {
      onPrevPage(pageNumber)
  }, [onPrevPage, pageNumber]);

  useFocusAsyncRefElementIf(
    isVisible,
    _getRefFirst
  )

  return (
    <div style={style}>
      <FocusTrap
        refFirst={_getRefFirst}
        refLast={_refLast}
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
