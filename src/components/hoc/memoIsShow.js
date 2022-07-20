import { memo } from '../uiApi';

const _isNotShouldRerender = (
  prevProps,
  nextProps
) => prevProps.isShow === nextProps.isShow
, memoIsShow = Comp => memo(Comp, _isNotShouldRerender)

export default memoIsShow
