import { 
  cloneElement,
  safeMap
} from '../uiApi';

const MenuPages = ({
  isShow,
  style,
  pages,
  pageCurrent,
  onNextPage,
  onPrevPage,
  onClose
}) => safeMap(pages, (Page, index) => cloneElement(Page, {
  isShow,
  pageCurrent,
  style,
  pageNumber: index + 1,
  isVisible: isShow && (pageCurrent === index + 1),
  onNextPage: index === 0 ? onNextPage : void 0,
  onPrevPage: index !== 0 ? onPrevPage : void 0,
  onClose
}));

export default MenuPages
