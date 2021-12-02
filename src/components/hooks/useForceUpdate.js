import { useReducer } from 'react'

const _reducer = () => ({});
const useForceUpdate = () => useReducer(_reducer);

export default useForceUpdate
