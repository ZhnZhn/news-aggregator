import Reflux from 'reflux';

export const TYPES = {
  LOADING : 'loadingProgress',
  LOADING_COMPLETE : 'loadingProgressComplete',
  LOADING_FAILED : 'loadingProgressFailed'
}

const LoadingProgressActions = Reflux.createActions({
  [TYPES.LOADING] : {},
  [TYPES.LOADING_COMPLETE] : {},
  [TYPES.LOADING_FAILED] : {}
})

export default LoadingProgressActions
