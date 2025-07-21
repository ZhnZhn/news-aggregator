import { safeMap } from '../uiApi';
import MenuPage from './MenuPage';

const MenuPages = ({
  isShow,
  style,
  pages,
  pageCurrent,
  onNextPage,
  onPrevPage,
  onClose
}) => safeMap(pages, ({key, ...restProps}, index) => (<MenuPage
  key={key}
  {...restProps}
  isShow={isShow}
  pageCurrent={pageCurrent}
  style={style}
  pageNumber={index + 1}
  isVisible={isShow && (pageCurrent === index + 1)}
  onNextPage={index === 0 ? onNextPage : void 0}
  onPrevPage={index !== 0 ? onPrevPage : void 0}
  onClose={onClose}
/>))

export default MenuPages
