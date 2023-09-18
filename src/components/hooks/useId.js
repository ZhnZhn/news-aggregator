import { crId } from '../uiApi';
import useRefInit from './useRefInit';

const useId = (id) => useRefInit(() => id || crId())

export default useId
