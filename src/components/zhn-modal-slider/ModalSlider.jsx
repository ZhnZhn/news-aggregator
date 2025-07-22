import {
  useState,
  useEffect
} from '../uiApi';

import useThrottleCallback from '../hooks/useThrottleCallback';
import useHasMounted from '../hooks/useHasMounted';

import ModalPane from '../zhn-moleculs/ModalPane';
import MenuPages from './MenuPages';

const CL_SLIDER_PAGES = 'slider-pages'
, S_MODAL_PANE = {
  position: 'absolute',
  overflow: 'hidden'
};

/*
static propTypes = {
  rootStyle: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,

  pageWidth: PropTypes.number,
  maxPages: PropTypes.number,
  model: PropTypes.object,

  onClose: PropTypes.func
}
*/


const DF_INIT_ID = 'p0'
const DF_MODEL = {
  pageWidth: 100,
  maxPages: 2,
  initId: DF_INIT_ID,
  p0: []
};

const _initState = model => {
  const _pW = model.pageWidth
  , _maxP = model.maxPages
  , _initId = model.initId || DF_INIT_ID;

  return {
    pageWidth: _pW,
    pagesStyle: {
      width: `${_maxP*_pW}px`
    },
    pageStyle: {
      width: `${_pW}px`
    },
    pageCurrent: 1,
    pages: [
      {
        key: _initId,
        items: model[_initId],
        titleCl: model.titleCl,
        itemCl: model.itemCl
      }
    ]
  };
};

const _addPage = (
  pages,
  id,
  title,
  model
) => {
  pages.push({
    key: id,
    title: title,
    items: model[id],
    titleCl: model.titleCl,
    itemCl: model.itemCl
  })
};

const _crTransform = (
  pageWidth,
  pageCurrent
) => {
  const _dX = -1*pageWidth*(pageCurrent - 1)+0;
  return {
    transform: `translateX(${_dX}px)`
  };
};

const ModalSlider = ({
  model=DF_MODEL,
  isShow,
  className,
  onClose
}) => {
  const [
    state,
    setState
  ] = useState(() => _initState(model))
  , {
     pageWidth,
     pagesStyle,
     pageStyle,
     pageCurrent,
     pages
   } = state
   , hPrevPage = useThrottleCallback(pageNumber => {
     setState(prevState => {
       prevState.pageCurrent = pageNumber - 1
       return {...prevState};
     })
  })
  , hNextPage = useThrottleCallback((
      id,
      title,
      pageNumber
    ) => {
     setState(prevState => {
       const { pages } = prevState
       , _max = pages.length-1;

       if ( (_max+1) > pageNumber) {
         if (pages[pageNumber] && pages[pageNumber].key !== id) {
           if (pageNumber>0) {
             prevState.pages.splice(pageNumber)
           } else {
             prevState.pages = []
           }
           _addPage(prevState.pages, id, title, model)
         }
       } else {
         _addPage(pages, id, title, model)
       }

       prevState.pageCurrent = pageNumber + 1
       return {...prevState};
     })
  }, [model])
  , _hasMounted = useHasMounted();

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!_hasMounted) {
      setState(_initState(model))
    }
  }, [model])
  // _hasMounted
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <ModalPane
      isShow={isShow}
      className={className}
      style={{...S_MODAL_PANE, ...pageStyle}}
      onClose={onClose}
    >
      <div
        className={CL_SLIDER_PAGES}
        style={{
          ...pagesStyle,
          ..._crTransform(pageWidth, pageCurrent)
        }}
      >
        <MenuPages
          isShow={isShow}
          style={pageStyle}
          pages={pages}
          pageCurrent={pageCurrent}
          onNextPage={hNextPage}
          onPrevPage={hPrevPage}
          onClose={onClose}
        />
      </div>
    </ModalPane>
  );
};

export default ModalSlider
