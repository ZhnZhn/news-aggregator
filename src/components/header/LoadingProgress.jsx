import { memo } from '../uiApi';

import { useLoading } from '../../flux/storeAtoms';
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

const ProgressLoading = () => {
  const loading = useLoading()
  , [
    completed,
    color
  ] = loading === LPAT_LOADING
    ? _crState(35, COLOR_LOADING)
    : loading === LPAT_LOADING_COMPLETE
        ? _crState(100, COLOR_LOADING)
        : loading === LPAT_LOADING_FAILED
            ? _crState(100, COLOR_FAILED)
            : _crState(0, COLOR_LOADING);
  
  return (
    <ProgressLine
       color={color}
       completed={completed}
    />
  );
};

const _isNotShouldRerender = () => true;
export default memo(ProgressLoading, _isNotShouldRerender)
