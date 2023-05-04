import {
  memo,
  useState
} from '../uiApi';
import useListen from '../hooks/useListen';

import {
  LPAT_LOADING,
  LPAT_LOADING_COMPLETE,
  LPAT_LOADING_FAILED
} from '../../flux/actions/LoadingProgressActions';

import ProgressLine from '../zhn-atoms/ProgressLine';

const COLOR_LOADING = '#2f7ed8'
, COLOR_FAILED = '#ed5813';

const _crState = (
  completed,
  color
) => [
  completed,
  color
];

const ProgressLoading = ({
  store
}) => {
  const [
    state,
    setState
  ] = useState(
    ()=>_crState(0, COLOR_LOADING)
  )
  , [
    completed,
    color,
  ] = state;

  useListen(store, (actionType)=>{
    if (actionType === LPAT_LOADING){
      setState(_crState(35, COLOR_LOADING))
    } else if (actionType === LPAT_LOADING_COMPLETE){
      setTimeout(
        () => setState(_crState(100, COLOR_LOADING)), 0
      )
    } else if (actionType === LPAT_LOADING_FAILED){
      setState(_crState(100, COLOR_FAILED))
    }
  }, 'listenLoadingProgress')

  return (
    <ProgressLine
       color={color}
       completed={completed}
    />
  );
};

const _isNotShouldRerender = () => true;
export default memo(ProgressLoading, _isNotShouldRerender)
