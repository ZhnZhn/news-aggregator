import { memo } from '../uiApi';

const _isNotShouldRerenderIsShow = (
  prevProps,
  nextProps
) => prevProps.isShow === nextProps.isShow
export const memoIsShow = Comp => memo(Comp, _isNotShouldRerenderIsShow)

const _isNotShouldRerenderTrue = () => true
export const memoTrue = Comp => memo(Comp, _isNotShouldRerenderTrue)
